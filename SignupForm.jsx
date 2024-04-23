import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const[showPassword, setShowPassword] = useState(false);
    const[showConfirmPassword, setShowConfirmPassword] = useState(false);
    const[accountType, setAccountType] = useState("User");

    function changeHandler(event){
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name] : event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmPassword){
            toast.error("Passwords do not match");
            return;
        }
        
        const accountData = {
            ...formData
        };

        const finalData = {
            ...accountData,
            accountType
        }

        setIsLoggedIn(true);
        toast.success("Account Created");
        navigate("/dashboard");
    }

    return (
    <div>
        <div
        className='flex bg-slate-900 p-1 gap-x-1 my-6 rounded-full max-w-max'
        >
            <button
            className={`${accountType === "User"
            ?
            "text-black bg-green-500"
            : "bg-transparent text-slate-500"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={() => setAccountType("User")}
            >
                User
            </button>
            <button
            className={`${accountType === "Admin"
            ?
            "text-black bg-green-500"
            : "bg-transparent text-slate-500"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={() => setAccountType("Admin")}>
                Admin
            </button>
        </div>

        <form onSubmit={submitHandler}>
            {/* first and last name */}
            <div className='flex gap-x-4'>
                <label className='w-full'>
                    <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>
                        First Name <sup className='text-pink-600'>*</sup>
                    </p>
                    <input
                        required
                        type='text'
                        name='firstName'
                        onChange={changeHandler}
                        placeholder='Enter First Name'
                        value={formData.firstName}
                        className='rounded-[0.5rem] p-[6px] bg-slate-900 w-full text-white'
                    />
                </label>

                <label className='w-full'>
                    <p className='text-[0.875rem] text-white leading-[1.375rem] mt-2'>
                        Last Name <sup className='text-pink-600'>*</sup>
                    </p> 
                    <input
                        required
                        type='text'
                        name='lastName'
                        onChange={changeHandler}
                        placeholder='Enter Last Name'
                        value={formData.lastName}
                        className='rounded-[0.5rem] p-[6px] bg-slate-900 w-full text-white'
                    />
                </label>
            </div>

            {/* email */}
            <label className='w-full'>
                <p className='text-[0.875rem] text-white leading-[1.375rem] mt-2'>
                    Email <sup className='text-pink-600'>*</sup>
                </p>
                <input
                    required
                    type='email'
                    name='email'
                    onChange={changeHandler}
                    placeholder='Enter Email'
                    value={formData.email}
                    className='rounded-[0.5rem] p-[6px] bg-slate-900 w-full text-white'
                />
            </label>

            {/* password and its confirmation */}
            <div className='flex gap-x-4'>
                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-white mt-2 leading-[1.375rem]'>
                        Create Password <sup className='text-pink-600'>*</sup>
                    </p>
                    <input
                        required
                        type={showPassword ? ("text") : ("password")}
                        name='password'
                        onChange={changeHandler}
                        placeholder='Enter Password'
                        value={formData.password}
                        className='rounded-[0.5rem] p-[6px] bg-slate-900 w-full text-white'
                    />

                    <span 
                    className='absolute right-3 top-[41px] cursor-pointer'
                    onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'className='-mt-1'/>) : 
                        (<AiOutlineEye fontSize={24} fill='#AFB2BF'className='-mt-1'/>)}
                    </span>
                </label>

                <label className='w-full relative mt-2'>
                <p className='text-[0.875rem] text-white leading-[1.375rem]'>
                    Confirm Password <sup className='text-pink-600'>*</sup>
                </p>
                <input
                    required
                    type={showConfirmPassword ? ("text") : ("password")}
                    name='confirmPassword'
                    onChange={changeHandler}
                    placeholder='Confirm Password'
                    value={formData.confirmPassword}
                    className='rounded-[0.5rem] p-[6px] bg-slate-900 w-full text-white'
                />

                <span 
                className='absolute right-3 top-[33px] cursor-pointer'
                onClick={() => setShowConfirmPassword((prev) => !prev)}>
                    {showConfirmPassword ? 
                    (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'className='-mt-1'/>) : 
                    (<AiOutlineEye fontSize={24} fill='#AFB2BF'className='-mt-1'/>)}
                </span>
            </label>
            </div>

            <button className='bg-yellow-400 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-5 w-full'>
                Create Account
            </button>
        </form>
    </div>
  )
}

export default SignupForm