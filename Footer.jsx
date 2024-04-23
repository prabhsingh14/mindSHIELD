import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="bg-black text-white py-12">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="col-span-1 md:col-span-2">
                            <h3 className="text-3xl font-bold mb-4">mindSHIELD</h3>
                            <p className="mb-4">Standard helmets? Yesterday's tech. The mindSHIELD helmet is the revolution. 
                            Collision detection built-in, ready to react faster than human reflexes when disaster strikes. 
                            A built-in emergency SOS system instantly connects you to help, because seconds matter. Don't be a statistic.</p>
                        </div>

                        <div>
                            <h5 className="text-xl font-bold mb-2">Quick Links</h5>
                            <ul>
                                <li className="mb-2">
                                    <a href="/" className="hover:text-yellow-500">Home</a>
                                </li>
                                <li className="mb-2">
                                    <a href="/preorder" className="hover:text-yellow-500">Book Helmet</a>
                                </li>
                                <li className="mb-2">
                                    <a href="/contact" className="hover:text-yellow-500">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-xl font-bold mb-2">We are always there for you!</h5>
                            <p className="mb-2"><i className="fas fa-phone-volume"></i> +91 7206016422</p>
                            <p className="mb-2"><i className="fas fa-envelope"></i> supportteam@mindshield.in</p>
                            <p className="mb-2"><i className="fas fa-paper-plane"></i> Punjab</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-black text-white py-4 text-center'>
                <p>Designed and Developed By Prabh Singh</p>
            </div>
        </div>
    )
}

export default Footer;
