
import { SearchResult } from "./SearchResult";
import ClickOutside from "../Click_Outsite";
import { useState } from "react";

export const SearchResultsList = ({ results,setselected_result }) => {
  const [SearchResultsList_ ,Set_SearchResultsList]=useState(true)
  return (
<ClickOutside onClick={()=>{Set_SearchResultsList(!SearchResult)}}>
  {SearchResultsList_  && ( <div className=" absolute  z-50 w-[15rem] bg-white flex flex-col shadow-lg rounded-md mt-[1rem] max-h-[300px] overflow-y-scroll">
      {results.map((result, id) => {
        return <SearchResult result={result.Full_Name} key={id} setselected_result={setselected_result} />;
      })}
    </div>
    )}

 

</ClickOutside>
 )
};
