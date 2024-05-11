import { useState } from "react";
import { InputSearch } from "../Inputs";

export const SearchBar = ({ setResults,selected_result,placeholder }) => {
  console.log(placeholder)
  const Registered_students = [
    {
      ID: "01",
        Full_Name: "غنى ماهر كعكة",
        Number_of_marks: "10",
        date_of_registration: "1/1/2001",
        Number_of_days_of_attendance: "30",
        Attendance_rate: "70%",


    },
    {
      ID: "02",
        Full_Name: "مريم عبد الباري",
        Number_of_marks: "10",
        date_of_registration: "12/3/2001",
        Number_of_days_of_attendance: "45",
        Attendance_rate: "90%",

  
  
      },
      {
        ID: "03",
        Full_Name: "لارا إدلبي حجي",
        Number_of_marks: "10",
        date_of_registration: "7/2/2001",
        Number_of_days_of_attendance: "42",
        Attendance_rate: "85%",

  
  
      }, 
        {
          ID: "04",
        Full_Name: "زين مكي",
        Number_of_marks: "10",
        date_of_registration: "7/2/2001",
        Number_of_days_of_attendance: "40",
        Attendance_rate: "70%",
        
  
      },  
       {
        ID: "05",
        Full_Name: "سلام الجنيدي",
        Number_of_marks: "10",
        date_of_registration: "7/2/2001",
        Number_of_days_of_attendance: "42",
        Attendance_rate: "85%",
        
  
      }, 
     

      
      
  ];
  const [input, setInput] = useState("");
  console.log(selected_result)

  const fetchData = (value) => {
    const results =Registered_students.filter((student)=>{
      console.log(student)
      console.log(value)

      return (
        student.Full_Name.startsWith(value)
       
        // student.Full_Name.includes(value)
       
      )
    })
    setResults(results);
  
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     const results = json.filter((user) => {
    //       return (
    //         value &&
    //         user &&
    //         user.name &&
    //         user.name.toLowerCase().includes(value)
    //       );
    //     });
    //     setResults(results);
    //   });
  };

  const handleChange = (value) => {
    console.log(value)
   setInput(value)
   
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
     
      {/* <input
        placeholder=""
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      /> */}
      <InputSearch
        name="Search"
        value={selected_result != "" ?  selected_result : input  }
        // value={ input }

        
        onChange={handleChange}
        errorMsg=""
        type="text"
        handleOnclick=""
        placeholder={placeholder}
      
      
       />
    </div>
  );
};
