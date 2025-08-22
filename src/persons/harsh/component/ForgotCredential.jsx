import React from 'react';
import { useForm } from 'react-hook-form';
import useApiHandler from '@/hooks/useApiCall';
import { showErrorToast, showSuccessToast } from '@/lib/toastUtils';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ForgotCredential = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const apiCaller = useApiHandler();
  const navigate= useNavigate();
  const user = useSelector((state)=>state.profile);
  console.log("userrr",user);
  

  const onSubmit = async (data) => {
    try{
       console.log("Form Submitted:", data);
  
    if (data.email && data.confirmationCode && data.newPassword) {
      const confirmationOtpPayload = {
        email: data.email,
        confirmation_code: data.confirmationCode,
        new_password: data.newPassword,
      };
  
      const res = await apiCaller(
        "/auth/confirm-forgot-password",
        "post",
        confirmationOtpPayload
        
      );
  
      if (res?.data?.status_code === 200 || res?.data?.success) {
        showSuccessToast("Password Updated Successfully");
        navigate("/home");
      } else {
        console.log(res);
        showErrorToast("Failed to update password. Please try again.");
      }
    } else {

      showErrorToast("All fields are required.");
    }

    }
    catch(e) {
      console.log("catch",e.message);
      showErrorToast(e.message);

    }
   
  };
  

  return (
    <div className='flex flex-col justify-center  items-center mx-auto w-3/4 mt-[200px] font-Poppins'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3.5'>

        {/* Email Field */}
        <div>
          <label htmlFor='email'>Enter Your Registered Email</label>
          <input
            type='email'
            id='email'
            {...register("email", { required: "Email is required" })}
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Confirmation Code Field */}
        <div>
          <label htmlFor='confirmationCode'>Enter the Confirmation Code</label>
          <input
            type='text'
            id='confirmationCode'
            {...register("confirmationCode", {
              required: "Confirmation code is required",
            })}
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.confirmationCode && (
            <p className="text-red-500 text-sm">{errors.confirmationCode.message}</p>
          )}
        </div>

        {/* New Password Field */}
        <div>
          <label htmlFor='newPassword'>Enter New Password</label>
          <input
            type='password'
            id='newPassword'
            {...register("newPassword", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
                message:
                  "Password must include uppercase, lowercase, number, and special character",
              },
            })}
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.newPassword && (
            <p className="text-red-500 text-sm">{errors.newPassword.message}</p>
          )}
        </div>

        <button type='submit' className='bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ForgotCredential;
