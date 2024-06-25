import React, { useState, useEffect } from 'react';
import DataContext from './ApiContext';
import axios from 'axios';

const DataProvider = ({ children }) => {
    const [Sections,SetSections]=useState([])

  const [Supervisers, setSupervisers] = useState([]);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(()=>{


    const fetchAllSections = async () => {
        axios.get('http://www.marahschool.somee.com/api/Sections/GetAll')
      .then(function (response) {
        // handle success
      
        // setLoading(false)
        SetSections(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  
    }
      
      
   const fetchAllSupervisers= async () => {
    axios.get('http://www.marahschool.somee.com/api/Supervisers/GetAllSupervisors')
  .then(function (response) {
  
    setSupervisers(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

}
 

    // const fetchModerators = async () => {
    //   try {
    //     const response = await fetch('https://api.example.com/moderators');
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     const result = await response.json();
    //     setModerators(result);
    //   } catch (error) {
    //     setError(error);
    //   }
    // };

    const fetchData = async () => {
      setLoading(true);
      await Promise.all([fetchAllSections(),fetchAllSupervisers()]);
      setLoading(false);
    };

    fetchData();
  }, []);
//   console.log(Sections)

  return (
    <DataContext.Provider value={{ Sections ,students, Supervisers, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider };
