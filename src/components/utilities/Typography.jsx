import {motion} from "framer-motion"



export default function Typography({ component, children, className,Typography_animation }) {
  console.log(Typography_animation)
  return (
    <>
      {component === "success-text" ? (
        <span
          className={`${
            className ? className : ""
          } text-xs md:text-base text-success border-b-[1px] border-success hover:text-secondary hover:border-secondary`}
        >
          {children}
        </span>
      ) : (
        <motion.div
        variants={Typography_animation}
        initial="initial"
        animate="animate"
        // initial={{y : -500}}
        // animate ={{y:0 }}
        // transition={{delay : 1 ,duration : 5 ,type :'spring' ,stiffness: 120}}
          className={`${className ? className : ""} ${
            component === "h1"
              ? "font-extrabold ltr:font-Gochi rtl:font-Aref_Ruqaa  text-[75px] text-white  "
              : component === "h3"
              ? "font-bold text-xl text-myGray-500 leading-[25.14px] font-junge"
              : component === "h4"
              ? "font-normal text-[18px] text-myGray-500 leading-[25.14px] font-junge "
              : component === "h5"
              ? "font-normal text-xs text-myGray-500"
              : component === "gradient-text"
              ? "font-bold text-xl bg-gradient-to-b from-primary from-15% to-secondary to-85% transform rotate-15 bg-clip-text text-transparent"
              : component === "secondary-text"
              ? "text-base font-normal w-full text-center text-secondary hover:text-success cursor-pointer "
              : "font-normal text-base text-myGray-600" // p
          }`}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}
import PropTypes from "prop-types";
Typography.propTypes = {
  children: PropTypes.any.isRequired,
  component: PropTypes.oneOf([
    "h1",
    "h4",
    "h5",
    "h3",
    "p",
    "gradient-text",
    "success-text",
    "secondary-text",
  ]),
  className: PropTypes.string,
};
