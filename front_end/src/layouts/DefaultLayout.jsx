import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { useEffect } from "react";
function DefaultLayout({ title, children }) {
    useEffect(() => {
        if (title) {
            document.title = title;
        }
    }, [title]);
    return (
        <div className="relative">
            <Header />
            <div className="min-h-screen mt-[57px]">{children}</div>
            <Footer />
        </div>

    );
}

export default DefaultLayout;