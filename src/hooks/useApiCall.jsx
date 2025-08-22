import { axiosInstance } from "@/lib/axiosInstance";
import {
  showErrorToast,
  showLoadingToast,
  showSuccessToast,
} from "@/lib/toastUtils";
import toast from "react-hot-toast";
import axios from "axios";

const useApiHandler = () => {

  async function apiCall(url,method,data = null) {
    
    const loadingToast = showLoadingToast(" Please wait...");

    try {
      const res = await axiosInstance.request({
        url,
        method,
        ...(data && { data }),
      });

      toast.dismiss(loadingToast);
      console.log("response,",res);

      if (res?.data?.status_code === 200 || res?.data?.success) {
        const successMessage =
          res?.data?.message || "OPERATION COMPLETED SUCCESSFULLY";
        showSuccessToast(successMessage);
        return res;
      } else {
        const errMessage = res?.data?.message || "Unexpected Error";
        showErrorToast(errMessage);
      }
    } catch (error) {
      toast.dismiss(loadingToast);

      const errMessage =
        axios.isAxiosError(error) && error.response?.data?.message
          ? error.response.data.message
          : "An error occurred while processing your request.";

      showErrorToast(errMessage);
      console.error("API Error:", error);
    }
  }

  return apiCall;
};

export default useApiHandler;
