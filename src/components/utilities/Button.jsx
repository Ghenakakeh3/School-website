import { motion } from "framer-motion"

export default function Button({
    type,
    children,
    disabled,
    fullWidth,
    onClick,
    className,
    button_animation
}) {
    return (   
        <motion.button
        variants={button_animation}
        initial="initial"
        animate="animate"
        whileHover={{ scale: 1.1 ,boxShadow:'0px 0px 8px rgb(255,255,255)'  }}
        whileTap={{ scale: 0.9 }}
            disabled={disabled}
            type={type}
            onClick={onClick}
            className={`px-3 py-1 ${fullWidth === true ? "w-full" : ""
                } ${className ? className : ""} text-white rounded-[10px] bg-orange transform rotate-15 hover:opacity-90  opacity-100 disabled:opacity-80 disabled:pointer-events-none`}
        >
            {children}
        </motion.button>
    );
}
import PropTypes from "prop-types";
Button.propTypes = {
    children: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["button", "submit"]),
    fullWidth: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};
