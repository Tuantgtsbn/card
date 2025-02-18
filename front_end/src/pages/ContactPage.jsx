import { useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { AiOutlineHome } from "react-icons/ai";
import { LuPhoneCall } from "react-icons/lu";
import { CiClock2 } from "react-icons/ci";
import { FaFacebookF, FaYoutube } from 'react-icons/fa';
import { FaInstagram } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";
import Button from '@/components/Button/Button';
function ContactPage() {
    const [isLoading, setIsLoading] = useState(true);
    const handleIframeLoad = () => {
        console.log("Google Map Loaded!"); // Kiểm tra xem có log không
        setIsLoading(false);
    };
    return (
        <>
            <div className='w-full h-[400px] relative'>
                {isLoading && <Skeleton className='w-full h-full' />}
                <iframe className="w-full h-[400px] rounded-lg border" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29797.902197857657!2d105.77670237431639!3d21.00314599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad2bfc58e2bb%3A0xba48c589ae7f6ff9!2sUNIQLO%20Vincom%20Royal%20City!5e0!3m2!1svi!2s!4v1737110089365!5m2!1svi!2s" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" onLoad={handleIframeLoad}></iframe>
            </div>
            <div className='flex border border-solid border-thirdWhite mt-[55px] mx-auto px-2 w-[95%] max-w-[1360px] flex-col xl:flex-row'>
                <div className='information p-[16px] md:p-[30px] xl:p-[55px] xl:w-[320px] xl:border-solid xl:border-thirdWhite xl:border-r '>
                    <div className='pb-3 border-b border-solid border-thirdWhite'>
                        <p className='text-2xl'>Information</p>
                    </div>
                    <div>
                        <div className='flex items-center mt-5'>
                            <AiOutlineHome />
                            <p className=' pl-2'>Address</p>
                        </div>
                        <p className='text-gray-500'>7895 Piermont Dr NE Albuquerque, NM 198866</p>
                        <div className='flex items-center mt-5'>
                            <LuPhoneCall />
                            <p className=' pl-2'>Phone</p>
                        </div>
                        <p className='text-gray-500'>+391 (0)35 2568 4593</p>
                        <p className='text-gray-500'>hello@domain.com</p>
                        <div className='flex items-center mt-5'>
                            <CiClock2 />
                            <p className=' pl-2'>We're Open</p>
                        </div>
                        <p className='text-gray-500'>Every day 11am to 7pm</p>
                    </div>
                    <div className='flex gap-3 mt-5'>
                        <div className='w-[30px] h-[30px] rounded-full text-white bg-mainBlack flex justify-center items-center'>
                            <a href='https://www.youtube.com/'>
                                <FaFacebookF />
                            </a>
                        </div>
                        <div className='w-[30px] h-[30px] rounded-full text-white bg-mainBlack flex justify-center items-center'>
                            <a href='https://www.youtube.com/'>
                                <FaYoutube />
                            </a>
                        </div>
                        <div className='w-[30px] h-[30px] rounded-full text-white bg-mainBlack flex justify-center items-center'>
                            <a href='https://www.youtube.com/'>
                                <FaInstagram />
                            </a>
                        </div>
                        <div className='w-[30px] h-[30px] rounded-full text-white bg-mainBlack flex justify-center items-center'>
                            <a href='https://www.youtube.com/'>
                                <LiaTelegramPlane />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='contact xl:px-[100px] px-[16px] md:px-[30px] py-[12px] md:py-[40px] xl:py-[55px] flex-1'>
                    <div className='pb-3 border-b border-solid border-thirdWhite'>
                        <p className='text-2xl'>Contact Us</p>
                    </div>
                    <div className="mt-5">
                        <p>If you’ve got great products your looking to work with us then drop us a line.</p>
                    </div>
                    <div className="mt-5 flex flex-col xl:flex-row gap-5">
                        <input type="text" placeholder='Name' className='flex-1 min-h-[40px] px-[17px] border border-solid border-thirdWhite' />
                        <input type="text" placeholder='Email' className='flex-1 min-h-[40px] px-[17px] border border-solid border-thirdWhite' />
                    </div>
                    <div className="mt-5">
                        <textarea name="" id="" rows={4} placeholder='Message' className='w-full border border-solid border-thirdWhite p-[17px]'></textarea>
                    </div>
                    <div className="mt-5">
                        <Button className='w-full p-2'>
                            Send now
                        </Button>
                    </div>
                </div>
                <div></div>
            </div>
        </>

    );
}

export default ContactPage;