import React from 'react';

import { ImCancelCircle } from "react-icons/im";
import AuthComponent from './AuthComponent';

const LoginModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-1    bg-opacity-40 backdrop-blur-sm flex justify-center mx-auto items-center z-50">
            <div className="relative border    p-4 rounded-md shadow-lg   w-[50%]">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-2 text-2xl font-bold text-gray-600 hover:text-black"
                >
                   <ImCancelCircle className='text-3xl' />
                </button>

                {/* Signin Component */}
                <AuthComponent />
            </div>
        </div>
    );
};

export default LoginModal;
