import { useState } from "react";
import Typography from "../../../utilities/Typography";
import { useTranslation } from "react-i18next";

import { Add, Export_icon, Refresh } from "../../../utilities/Icons";

const Content = ({
  children,
  path,
  classNameChildern,

  hasRefrech,

  hasAddServices,
  addProductFun,
}) => {
  const { t } = useTranslation("global");
  const [Remostartactive, setRemostartActive] = useState(false);
  const [refrech, setrefrech] = useState(false);
  const [Export, setexport] = useState(false);
  const [AddProduct, setAddProduct] = useState(false);
  const [AddService, setAddService] = useState(false);

  const RefrechFun = () => {
    setrefrech(!refrech);
  };
  const ExportFunc = () => {
    setexport(!Export);
  };
  return (
    <div className="ltr:ps-1 rtl:pe-1 ltr:sm:px-5 rtl:sm:px-5 flex flex-col justify-between  rounded-lg px-10 pt-10  ">
      <div className="flex justify-between  flex-wrap gap-2">
      <p className="text-[16px] font-normal text-myGray-600 bg-white py-2 px-6 w-[50%] text-start  rounded-md mb-6">
          <span className="text-secondary">{t("DashPath.0")} /</span> {path}
        </p> 
      
        <div className="flex items-center gap-4 cursor-pointer mb-4  ">
    

  


          {/* {hasAddServices ? (
            <div
              className="flex gap-1 items-center "
              onClick={() => {
                setAddService(!AddService);
                addProductFun();
              }}
            >
              <Add active={AddService} />

              <span
                className={`font-normal text-[13px] leading-[20px] text-myGray-500 hover:text-primary ${
                  AddService ? "text-primary" : ""
                }`}
              >
                Add Service
              </span>
            </div>
          ) : (
            ""
          )} */}
        </div>
      </div>

      <div
        className={`${
          classNameChildern ? classNameChildern : ""
        }  h-scree     `}
      >
        {children}
      </div>
      <Typography className={"mt-3"} component={"h5"}>
        Copyright @ 2023, All Right Resaved By{" "}
        <span
          className={`text-primary hover:text-success cursor-pointer  ${
            Remostartactive ? "text-success" : ""
          }`}
          onClick={() => {
            setRemostartActive(!Remostartactive);
          }}
        >
         
        </span>{" "}
      </Typography>
    </div>
  );
};

export default Content;
