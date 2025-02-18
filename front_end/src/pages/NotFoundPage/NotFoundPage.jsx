import Button from "@/components/Button/Button";
import { useNavigate } from "react-router-dom";
function NotFoundPage() {
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/');
    }
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 py-8 lg:py-16">
            <img src="/images/404page/404.png" alt="" className="max-w-[min(80%,500px)]" />
            <div className="text-center lg:text-left font-[500] text-lg lg:text-xl">
                <p>So sorry!</p>
                <p>The page you are looking for cannot be found</p>
                <p className="mb-4">Please check the URL and try again</p>
                <Button onClick={navigateToHome} varriant="secondary" className='bg-thirdColor hover:bg-[#18B071] focus:bg-[#169D64]'>
                    Back to Home
                </Button>
            </div>
        </div>
    );
}

export default NotFoundPage;