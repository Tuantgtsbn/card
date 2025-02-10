import { useId } from "react";
function CheckBoxText({ value, name, children, ...props }) {
    const id = useId();
    const hanleClick = (e) => {
        console.log(e.target.value);
    }
    return (
        <div className="relative">
            <input type="radio" value={value} name={name} id={id} onChange={hanleClick} className="w-0 h-0 focus-visible:outline-none opacity-0" />
            <label htmlFor={id} className="">
                <button className="px-4 py-2 border border-solid border-gray-400 hover:bg-gray-200 rounded-full font-[500]">
                    {children}
                </button>
            </label>
        </div>
    );
}

export default CheckBoxText;