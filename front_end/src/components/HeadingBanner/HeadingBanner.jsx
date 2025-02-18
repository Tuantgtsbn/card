import classNames from "classnames";
import { LuDot } from "react-icons/lu";
import styles from "./HeadingBanner.module.scss";
function HeadingBanner({ title, description, config, className }) {
    return (

        <div className={classNames('mb-8 rounded-3xl font-[500] lg:bgTheme max-lg:!bg-none', className)} style={{ backgroundImage: `url(${config[1]})`, backgroundColor: `${config[0]}` }}>
            <div className="pl-6">
                <h2 className="text-[32px] pt-6 pb-2">{title}</h2>
                <h3 className="text-[14px] pb-2 lg:pb-10">{description}</h3>
                <div className="flex justify-between">
                    <ul className="text-[12px] lg:flex lg:gap-3 lg:pb-6">
                        <li className="flex"><LuDot />Download PDF</li>
                        <li className="flex"><LuDot />Print at home</li>
                        <li className="flex"><LuDot />Share online</li>
                    </ul>
                    <div className="lg:hidden">
                        <img src={config[2]} loading="lazy" alt="" />
                    </div>
                </div>
            </div>

        </div>


    );
}

export default HeadingBanner;