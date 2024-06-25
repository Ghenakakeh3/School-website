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
  AddSection:`${controller.Section}/Add`
}
const Class={
  GetAll:`${controller.Class}/GetAll`
}
const Auth = {
  LOGIN: `${controller.Auth}/Login`,
  REFRESH_TOKEN: `${controller.Auth}/RefreshToken`,
};

const User = {
  Get_All_User: `${controller.User}/GetAll`,
  Get_Get_User: `${controller.User}/GetUser`,
  Put_BlockUser: `${controller.User}/BlockUser`,
  Put_UnBlockUser: `${controller.User}/UnBlockUser`,
  Delete_DeleteUser: `${controller.User}/DeleteUser`,
  Put_UpdateUser: `${controller.User}/UpdateUser`,
  Set_AddUSer: `${controller.User}/AddUser`,
  Get_UserLocation: `${controller.User}/GetAllUserLocation`,
  Get_AllUserCoupon: `${controller.User}/GetAllUserCoupon`,
  Get_AllUserPhoneAndName: `${controller.User}/GetAllUserPhoneAndName`,
};

const Driver = {
  Get_All_Driver: `${controller.Driver}/GetAllDriver`,
  Get_ById_Store: `${controller.Driver}/GetDriver`,
  Delete_DeleteDriver: `${controller.Driver}/DeleteDriver`,
  Put_UpdateDriver: `${controller.Driver}/UpdateDriver`,
  Set_AddDriver: `${controller.Driver}/AddDriver`,
};

const Store = {
  Get_All_Store: `${controller.Store}/GetAllStore`,
  Get_ById_Store: `${controller.Store}/GetStore`,
  Delete_DeleteStore: `${controller.Store}/DeleteStore`,
  Put_UpdateStore: `${controller.Store}/UpdateStore`,
  Set_AddStore: `${controller.Store}/AddStore`,
};

const Category = {
  Get_All_Categories: `${controller.Category}/GetAllCategories`,
  Set_AddCategory: `${controller.Category}/AddCategory`,
  Get_GetCategoryById: `${controller.Category}/GetCategory`,
  Put_UpdateCategory: `${controller.Category}/UpdateCategory`,
  Delete_DeleteCategory: `${controller.Category}/DeleteCategory`,
  Get_GetSubCategoriesByParent: `${controller.Category}/GetSubCategoriesByParent`,
  Get_GetSubCategoriesByParents: `${controller.Category}/GetSubCategoriesByParents`,
};

const Flavor = {
  Get_All_Flavor: `${controller.Flavor}/GetAllFlavor`,
  Get_Flavor_By_Id: `${controller.Flavor}/GetFlavor`,
  Set_AddFlavor: `${controller.Flavor}/AddFlavor`,
  Put_UpdateFlavor: `${controller.Flavor}/UpdateFlavor`,
  Delete_DeleteFlavor: `${controller.Flavor}/DeleteFlavor`,
};

const Brand = {
  Get_All_Brand: `${controller.Brand}/GetAllBrand`,
  Set_AddBrand: `${controller.Brand}/AddBrand`,
  Put_UpdateBrand: `${controller.Brand}/UpdateBrand`,
  Get_By_Id_Brand: `${controller.Brand}/GetBrand`,
  Delete_DeleteBrand: `${controller.Brand}/DeleteBrand`,
};

const Banner = {
  Get_All_Banner: `${controller.Banner}/GetAllBanner`,
  Set_AddBanner: `${controller.Banner}/AddBanner`,
  Put_UpdateBanner: `${controller.Banner}/UpdateBanner`,
  Get_By_Id_Banner: `${controller.Banner}/GetBanner`,
  Delete_DeleteBanner: `${controller.Banner}/DeleteBanner`,
};

