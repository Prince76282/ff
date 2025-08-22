import useApiHandler from '@/hooks/useApiCall';
import { showErrorToast, showSuccessToast } from '@/lib/toastUtils';
import { compose } from '@reduxjs/toolkit';
import React from 'react';
import { useForm } from 'react-hook-form';
import { CiLock } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

const ResetPassword = ({ resetPassword }) => {

    

    const apiCaller= useApiHandler();
    




    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        console.log("Password reset data:", data);
       
        const passwordPayload= {
            old_password:data?.oldPassword,
            new_password: data?.newPassword,
        };

        try{
            const passwordUpdateResponse= await apiCaller("/auth/change_password","post",passwordPayload);
            console.log("passwordres",passwordUpdateResponse);

            if(passwordUpdateResponse?.data?.status_code===200)
            {
                showSuccessToast("PasswordUpdated Successfully");
                resetPassword(false);
            }
            


        }
        catch(e) {
            console.log(e.message);
            showErrorToast("Error Occured While Resetting Password, Please try again");

        }

    };

    const oldPassword = watch("oldPassword");


    return (
        <div className=' relative flex flex-col font-Poppins gap-4 justify-center bg-white lg:mt-[40px] mt-[25px] items-center mx-auto backdrop-blur-2xl lg:w-[400px] w-auto  p-6 rounded-xl shadow-lg'>
            <button
                onClick={() => resetPassword(false)}
                className="absolute right-2 top-2 w-9 h-9 rounded-full  text-red-600 hover:bg-red-200 hover:text-red-700 transition duration-200 flex items-center justify-center shadow-md"
                aria-label="Close"
            >
                <RxCross2 className='text-3xl' />

            </button>


            <CiLock className='text-4xl' />
            <p className='text-2xl font-bold'>Reset Your Password</p>


            <form className='flex flex-col gap-4 w-full' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col'>
                    <label className='text-sm font-medium'>Enter Your Old Password</label>
                    <input
                        type='password'
                        className='p-2 rounded border border-gray-300'
                        {...register("oldPassword", { required: "Old password is required" })}
                    />
                    {errors.oldPassword && (
                        <span className='text-red-600 text-sm'>{errors.oldPassword.message}</span>
                    )}
                </div>

                <div className='flex flex-col'>
                    <label className='text-sm font-medium'>Enter Your New Password</label>
                    <input
                        type='password'
                        className='p-2 rounded border border-gray-300'
                        {...register("newPassword", {
                            required: "New password is required",
                            validate: {
                                notSameAsOld: value =>
                                    value !== oldPassword || "New password must be different from old password",
                                strongPassword: value =>
                                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/.test(value) ||
                                    "Password must include uppercase, lowercase, number, and special character"
                            }
                        })}
                    />
                    {errors.newPassword && (
                        <span className='text-red-600 text-sm'>{errors.newPassword.message}</span>
                    )}
                </div>

                <button
                    type="submit"
                    className="bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 mt-2"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ResetPassword;
