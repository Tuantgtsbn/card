import classNames from "classnames";
import PropTypes from "prop-types";
function Button({ varriant = 'primary', children, className, size = 'md', ...props }) {
    const baseStyles = 'py-2 px-4 font-semibold text-white bg-black';
    const varriantStyles = {
        'primary': 'rounded',
        'secondary': 'rounded-full'
    }
    const sizeStyles = {
        'md': 'text-base',
        'lg': 'text-lg py-3 px-5'
    }
    return (
        <button className={classNames(baseStyles, varriantStyles[varriant], sizeStyles[size], className)} {...props}>
            {
                children
            }
        </button>
    );
}
Button.propTypes = {
    varriant: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    size: PropTypes.string

}
export default Button;