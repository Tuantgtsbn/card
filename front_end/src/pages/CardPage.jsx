import CardItem from "@/components/CardItem/CardItem";
import Img1 from "/images/cards/birthday/previews/Birthday.avif";
import Img2 from "/images/cards/anniversary/previews/anniversary.avif";
import Img3 from "/images/cards/thank-you/previews/thank-you.avif";
import Img4 from "/images/cards/getwell/previews/getwell.avif";
import Img5 from "/images/cards/goodluck/previews/goodluck.avif";
import Img6 from "/images/cards/love-romance/previews/love.avif";
import Img7 from "/images/cards/newbaby/previews/newbaby.avif";
import Img8 from "/images/cards/sympathy/previews/sympathy.avif";
import Img9 from "/images/cards/valentine/previews/valentine.avif";
import Img10 from "/images/cards/wedding/previews/wedding.avif";
import styles from "./CardPage.module.scss";
import { Breadcrumb, Structure } from "@/components/Breadcrumb/Breadcrumb";
import classNames from "classnames";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
function CardPage() {
    const { pathname } = useLocation();
    const { listCard } = styles;
    const isCardPage = pathname === '/cards';
    const navigate = useNavigate();
    const handleClick = (path) => {
        navigate(path);
    }
    return (

        isCardPage ? (<>
            <h1 className="text-[56px] md:text-[80px] font-[500] text-center">
                <span className="text-thirdColor mr-2 ">Card</span>
                <span className="text-mainColor">Marker</span>
            </h1>
            <h2 className="text-[21px] text-center">Create personalized greeting cards for every special moment</h2>
            <div className={classNames(listCard, 'place-content-center')}>
                <Breadcrumb items={[Structure.home, { ...Structure.cards, active: false }]} className='col-start-1 col-end-[-1]' />
                <CardItem onClick={() => handleClick('/cards/birthday')} title="Birthday" img={Img1} className='bg-[#ffdecd]' />
                <CardItem onClick={() => handleClick('/cards/anniversary')} title="Anniversary" img={Img2} className='bg-[#caeef3]' />
                <CardItem onClick={() => handleClick('/cards/thank-you')} title="Thank you" img={Img3} className='bg-[#bbedd8]' />
                <CardItem onClick={() => handleClick('/cards/getwell')} title="Get well" img={Img4} className='bg-[#ffedbf]' />
                <CardItem onClick={() => handleClick('/cards/goodluck')} title="Good luck" img={Img5} className='bg-[#ddcbf8]' />
                <CardItem onClick={() => handleClick('/cards/love-romance')} title="Love & romance" img={Img6} className='bg-[#ffdecd]' />
                <CardItem onClick={() => handleClick('/cards/newbaby')} title="New baby" img={Img7} className='bg-[#caeef3]' />
                <CardItem onClick={() => handleClick('/cards/sympathy')} title="Sympathy" img={Img8} className='bg-[#8fbbed]' />
                <CardItem onClick={() => handleClick('/cards/valentine')} title="Valentine" img={Img9} className='bg-[#ffcdda]' />
                <CardItem onClick={() => handleClick('/cards/wedding')} title="Wedding" img={Img10} className='bg-[#eea5f6e1]' />

            </div>
            <div className="mx-4 lg:mx-auto max-w-[650px]">
                <div>
                    <h1 className="text-[21px] font-semibold mb-4">How to use our website?</h1>
                    <p>We created this website so you can design your own personalized greeting cards. It's easy to use. Just follow these steps.</p>
                    <p><span className="font-[500]">Step 1.</span> <span>Choose the type of card you want to make</span></p>
                    <p><span className="font-[500]">Step 2.</span> <span>Choose the card template you like</span></p>
                    <p><span className="font-[500]">Step 3.</span> <span>Edit the card template as you like</span></p>
                    <p><span className="font-[500]">Step 4.</span> <span>Save your card and send it to the recipient</span></p>
                </div>
                <div>
                    <h1 className="text-[21px] font-semibold mb-4">What is the advantages of our website?</h1>

                    <p><span className="font-[500]">1.</span> We have a huge collection of card templates, such as birthday card, christmas card, thank you card...You will be surprised at the extremely beautiful card designs.</p>
                    <p><span className="font-[500]">2.</span> We provide our own editor. This editor allow you to use many options:</p>
                    <li className="mb-4">Personalize: Add names, dates, and custom messages to customize your cards.</li>
                    <li className="mb-4">Add Photos: Upload personal photos, logos, or monograms to create a greeting card that is exclusively yours.</li>
                    <li className="mb-4">Choose Fonts: Along with selecting different font styles, you can also change the font colors and add special text effects like glitter and foil to create an elevated card design.</li>
                    <li className="mb-4">Select messages: If you’re searching for the right thing to say, we offer pre-written messages to make creating your eCard even easier.</li>
                    <li>Add stickers: Choose from over 15 different sticker themes, like floral, seasons, or birthday, to add even more personality to your greeting card.</li>

                </div>
            </div>
        </>) : <Outlet />

    );
}

export default CardPage;