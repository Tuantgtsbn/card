import { useEffect } from "react";
function SecondaryLayout({ title, children }) {
    useEffect(() => {
        document.title = title;
    }, [title]);
    return (
        <div className="">{children}</div>
    );
}

export default SecondaryLayout;