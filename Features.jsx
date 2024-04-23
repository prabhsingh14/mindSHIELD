import React from "react";
import bluetooth from "../assets/bluetooth.jpg"
import sensor from "../assets/Sensors.jpg"
import gps from "../assets/GPS (1).jpg"
import app from "../assets/app.jpg"
import { FaBluetooth } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";

const Features = () => {
    return (
        <div>
            <div className="feature-section mt-44 mx-auto max-w-5xl">
                    <h2 className='font-bold text-[30px] text-center text-green-400 mb-10'>Smarter Than Ever: Features Designed for Your Ride</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                        <div className="feature-card bg-white rounded-lg shadow-md p-4 flex flex-col items-center border-yellow-300 border-[5px]">
                            <div className="flex items-center gap-2">
                                <i className="text-green-500">
                                    <FaBluetooth className="text-2xl w-6 h-6"/>
                                </i>
                                <h3 className="text-xl font-bold mb-0">Bluetooth Connectivity</h3>
                            </div>
                            <p className="text-gray-700 mt-3">Connect your smart helmet to your smartphone or other devices via Bluetooth for seamless 
                            integration with navigation, and calls.</p>
                            <img src={bluetooth} className="mt-10 rounded-lg"/>
                        </div>
                        <div className="feature-card bg-white rounded-lg shadow-md p-4 flex flex-col items-center border-yellow-300 border-[5px]">
                            <div className="flex items-center gap-2">
                                <i class="text-green-500">
                                    <FaBolt className="text-2xl w-6 h-6"/>
                                </i> 
                                <h3 class="text-xl font-bold mb-2">Impact Sensors</h3>
                            </div>
                            <p class="text-gray-700">Advanced impact sensors detect sudden impacts or collisions and can automatically alert 
                            emergency contacts or services, providing an added layer of protection in case of accidents.</p>
                            <img src={sensor} className="mt-10 rounded-lg"/>
                        </div>
                        <div className="feature-card bg-white rounded-lg shadow-md p-4 flex flex-col items-center border-yellow-300 border-[5px]">
                            <div className="flex items-center gap-2">
                                <i class="text-green-500">
                                    <FaMapMarkerAlt className="text-2xl w-6 h-6"/>
                                </i> 
                                <h3 class="text-xl font-bold mb-2">Built-in GPS navigation system</h3>
                            </div>
                            <p class="text-gray-700">Integrated GPS navigation provides the live location of the rider to the emergency contacts
                            and helplines in case of any accident.</p>
                            <img src={gps} className="mt-3 rounded-lg"/>
                        </div>
                        <div className="feature-card bg-white rounded-lg shadow-md p-4 flex flex-col items-center border-yellow-300 border-[5px]">
                            <div className="flex items-center gap-2">
                                <i class="text-4xl text-green-500">
                                    <FaAppStore className="text-2xl w-6 h-6"/>
                                </i> 
                                <h3 class="text-xl font-bold mb-2">App integration</h3>
                            </div>
                            <p class="text-gray-700">Personalised mindSHIELD app allow users to share their live location to their loved ones, check
                            whether they exceed the speed limit, also get notified in case of sudden break, or sudden rotation of the bike.</p>
                            <img src={app} className="mt-3 rounded-lg"/>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Features;
