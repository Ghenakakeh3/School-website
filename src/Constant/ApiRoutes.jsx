const controller = {
  Section:"Sections",
Class: "Classes",
Student:"Students",
Teatcher:"Teatchers",
Superviser :"Supervisers"



  
};
const Section={
  GetAll:`${controller.Section}/GetAll`,
  ByClass:`${controller.Section}/GetAllSectionsWithClass`,
  AddSection:`${controller.Section}/Add`,
  EditSection:`${controller.Section}/Update`
}
const Class={
  GetAll:`${controller.Class}/GetAll`
}
const Student={
  GetAll:`${controller.Student}/GetAllStudents`,
  AddStudent:`${controller.Student}/AddStudent`,
  // EditStudent:`${controller.Student}/GetAllStudents`,



}
const Teatcher={
  GetAll:`${controller.Teatcher}/GetTeachers`,
  AddTeatcher:`${controller.Student}/AddTecher`,
  GetTecherById:`${controller.Teatcher}/GetTeacherById`
  // EditTeatcher:`${controller.Student}/GetAllStudents`,


}

const Superviser={
  GetAll:`${controller.Superviser}/GetAllSupervisors`,
  AddSupervisor:`${controller.Superviser}/AddSuperviserer`,



}










export const API_Routes = {
  Section,
  Class,
  Student,
  Teatcher,
  Superviser

};
