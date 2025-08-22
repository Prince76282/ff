import { toast } from "react-hot-toast";


const baseToastStyle = {
  padding: "16px", 
  borderRadius: "8px", 
  border: "1px solid",
};



export const showSuccessToast = (message, options = {},dismiss=false) =>{
  const toastId=toast.success(message, {
    duration: 3000,
    position: "bottom-right",
    style: customPromiseStyles.success,
    ...options, 
  });
  if (dismiss){
    setTimeout(() => {
        toast.dismiss(toastId);
      }, 1000)
}
return toastId

}
// Utility function to show error toast
export const showErrorToast = (message, options = {},dismiss=false) =>{
   const toastId= toast.error(message, {
        duration: 5000,
        position: "bottom-right",
        style: customPromiseStyles.error,
        ...options, // Allow overrides
      }
    );
    if (dismiss){
        setTimeout(() => {
            toast.dismiss(toastId);
          }, 1000)
    }
    return toastId

}
 



export const showLoadingToast = (message,options={},dismiss=false)=>{
   const toastId= toast.loading(message,{
        duration:5000,
        style:customPromiseStyles.loading,
        ...options
    })

    if (dismiss){
        setTimeout(() => {
            toast.dismiss(toastId);
          }, 1000)
    }
    return toastId
    
}

  export const customPromiseStyles = {
    loading: {
        width: '300px',
        background: '#f0f0f0', // Light gray background
        color: '#008080', // Dark gray text
       ...baseToastStyle,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        fontSize: '14px',
        textAlign: 'center',
      },
      success: {
        width: '300px',
        background: '#f0f0f0', // Light green background
        color: '#008080', // Dark green text
        ...baseToastStyle,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        fontSize: '14px',
        textAlign: 'center',
      },
      error: {
        width: '300px',
        background: '#dc3545', // Red background
        color: '#ffffff', // White text
        ...baseToastStyle,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        fontSize: '14px',
        textAlign: 'center',
      },
  };
  