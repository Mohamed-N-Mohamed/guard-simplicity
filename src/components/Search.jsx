import React from "react";

const Search = ({ searchTerm, setSearch }) => {
  //find guard by search
  const handleOnchange = (e) => {
    //get value
    const { value } = e.target;
    //set value
    setSearch(value.toLowerCase());
  };
  return (
    <div className='search-guard'>
      <input
        type='text'
        placeholder='Search Guard'
        className='py-2 px-4 border outline-none text-xs w-96'
        onChange={handleOnchange}
        value={searchTerm}
      />
    </div>
  );
};

export default Search;
