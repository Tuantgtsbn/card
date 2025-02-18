import { useEffect, useId, useRef } from "react";
import styles from "./CheckBoxColor.module.scss";
import classNames from "classnames";
function CheckBoxColor({ name, value, bg, ...props }) {
    const { checkbox } = styles;
    const onChange = props.onChange;
    const isChecked = props.isChecked;
    const id = useId();
    const inputRef = useRef();
    // useEffect(() => {
    //     if (isChecked) {
    //         inputRef.current.checked = true;
    //     }
    // }, []);
    return (
        <div className="relative w-[calc(20%-8px)]">
            <input checked={isChecked} type="radio" name={name} id={id} value={value} onChange={(e) => onChange(name, e.target.value)} className="w-0 h-0 border-none focus-visible:outline-none opacity-0" />
            <label style={{ backgroundColor: `${bg}` }} htmlFor={id} className={classNames(checkbox, 'block rounded-full')}>
            </label>
        </div>
    );
}

export default CheckBoxColor;