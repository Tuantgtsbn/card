import { useEffect, useId, useRef } from "react";
function CheckBoxText({ value, name, children, ...props }) {
    const onChange = props.onChange;
    const isChecked = props.isChecked;
    // const inputRef = useRef();
    // useEffect(() => {
    //     if (isChecked) {
    //         inputRef.current.checked = true;
    //     }
    // }, []);
    return (
        <div className="relative">
            <input checked={isChecked} type="radio" value={value} name={name} onChange={(e) => onChange(name, value)} className="peer absolute top-0 left-0 right-0 bottom-0 w-full h-full opacity-0" />

            <button className="px-4 py-2 border border-solid border-gray-400 hover:bg-gray-200 rounded-full font-[500] peer-checked:border-black peer-checked:bg-[#ccc]">
                {children}
            </button>

        </div>
    );
}

export default CheckBoxText;