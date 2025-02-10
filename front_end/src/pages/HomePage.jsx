import Banner from "@/components/Banner/Banner";
import Img1 from '/images/homepage/Background.png';
import Img2 from '/images/homepage/trending/tet.png';
import Img3 from '/images/homepage/trending/valentine.png';
import { IoCloudDownloadOutline } from "react-icons/io5"
import { IoPrintOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdManageSearch } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
function HomePage() {
    return (
        <div className="">
            <Banner classname='mb-[64px]' />
            <div>
                <h1 className="mb-8 mb-md-12 px-6 px-sm-0 text-[36px] font-semibold text-center">Explore what's <span className="text-[#ff618b]">trending</span></h1>
                <div className="flex flex-row lg:gap-8 gap-3 overflow-x-scroll w-full lg:justify-center scrollbarHidden">
                    <div className="group max-lg:basis-full max-lg:flex-grow-0 max-lg:flex-shrink-0 lg:w-[480px] max-lg:px-2">
                        <div className="relative rounded-s-md w-full">
                            <img loading="lazy" src={Img1} alt="" className="w-full h-full lg:h-[472px] rounded-tl-[24px] rounded-tr-[24px]" />
                            <div className="max-w-[264px] w-3/5 aspect-[3/4] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-105 transition-transform"><img loading="lazy" src={Img2} alt="" className="w-full h-full object-cover" /></div>
                        </div>
                        <div className="flex justify-between items-center rounded-bl-[24px] rounded-br-[24px] bg-gray-200 px-[28px] py-[12px]">
                            <p className="text-xl group-hover:scale-105 transition-transform">Tet holiday</p>
                            <div className="w-[32px] h-[32px] rounded-full bg-[#7f49d0] flex justify-center items-center group-hover:scale-105 transition-transform">
                                <FaRegHeart className="lg:text-xl text-white" />
                            </div>
                        </div>
                    </div>
                    <div className="group max-lg:basis-full max-lg:flex-grow-0 max-lg:flex-shrink-0 lg:w-[480px]  max-lg:px-2">
                        <div className="relative rounded-s-md w-full">
                            <img loading="lazy" src={Img1} alt="" className=" w-full h-full lg:h-[472px] rounded-tl-[24px] rounded-tr-[24px]" />
                            <div className="max-w-[264px] w-3/5 aspect-[3/4] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-105 transition-transform"><img loading="lazy" src={Img3} alt="" className="w-full h-full object-cover" /></div>
                        </div>
                        <div className="flex justify-between items-center rounded-bl-[24px] rounded-br-[24px] bg-gray-200 px-[28px] py-[12px]">
                            <p className="text-xl group-hover:scale-105 transition-transform">Valentine holiday</p>
                            <div className="w-[32px] h-[32px] rounded-full bg-[#7f49d0] flex justify-center items-center group-hover:scale-105 transition-transform">
                                <FaRegHeart className="lg:text-xl text-white" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 md:mt-9">
                    <div className="text-center mb-12 md:mb-16">
                        <h1 className="font-semibold text-[47px] mb-4">
                            Endless ways to spread the joy
                        </h1>
                        <p>Design it once, share it everywhere!</p>
                    </div>
                    <div className="flex  xl:w-[1000px] mx-auto gap-y-3 xl:gap-8 flex-wrap flex-row max-xl:px-3">
                        <div className="flex text-center items-center flex-col  gap-2 xl:gap-4 xl:flex-1 max-xl:basis-1/2">
                            <div className="w-max">
                                <IoCloudDownloadOutline className="w-[32px] h-[32px]" />
                            </div>
                            <p className='font-semibold'>Download</p>
                            <p>Get a digital copy of your invitation by downloading it to your device.</p>
                        </div>
                        <div className="flex  text-center items-center flex-col gap-2 xl:gap-4 xl:flex-1 max-xl:basis-1/2">
                            <div className="w-max">
                                <IoPrintOutline className="w-[32px] h-[32px]" />
                            </div>
                            <p className='font-semibold'>Print</p>
                            <p>Get a digital copy of your invitation by downloading it to your device.</p>
                        </div>
                        <div className="flex  text-center items-center flex-col gap-2 xl:gap-4 xl:flex-1 max-xl:basis-1/2">
                            <div className="w-max">
                                <IoShareSocialOutline className="w-[32px] h-[32px]" />
                            </div>
                            <p className='font-semibold'>Share</p>
                            <p>Get a digital copy of your invitation by downloading it to your device.</p>
                        </div>
                        <div className="flex  text-center items-center flex-col gap-2 xl:gap-4 xl:flex-1 max-xl:basis-1/2">
                            <div className="w-max">
                                <MdManageSearch className="w-[32px] h-[32px]" />
                            </div>
                            <p className='font-semibold'>Manage</p>
                            <p>Get a digital copy of your invitation by downloading it to your device.</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default HomePage;