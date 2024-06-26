const controller = {
  Section:"Sections",
Class: "Classes",

  Admin:"Admin",
  Auth: "Auth",
  User: "User",
  Driver: "Driver",
  Store: "Store",
  Category: "Category",
  Flavor: "Flavor",
  Brand: "Brand",
  Product: "Product",
  Banner: "Banner",
  ControllData: "ControllData",
  Notification: "Notification",
  Coupon: "Coupon",
  Group: "Group",
  Order: "Order",
  Role: "Role",
  
};
const Section={
  GetAll:`${controller.Section}/GetAll`,
  ByClass:`${controller.Section}/GetAllSectionsWithClass`,
  AddSection:`${controller.Section}/Add`
}
const Class={
  GetAll:`${controller.Class}/GetAll`
}









export const API_Routes = {
  Section,
  Class,

};
