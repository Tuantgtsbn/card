import { useId } from "react";
import styles from "./CheckBoxColor.module.scss";
import classNames from "classnames";
function CheckBoxColor({ name, value, bg, ...props }) {
    const { checkbox } = styles;
    const onChange = (e) => {
        console.log(e.target.value);
    }
    const id = useId();
    return (
        <div className="relative w-[calc(20%-8px)]">
            <input type="radio" name={value} id={id} value={value} onChange={onChange} className="w-0 h-0 border-none focus-visible:outline-none opacity-0" />
            <label style={{ backgroundColor: `${bg}` }} htmlFor={id} className={classNames(checkbox, 'block rounded-full')}>
            </label>
        </div>
    );
}

export default CheckBoxColor;