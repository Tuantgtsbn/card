import { createContext, useCallback, useEffect, useState } from "react";
import { ToastProvider } from "./ToastContext";
import { CardProvider } from "./CardProvider";
import { getUserInfor } from "@/apis/authService";
import Cookies from "js-cookie";
export const AppContext = createContext();
export const AppProvider = ({ children }) => {
    const [userInfor, setUserInfor] = useState(null);
    const [isLogin, setIsLogin] = useState(false);
    const handleLogOut = useCallback(() => {
        Cookies.remove('accessToken');
        Cookies.remove('refreshToken');
        setUserInfor(null);
        setIsLogin(false);
        window.location.reload();
    }, []);
    const handleLogin = useCallback(() => {

        getUserInfor().then((res) => {
            console.log(res);
            setUserInfor(res.data.data)
            setIsLogin(true);
        }).catch((err) => {
            console.log(err);
        });

    }, []);
    useEffect(() => {
        handleLogin();
    }, [handleLogin]);
    const value = { isLogin, setIsLogin, userInfor, setUserInfor, handleLogOut, handleLogin };
    return (
        <AppContext.Provider value={value}>
            <ToastProvider>
                <CardProvider>
                    {children}
                </CardProvider>
            </ToastProvider>
        </AppContext.Provider>
    )
}
