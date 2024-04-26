import * as Yup from "yup";
export const add_acount_schema = Yup.object().shape({
  "": Yup.string().min(3,"name shoud be longest").max(12,"name shoud be shortest").required("name is Required"),
  "":Yup.string().min(3,"user name shoud be longest").max(12,"user name shoud be shortest").required("user name is Required"),
     
  "Password": Yup.string().min(8, "Change your Password, If your Forget password Click Here") .required("Password is required"),



 } );

//  ***********
export const service_provider_schema = Yup.object().shape({
  "inputs[1]": Yup.string().email("Invalid Email").required("Email is required"),
  "inputs[2]":Yup.string()
      .min(8, "Password Should be of minimum 8 characters length")
      .required("Password is required"),
  "inputs[3]": Yup.number().min(8,"Phone number shoud be longest").max(12,"hone number shoud be shortest")
 } );


 export const Change_password_schema = Yup.object().shape({

  "NewPassword":Yup.string()
      .min(8, "Change your Password, If your Forget password Click Here")
      .required("Password is required"),

 } );





  export const Edit_Services_schema = Yup.object().shape({


    "inputs[1]": Yup.string().required("Required"),
    "inputs[2]":Yup.string(),
       
    "inputs[3]": Yup.string(),
    "inputs[4]": Yup.string()
    .required("Price is required")
    .test("is-number", "Invalid price. Please enter only numbers.", (value) => {
      return /^\d+$/.test(value);
    }),
    "inputs[5]": Yup.string()
    .required("Discount is required")
    .test(
      "is-discount",
      "Invalid discount. Please enter a valid number or percentage.",
      (value) => {
        return /^\d+(\%)?$/.test(value);
      }
    ),

    "inputs[6]": Yup.mixed().test(
        "isImage",
        "الرجاء اختيار ملف صورة صالح (JPG، PNG، GIF)",
        function (value) {
          if (!value) {
            return true; // لا مشكلة إذا لم يكن هناك ملف
          }
    
          const supportedFormats = ["image/jpeg", "image/png", "image/gif"];
    
          if (!supportedFormats.includes(value.type)) {
            throw new Yup.ValidationError("Invalid image", value, "img");
          }
          return true;
        }
      ),


   } );





   