const Product = {
  Get_All_Product: `${controller.Product}/GetAllProducts`,
  Set_AddProduct: `${controller.Product}/AddProduct`,
  Set_AddProductByExcel: `${controller.Product}/AddProductByExcel`,
  Get_GetProductDetail: `${controller.Product}/GetProductDetail`,
  Put_UpdateProduct: `${controller.Product}/UpdateProduct`,
  Put_ActiveProductStatus: `${controller.Product}/ActiveProductStatus`,
  Put_UnActiveProductStatus: `${controller.Product}/UnActiveProductStatus`,
  Delete_DeleteProduct: `${controller.Product}/DeleteProduct`,
  Get_All_Name: `${controller.Product}/GetAllName`,
};
const ControllData = {
  Get_All_ControllData: `${controller.ControllData}/GetAllControllData`,
  Get_All_ProductsName: `${controller.ControllData}/GetAllProductsName`,
  Get_All_CategoriesName: `${controller.ControllData}/GetAllCategoriesName`,
  Get_All_ProductsNameOffer: `${controller.ControllData}/GetAllProductNameOffer`,
  Get_All_Brand: `${controller.ControllData}/GetAllBrand`,
  Set_AddOffer: `${controller.ControllData}/AddOffer`,
  Set_AddMostOrder: `${controller.ControllData}/AddMostOrder`,
  Set_AddSpecialCategory: `${controller.ControllData}/AddSpecialCategory`,
  Set_AddBrandInHome: `${controller.ControllData}/AddBrandInHome`,
  Set_AddCategoryInHome: `${controller.ControllData}/AddCategoryInHome`,
  Get_GetSetting: `${controller.ControllData}/GetSetting`,
  Set_EditSetting: `${controller.ControllData}/EditSetting`,
};

const Notification = {
  Set_AddNotification: `${controller.Notification}/Add`,
  Get_GetAllNotificationAdmin: `${controller.Notification}/GetAllNotificationAdmin`,
  Delete_DeleteNotification: `${controller.Notification}/Delete`,
};

const Coupon = {
  Set_AddCoupon: `${controller.Coupon}/AddCoupon`,
  Set_UpdateCoupon: `${controller.Coupon}/UpdateCoupon`,
  Get_GetAllCoupon: `${controller.Coupon}/GetAllCoupon`,
  Get_GetCouponById: `${controller.Coupon}/GetCouponById`,
  Delete_DeleteCoupon: `${controller.Coupon}/DeleteCoupon`,
};

const Group = {
  Set_AddGroup: `${controller.Group}/AddGroup`,
  Set_UpdateGroup: `${controller.Group}/UpdateGroup`,
  Get_GetAllGroup: `${controller.Group}/GetAllGroup`,
  Get_GetGroup: `${controller.Group}/GetGroup`,
  Delete_DeleteGroup: `${controller.Group}/DeleteGroup`,
};
const Order = {
  Get_GetAllOrder: `${controller.Order}/GetAllOrder`,
  Get_GetOrderDetail: `${controller.Order}/GetOrderDetail`,
  Put_ChangeStatus: `${controller.Order}/ChangeStatus`,
};
const Role = {
  Get_AllRoles: `${controller.Role}/GetAllRoles`,
  Set_AddRole: `${controller.Role}/AddRole`,
  Put_UpdateRole: `${controller.Role}/UpdateRole`,
  Delete_DeleteRole: `${controller.Role}/DeleteRole`,
  Get_RoleDetail: `${controller.Role}/GetRoleDetail`,
  Get_AllPermission: `${controller.Role}/GetAllPermission`,
};

const Admin = {
  Get_AllAdmin: `${controller.Admin}/GetAllAdmin`,
  Set_AddAdmin: `${controller.Admin}/AddAdmin`,
  Put_UpdateAdmin: `${controller.Admin}/UpdateAdmin`,
  Delete_DeleteAdmin: `${controller.Admin}/DeleteAdmin`,
  Get_GetAdminByID: `${controller.Admin}/GetAdmin`,
}
export const API_Routes = {
  Section,
  Class,
  Auth,
  User,
  Store,
  Driver,
  Category,
  Flavor,
  Brand,
  Product,
  Banner,
  ControllData,
  Notification,
  Coupon,
  Group,
  Order,
  Role,
  Admin,
};
