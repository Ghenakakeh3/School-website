const controller = {
  Section:"Sections",
Class: "Classes",
Student:"Students",
Teatcher:"Teatchers",
Superviser :"Supervisers",
Exam:"Exam",
Weekly_program :"WeeklyProggram",
Marks  :"Marks",
Time_record   : "WeeklyProggram",
SignIn:"Students",
Parent:"Parents",
Behaviers:"Posts",
Advert:"Posts",
Posts:"Posts",
Marial:"Materials"



  
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
  GetBySection:`${controller.Student}/GetAllStudentBySectionId`,
  GetById:`${controller.Student}/GetAllStudentById`,
  // EditStudent:`${controller.Student}/GetAllStudents`,



}
const Teatcher={
  GetAll:`${controller.Teatcher}/GetTeachers`,
  AddTeatcher:`${controller.Teatcher}/AddTecher`,
  GetTecherById:`${controller.Teatcher}/GetTeacherById`
  // EditTeatcher:`${controller.Student}/GetAllStudents`,


}

const Superviser={
  GetAll:`${controller.Superviser}/GetAllSupervisors`,
  AddSupervisor:`${controller.Superviser}/AddSuperviserer`,
  EditSuperviser:`${controller.Superviser}/EditSupervisor`,



}
const Exam={
  GetAllBySection:`${controller.Exam}/GetAllBySection`,
  GetAllByStudent:`${controller.Exam}/GetAllByStudent`,
  AddExam:`${controller.Exam}/Add`
}
const Weekly_program={
  GetBySection:`${controller.Weekly_program}/GetBySection`,
}


const Marks={
  GetAllBySection:`${controller.Marks}/GetAllMarksBySection`,
  AddMark:`${controller.Marks}/AddMark`,
}
const Time_record ={
  GetAllBySection:`${controller.Time_record}/GetDawamBySection`,
  GetAllByStudent:`${controller.Time_record}/GetStudentDawam`,
  GetTeacherTimeRecorde:`${controller.Time_record}/GetTeatcherDawam`,
  
  Add_student_dawam:`${controller.Time_record}/AddStudentDawam`,
}

const SignIn={
  superviser:`${controller.SignIn}/SignIn`
}
const Parents={
  GetAll:`${controller.Parent}/GetAllParents`,
  AddParent:`${controller.Parent}/AddParent`
}
const Behaviers={
  GetAllByStudent :`${controller.Behaviers}/GetAllBehavior`,
  AddBehavier:`${controller.Behaviers}/AddBehavioralObservation`
}
const Advert={
  AddAdvert:`${controller.Advert}/AddAdvert`,
}
const Posts={
  AddPost:`${controller.Posts}/AddPost`,
  
  GetAll:`${controller.Posts}/GetAllPosts`,
}
const Marial={
  GetAll:`${controller.Marial}/GetAll`
}




export const API_Routes = {
  Section,
  Class,
  Student,
  Teatcher,
  Superviser,
  Exam,
  Weekly_program,
  Marks,
  Time_record,
  SignIn,
  Parents,

  Behaviers,
  Advert,
  Posts,
  Marial

};
