import classNames from "classnames";
import styles from "./CardItem.module.scss";
function CardItem({ title, img, className, ...props }) {
    const { cardItem } = styles;
    return (
        <div {...props} className={classNames("rounded-xl px-3 py-4 text-center hover:bg-thirdColor", className)}>
            <div className={classNames("w-[126px] h-[184px] mx-auto relative z-[2]", cardItem)}>
                <img src={img} alt="" loading="lazy" className="rounded-[4px] border border-solid border-yellow-300 h-full" />
            </div>
            <p className="font-semibold mt-4" style={{ letterSpacing: '.7px' }}>{title}</p>
        </div>
    );
}

export default CardItem;