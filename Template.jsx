import React from 'react'
import SignupForm from './SignupForm'
import LogInForm from './LogInForm'
import { FcGoogle } from 'react-icons/fc'

const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {
    return(
        <div className='flex w-11/12 py-12 mx-auto gap-x-12 gap-y-0 translate-x-64'>
            <div className=''>
                <h1
                className='text-white font-semibold text-[1.875rem] leading-[2.375rem]'
                >{title}</h1>
                
                <p className='text-[1.125rem] leading-[1.675rem] mt-4'>
                    <span className='text-white'>{desc1}</span>
                    <br/>
                    <span className='italic text-yellow-400'>{desc2}</span>
                </p>

                {formtype === "signup" ?
                (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) :
                (<LogInForm setIsLoggedIn={setIsLoggedIn}/>)}

                <div className='flex w-full items-center my-4 gap-x-2'>
                    <hr className='w-full h-[1px] opacity-40'></hr>
                    <p className='text-white font-medium leading-[1.375rem]'>OR</p>
                    <hr className='w-full h-[1px] opacity-40'></hr>
                </div>

                <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-white
                border border-yellow-200 px-[12px] py-[8px] gap-x-2 mt-6'>
                    <FcGoogle/>
                    <p>Sign in with Google</p>
                </button>
            </div>

            <div className='translate-x-20 mt-8'>
                <img src={image}
                    width={558}
                    height={490}
                    className='rounded-[30px]'
                />
            </div>
        </div>
    )
}

export default Template