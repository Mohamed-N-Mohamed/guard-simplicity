import React from "react";

const Location = ({ changeLocation, location }) => {
  return (
    <div className='location py-8 flex flex-col gap-4'>
      <h3 className='text-lg font-bold'>Choose a Location:</h3>
      <label className='flex items-center space-x-2'>
        <input
          type='radio'
          value='All'
          className='form-radio text-blue-600'
          checked={location === "All"}
          onChange={changeLocation}
        />
        <span>All</span>
      </label>
      <label className='flex items-center space-x-2'>
        <input
          type='radio'
          value='London'
          className='form-radio text-blue-600'
          checked={location === "London"}
          onChange={changeLocation}
        />
        <span>London</span>
      </label>

      <label className='flex items-center space-x-2'>
        <input
          type='radio'
          value='Manchester'
          className='form-radio text-blue-600'
          checked={location === "Manchester"}
          onChange={changeLocation}
        />
        <span>Manchester</span>
      </label>

      <label className='flex items-center space-x-2'>
        <input
          type='radio'
          value='Leeds'
          className='form-radio text-blue-600'
          checked={location === "Leeds"}
          onChange={changeLocation}
        />
        <span>Leeds</span>
      </label>

      <label className='flex items-center space-x-2'>
        <input
          type='radio'
          value='Birmingham'
          className='form-radio text-blue-600'
          checked={location === "Birmingham"}
          onChange={changeLocation}
        />
        <span>Birmingham</span>
      </label>

      <label className='flex items-center space-x-2'>
        <input
          type='radio'
          value='Glasgow'
          className='form-radio text-blue-600'
          checked={location === "Glasgow"}
          onChange={changeLocation}
        />
        <span>Glasgow</span>
      </label>
    </div>
  );
};

export default Location;
