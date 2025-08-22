import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '@/redux/slices/profileSlice';
import { changeUserState } from '@/redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';


import useApiHandler from '@/hooks/useApiCall';
import { showErrorToast } from '@/lib/toastUtils';

const LogoutModal = ({ onCancel, onConfirm }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const apiCaller= useApiHandler();

  const handleConfirm = async () => {
    const toastId = toast.loading("Logging out...");
    try {
      const res = await apiCaller('/auth/logout', "GET");
      console.log("response", res);

      if (res?.status === 200) {
        Cookies.remove("access_token", { path: "/" });
      Cookies.remove("id_token", { path: "/" });
      Cookies.remove("refresh_token", { path: "/" });
        dispatch(logout()); 
        dispatch(changeUserState(false)); // slice state updation
        navigate("/"); // Redirect to home or login page
      } else {
        showErrorToast("Logout failed. Please try again.");
      }
    } catch (e) {
      console.error("Logout error:", e.message);
      showErrorToast(e.message);
    } finally {
      toast.dismiss(toastId);
    }

    onConfirm(); 
  };

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-md bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h3 className="text-xl font-semibold text-center mb-4">Are you sure you want to log out?</h3>
        <div className="flex justify-between">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
