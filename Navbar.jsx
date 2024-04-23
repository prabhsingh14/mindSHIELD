import React from 'react'
import { Link } from 'react-router-dom'
import {toast} from 'react-hot-toast'

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    return (
        <nav class="flex justify-evenly items-center px-4 py-4 border-b-[1px] border-b-yellow-300 gap-x-40 mt-1 mx-auto">
                <Link to="/">
                    <p class="text-xl font-bold text-white">mindSHIELD</p>
                </Link>
                
                <ul class="flex space-x-4 text-white cursor-pointer">
                    <Link to="/">
                        <li className='hover:text-yellow-400'>Home</li>
                    </Link>
                    <Link to="/preorder">
                        <li className='hover:text-yellow-400'>Book Helmet</li>
                    </Link>
                    <Link to="/contact">
                        <li className='hover:text-yellow-400'>Contact</li>
                    </Link>
                </ul>
                
                <div class="flex space-x-2">
                    {   !isLoggedIn &&
                        <Link to="/login">
                            <button class="bg-transparent hover:bg-green-400 hover:text-black hover:border-black text-white font-bold py-2 px-4 border border-white rounded-md">Login</button>
                        </Link>
                    }

                    {   !isLoggedIn &&
                        <Link to="/signup">
                        <button class="bg-transparent hover:bg-green-400 hover:text-black hover:border-black text-white font-bold py-2 px-4 border border-white rounded-md">Signup</button>
                        </Link>
                    }

                    {   isLoggedIn &&
                        <Link to="/">
                            <button class="bg-transparent hover:bg-green-400 hover:text-black hover:border-black text-white font-bold py-2 
                            px-4 border border-white rounded-md" onClick={() => {
                                setIsLoggedIn(false);
                                toast.success("Logged Out");
                            }}>Logout</button>
                        </Link>
                    }

                    {   isLoggedIn &&
                        <Link to="/dashboard">
                        <button class="bg-transparent hover:bg-green-400 hover:text-black hover:border-black text-white font-bold py-2 px-4 border border-white rounded-md">Dashboard</button>
                        </Link>
                    }
                </div>
        </nav>
    )
}

export default Navbar