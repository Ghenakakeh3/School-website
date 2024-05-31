import "./Login.css";
import loginImag_1 from "../Login/logain-image/person-using-laptop.jpg";
import loginImag_2 from "../Login/logain-image/img_2.jpg";

import emailIcon from "../../../../assets/icons/Email.svg";
import view from "../../../../assets/icons/View.svg";
import eye from "../../../../assets/icons/eyepass.svg";
import * as Yup from "yup";
import { Formik, useFormik } from "formik";
import { Link } from "react-router-dom";
import { useState } from "react";
import AuthDesign from "../AuthDesign/AuthDesign";
import Typography from "../../../utilities/Typography";
import { Input } from "../../../utilities/Inputs";
import Button from "../../../utilities/Button";
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password Should be of minimum 8 characters length")
    .required("Password is required"),
});
export default function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: false,
    onSubmit: (values) => {
      formik.handleReset();
      
      {values.email==="admin_email@gmail.com" && values.password==="12345678" ? navigate('/Admin_dashboard' ): ""}
      {values.email==="Supervisor_email@gmail.com" && values.password==="12345678" ? navigate('/Supervisor_dashboard' ): ""}

     
 
    },
  });
  const { t } = useTranslation("global");
  

  const [showpass, setshowpass] = useState(false);

  //show password
  function ShowPassword() {
    setshowpass(!showpass);
  }

  return (
    <div className="max-w-[1750px] mx-auto my-0 h-screen max-[1100px]:overflow-y-auto max-[1750px]:overflow-hidden">
      {/* <div className="relative  ltr:left-0  rtl:right-0 z-[-1]">
        <div className="absolute rotate-45 w-80 h-80 top-10 sm:top-24 bg-sky-50 rounded-3xl -start-14"></div>
        <div className="absolute rotate-45 w-80 h-80 top-96 sm:top-[29rem] bg-sky-50 rounded-3xl start-28"></div>
        <div>v</div>
      </div> */}
      <div className="max-w-[1750px] mx-auto my-0 flex justify-between flex-wrap">
        <div className="relative w-1/2 flex flex-1 flex-col gap-8 py-[12%] p-[5%] text-start">
          {/* <div className="absolute left-[31%] ">
          <svg  className ="rotate-[-90deg] w-[1000px] "xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,224L40,218.7C80,213,160,203,240,176C320,149,400,107,480,90.7C560,75,640,85,720,112C800,139,880,181,960,202.7C1040,224,1120,224,1200,202.7C1280,181,1360,139,1400,117.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
          
        
          </div> */}
          <Typography component={"h2"} className="" >{t("login.title")}</Typography>
          {/* <div className="min-w-[300px] ">
            <Typography component={"h4"}>
              {t("login.p")}
              <Link
                className="text-success text-xs md:text-base border-b-[1px] border-success hover:text-secondary hover:border-secondary"
                to={"/register"}
              >
                {t("login.create")}
              </Link>
            </Typography>
          </div> */}
          <form onSubmit={formik.handleSubmit} className="relative space-y-5 ">
            <div>
              <Input
                type="text"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                label={t("login.inputFields.email")}
                icon={emailIcon}
                errorMsg={
                  formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : null
                }
              />
            </div>
            <div>
              <Input
                type={showpass ? "text" : "password"}
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                label={t("login.inputFields.password")}
                icon={showpass ? eye : view}
                iconOnClick={ShowPassword}
                errorMsg={
                  formik.touched.password && formik.errors.password
                    ? formik.errors.password
                    : null
                }
              />

              <div className="text-end mb-[-5px]">
                <Link
                  className="text-sm texe-mySlate hover:text-secondary transition hover:animate-bounce"
                  to={"/forget-password"}
                >
                  {t("login.forget")}
                </Link>
              </div>
            </div>
            <Button type="submit" disabled={!formik.isValid} fullWidth>
              {t("login.button")}
            </Button>
          </form>
        </div>
        <AuthDesign
        img_2={loginImag_2}
          img_1={loginImag_1}
          title={t("login.TitleImg")}
          paragraph={t("login.resetPar")}
        />
      </div>
    </div>
  );
}
