import SliderCommon from "@/components/Slider/SliderCommon";
import Img1 from "/images/homepage/carousel/tet.png";
import Img2 from "/images/homepage/carousel/valentine.png";
import classNames from "classnames";
function Banner({ className }) {
    const renderFunc = (item, index) => {
        return (
            <div className="relative">
                <img src={item.img} alt="" loading="lazy" />
                <button className="absolute top-2/3 left-1/2 -translate-x-1/2 p-2 xl:px-5 xl:py-4 rounded-full bg-red-600 hover:bg-red-700 xl:text-5xl text-white">Create card now</button>
            </div>
        )
    }
    return (
        <div className={classNames(className)}>
            <SliderCommon data={[{ img: Img1, subject: 'tet' }, { img: Img2, subject: 'valentine' }]} renderFunc={renderFunc} />
        </div>
    );
}

export default Banner;