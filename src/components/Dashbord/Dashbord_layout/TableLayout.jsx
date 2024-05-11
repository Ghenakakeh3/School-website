import React, { useState } from "react";
import Dropdown from "../../utilities/Dropdown";
import mini_menu from "../../../assets/icons/mini-menu.svg";
import pdf from "../../../assets/icons/pdf.svg";
import { RiDeleteBin5Line } from "react-icons/ri";

import { AiOutlineEdit } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";



const Table = ({ RowlinK,columns, rows, points, handlepoint, point, className ,rowclassName,option,action,handleEdit,handleDelte}) => {
const url=location.pathname
console.log(url)

  
  return (
    <div
      className={` ${
        className ? className : ""
      }   overflow-x-auto overflow-hidden `}
    >
      <table className="table-auto w-full overflow-x-auto rounded-md  ">
        <thead className="bg-sky-900 rounded-lg w-full ">
          <tr>
            {columns.map((column, index) => (
              <th key={index} className={` ${rowclassName ? rowclassName: "" }  py-4 px-6 text-white text-sm`}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {RowlinK ? rows.map((row, rowIndex) => {
            return (
              
              <tr  key={rowIndex}  className={`relative ${
                            rowIndex % 2 === 0 ? "bg-myGray-200 border-b " : ""
                           }`}>
                          
                {Object.entries(row).map(([key, value], cellIndex) => (
                    
                    <td
                    key={cellIndex}
                    className={`text-center py-6 text-sm
                 
                    ${
                      key === "Checking"
                        ? value === "موجود"
                          ? "text-success"
                          : value === "غير موجود" || "موجود-متأخر"
                          ? "text-error font-bold text-lg"
                          : "text-gray-500"
                        : "text-gray-500"
                    }`}
                  >

                                    <Link to={`${url}/${row.ID}`}>
                                {value}
                                     </Link>
                                   </td>
                                
                                  
                                 ))}

{
              action ? <td className="flex justify-center items-center py-6">
                   <div className="flex gap-5 transition-all ">
               
                   {action.update ?  <div className="cursor-pointer text-[18px] hover:text-success " onClick={()=>{ handleEdit(row.ID)}}>
                   <AiOutlineEdit />
                 
                   </div> :""}
                   {action.delete ? <div className="cursor-pointer text-[18px] hover:text-error " onClick={()=>{ handleDelte(row.ID)}}>
                  <RiDeleteBin5Line />
                    </div>:""}

                    </div>
            </td>
            :""
             }
                                

              </tr>
            
            )

            
            


             




          
          }
        )
        
         :  rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`relative ${
                rowIndex % 2 === 0 ? "bg-myGray-200 border-b " : ""
              }`}
            >
         
           
              {Object.entries(row).map(([key, value], cellIndex) => (
                  <td
                  key={cellIndex}
                  className={`text-center py-6 text-sm
               
                  ${
                    key === "Checking"
                      ? value === "موجود"
                        ? "text-success"
                        : value === "غير موجود" || "موجود-متأخر"
                        ? "text-error font-bold text-lg"
                        : "text-gray-500"
                      : "text-gray-500"
                  }`}
                >
                  {value}
       
                </td>
              ))}
              {
                action ? <td className="flex justify-center items-center py-6">
                     <div className="flex gap-5 transition-all ">
                 
                     {action.update ?  <div className="cursor-pointer text-[18px] hover:text-success " onClick={()=>{ handleEdit(row.ID)}}>
                     <AiOutlineEdit />
                   

                     </div> :""}
                     {action.delete ? <div className="cursor-pointer text-[18px] hover:text-error " onClick={()=>{ handleDelte(row.ID)}}>
                     <RiDeleteBin5Line />
                     </div>:""}

                     </div>
              </td>
              :""
              }
{option ?    <td className="flex justify-center items-center">
                <Dropdown
                  className={"text-xl text-myGray-600 text-start p-0 "}
                  options={option ?points: ""}
                  value={point}
                  onChange={option ? handlepoint : ""}
                  icon={mini_menu}
                  showSlected={false}
                  ulClassname={" ltr:-start-28 -top-0 rtl:start-[-7rem]"}
                />
              </td>
              :"" }
          
            </tr>
          ))}



          {/*  */}
         
        </tbody>
      </table>
    </div>
  );
};

export default Table 
