

export const SearchResult = ({ result,setselected_result }) => {
  return (
    <div
      className="hover:bg-[#efefef] px-5 py-2"
      onClick={(e) => {setselected_result(result)}}
    >
      {result}
    </div>
  );
};
