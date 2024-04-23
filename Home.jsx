import React from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/hero-image.jpg'
import Features from '../components/Features'
import Specifications from '../components/Specifications'
import Footer from '../components/common/Footer'
import './Home.css'

const Home = ({isLoggedIn}) => {
    return (
        <div>
            {/* Hero section */}
            <div className='flex lg:flex-row sm:flex-col md:flex-col'>
                <div className='flex flex-col lg:w-[50%]'>
                    <h2 class="font-bold text-white px-10 text-[40px] py-44">Is Your Helmet Just a Bucket... or a Lifesaver?</h2>
                    <p class="text-white font-normal px-10 -mt-28">Standard helmets? Yesterday's tech. The mindSHIELD helmet is the revolution. 
                    Collision detection built-in, ready to react faster than human reflexes when disaster strikes. A built-in emergency SOS system 
                    instantly connects you to help, because seconds matter. Don't be a statistic.</p>
                    <Link to="/preorder">
                        <button className="py-[10px] px-6 text-black font-mullish font-bold text-md rounded-md bg-yellow-400 md:w-[20%] hover:bg-green-400
                        mt-10 translate-x-10 preorder">
                            Pre-order Now
                        </button>
                    </Link>
                </div>

                <img
                    src={heroImage}
                    alt='Smart helmet image'
                    className='mt-24 rounded-lg shadow-lg max-w-xl lg:translate-x-16 lg:translate-y-5 hover:animate-pulse
                    sm:translate-x-10'
                />
            </div>

            {/* Features section - responsive*/}
            <Features/>

            {/* Specifications */}
            <Specifications/>
            
            {/* Footer */}
            <Footer/>
        </div>
    )
}

export default Home