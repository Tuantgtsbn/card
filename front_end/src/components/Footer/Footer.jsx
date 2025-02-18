import Logo from '/images/homepage/Logo.png';
function Footer() {
    return (
        <div className='flex flex-col justify-center mt-[64px] bg-gray-200'>
            <img src={Logo} alt="" className='h-[57px] object-contain' loading='lazy' />
            <div className='text-center'>
                <p>©Happy card 2025. All rights reserved.</p>
                <div>
                    <a href="" className='mr-2'>Privacy policy</a>
                    <a href="">Terms of use</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;