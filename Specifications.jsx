import React from 'react'
import 'aos/dist/aos.css'
import './Specifications.css'

const Specifications = () => {
    return (
        <div>
            {/* Specification-1 */}
            <section className='sec-01 bg-[#111222] mt-20'>
                <div className='container'>
                    <h2 className='text-green-400 mt-10 text-4xl font-bold mb-10'>Why This Helmet Stands Out</h2>
                    <div className='content'>
                        <div className='image'>
                        <img/>
                        </div>
                        <div className='text-box'>
                            <h3 className='font-bold mb-4'>MQ3 Sensor</h3>
                            <p>Real-time CO  and high alcohol alerts warn riders of potential poisoning risks, especially in enclosed spaces like tunnels or traffic jams.
                            It is used to detect alcohol usage by the rider to prevent accidents by not igniting the engine.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specification-2 */}
            <section className='sec-02 bg-[#111222]'>
                <div className='container'>
                    <h3 className='mb-[80px] text-yellow-300 font-bold text-2xl'>Experience the freedom of the open road with greater peace of mind.</h3>
                    <div className='content'>
                        <div className='image-01'>
                            <img/>
                        </div>
                        <div className='info'>
                            <h4 className='info-title font-bold'>SW-420 Vibration Sensor</h4>
                            <p>
                                In case of a collision, the sensor's data can be used by the helmet's internal processing unit to trigger emergency 
                                response protocols. This includes automatically sending SOS alerts with location data to designated contacts or 
                                emergency services, potentially saving valuable time in critical situations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specification-3 */}
            <section className='sec-03 bg-[#111222]'>
                <div className='container'>
                    <div className='content'>
                        <div className='image-02'>
                        <img/>
                        </div>
                        <div className='text-box'>
                            <h3 className='font-bold mb-4'>HC-05 Wireless Bluetooth RF Transceiver Module</h3>
                            <p>Share ride data (e.g., location, speed) with other riders or emergency services. Additionally, the module allows for 
                            configuration and firmware updates for the smart helmet.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Specifications