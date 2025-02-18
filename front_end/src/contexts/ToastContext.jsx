import { createContext } from "react";
import { ToastContainer, toast } from "react-toastify";
const ToastContext = createContext();
const ToastProvider = ({ children }) => {
    const value = {
        toast
    }
    return (
        <ToastContext.Provider value={value}>
            {children}
            <ToastContainer />
        </ToastContext.Provider>
    )
}
export { ToastProvider, ToastContext };