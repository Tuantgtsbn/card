import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signIn } from "@/apis/authService";
import { useContext, useState } from "react";
import { ToastContext } from "@/contexts/ToastContext";
import { AppContext } from "@/contexts/AppProvider";
import Cookies from "js-cookie";
import LoadingText from "@components/Loading/LoadingText";
function SignIn({ changeForm, closeForm }) {
    const { toast } = useContext(ToastContext);
    const { handleLogin } = useContext(AppContext);
    const [isLoading, setIsLoading] = useState(false);
    const schema = Yup.object().shape({
        email: Yup.string().email("Invalid email address").required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
    })
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })
    const onSubmit = async (data) => {
        setIsLoading(true);
        if (isLoading) return;
        signIn(data).then(res => {
            closeForm();
            console.log(res);
            toast.success('Login success');
            const { accessToken, refreshToken } = res.data;
            Cookies.set('accessToken', accessToken);
            Cookies.set('refreshToken', refreshToken);
            handleLogin();
        }).catch(error => {
            console.log(error);
            toast.error(error.response.data.message);
        })
    }
    return (
        <div>
            <h1 className="text-2xl font-bold">
                Welcome back
            </h1>
            <p>Don't have any account? <span className="text-blue-600 hover:underline font-[500] cursor-pointer" onClick={changeForm}>Sign up</span></p>
            <div className="mt-6">
                <button className="flex gap-1 w-full py-[10px] hover:bg-gray-300 justify-center items-center border border-solid border-gray-400 rounded-lg">
                    <FcGoogle className="h-6 w-6" />
                    <span className="font-[500]">Sign in with Google</span>
                </button>
                <button className="flex gap-1 w-full py-[10px] hover:bg-gray-300 justify-center items-center border border-solid border-gray-400 rounded-lg mt-5">
                    <FaFacebook className="h-6 w-6 fill-blue-600" />
                    <span className="font-[500]">Sign in with Facebook</span>
                </button>
            </div>
            <div className="mt-6 flex justify-center items-center">
                <div className="flex-1 h-[1px] bg-gray-300"></div>
                <div className="px-2">or</div>
                <div className="flex-1 h-[1px] bg-gray-300"></div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-3 flex-col xl:flex-row">
                    <div className="flex flex-col w-full">
                        <label htmlFor="" className="font-[500] mb-2">Email</label>
                        <input type="email" {...register('email')} placeholder="name@gmail.com" className="p-[10px] rounded-md " />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="" className="font-[500] mb-2">Password</label>
                        <input {...register('password')} type="password" placeholder="••••••••" className="p-[10px] rounded-md " />
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    </div>
                </div>
                <div className="mt-6 flex justify-between items-center">
                    <div>
                        <input type="checkbox" className="rounded" />
                        <label htmlFor="" className="ml-3">Remember me</label>
                    </div>
                    <p className="text-blue-600 font-[500]">Forgot password?</p>
                </div>
                <div className="mt-6">
                    <button type="submit" className="bg-blue-600 py-[10px] flex gap-3 justify-center items-center w-full rounded-md text-white font-[500]">
                        <p className="">Sign in to your account</p>
                        {isLoading && <LoadingText className='' />}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SignIn;