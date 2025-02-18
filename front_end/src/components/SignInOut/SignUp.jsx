import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUp } from "@/apis/authService";
import { useContext, useState } from "react";
import { ToastContext } from "@/contexts/ToastContext";
import LoadingText from "@components/Loading/LoadingText";
function SignUp({ changeForm }) {
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useContext(ToastContext);
    const schema = Yup.object().shape({
        email: Yup.string().email("Invalid email address").required('Email is required'),
        fullName: Yup.string().min(6, 'Name must be at least 6 characters').required('Full name is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        cfmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm password is required')
    })
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    })
    const onSubmit = async (data) => {
        setIsLoading(true);
        if (isLoading) return;
        signUp({
            email: data.email,
            password: data.password,
            fullName: data.fullName
        }).then(res => {
            toast.success(res.data.message);

            setIsLoading(false);
        }).catch(error => {
            toast.error(error.response.data.message);
        });
    }
    return (
        <div>
            <h1 className="text-2xl font-bold">
                Welcome to Happy Card
            </h1>
            <p>Already have any account? <span className="text-blue-600 hover:underline font-[500] cursor-pointer" onClick={changeForm}>Sign in</span></p>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-3 flex-col xl:flex-row">
                        <div className="flex flex-col w-full">
                            <label htmlFor="" className="font-[500] mb-2">Email</label>
                            <input type="email" {...register('email')} placeholder="name@gmail.com" className="p-[10px] rounded-md " />
                            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="" className="font-[500] mb-2">Full Name</label>
                            <input type="text" {...register('fullName')} placeholder="Nguyen Van A" className="p-[10px] rounded-md " />
                            {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
                        </div>
                    </div>
                    <div className="flex gap-3 mt-6 flex-col xl:flex-row">
                        <div className="flex flex-col w-full">
                            <label htmlFor="" className="font-[500] mb-2">Password</label>
                            <input type="password" {...register('password')} className="p-[10px] rounded-md " />
                            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="" className="font-[500] mb-2">Confirm Password</label>
                            <input type="password" {...register('cfmPassword')} className="p-[10px] rounded-md " />
                            {errors.cfmPassword && <p className="text-red-500">{errors.cfmPassword.message}</p>}
                        </div>
                    </div>
                    <div className="mt-6">
                        <button type="submit" className="bg-blue-600 flex justify-center items-center gap-3 py-[10px] w-full rounded-md text-white font-[500]">
                            <p>Sign up</p>
                            {isLoading && <LoadingText />}
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