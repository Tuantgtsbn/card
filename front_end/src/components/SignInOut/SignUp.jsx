import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

function SignUp({ changeForm }) {
    return (
        <div>
            <h1 className="text-2xl font-bold">
                Welcome to Happy Card
            </h1>
            <p>Already have any account? <span className="text-blue-600 hover:underline font-[500] cursor-pointer" onClick={changeForm}>Sign in</span></p>
            <div>
                <form>
                    <div className="flex gap-3 flex-col xl:flex-row">
                        <div className="flex flex-col w-full">
                            <label htmlFor="" className="font-[500] mb-2">Email</label>
                            <input type="email" placeholder="name@gmail.com" className="p-[10px] rounded-md " />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="" className="font-[500] mb-2">Full Name</label>
                            <input type="text" placeholder="Nguyen Van A" className="p-[10px] rounded-md " />
                        </div>
                    </div>
                    <div className="flex gap-3 mt-6 flex-col xl:flex-row">
                        <div className="flex flex-col w-full">
                            <label htmlFor="" className="font-[500] mb-2">Password</label>
                            <input type="password" className="p-[10px] rounded-md " />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="" className="font-[500] mb-2">Confirm Password</label>
                            <input type="password" className="p-[10px] rounded-md " />
                        </div>
                    </div>
                    <div className="mt-6">
                        <button className="bg-blue-600 py-[10px] text-center w-full rounded-md text-white font-[500]">
                            Sign up
                        </button>
                    </div>
                </form>
                <div className="mt-6 flex justify-center items-center">
                    <div className="flex-1 h-[1px] bg-gray-300"></div>
                    <div className="px-2">or</div>
                    <div className="flex-1 h-[1px] bg-gray-300"></div>
                </div>
                <div className="mt-6">
                    <button className="flex gap-1 w-full py-[10px] hover:bg-gray-300 justify-center items-center border border-solid border-gray-400 rounded-lg">
                        <FcGoogle className="h-6 w-6" />
                        <span className="font-[500]">Sign up Google</span>
                    </button>
                    <button className="flex gap-1 w-full py-[10px] hover:bg-gray-300 justify-center items-center border border-solid border-gray-400 rounded-lg mt-5">
                        <FaFacebook className="h-6 w-6 fill-blue-600" />
                        <span className="font-[500]">Sign up Facebook</span>
                    </button>
                </div>



            </div>
        </div>
    );
}

export default SignUp;