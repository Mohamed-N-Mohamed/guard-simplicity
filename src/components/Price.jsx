import React from "react";

const Price = ({ setSelectedPrice, price }) => {
  const handleChangePrice = (e) => {
    const { value } = e.target;
    console.log(value);
    setSelectedPrice(value);
  };
  return (
    <div className='location py-8 flex flex-col gap-4'>
      <h3 className='text-lg font-bold'>Price:</h3>
      <label className='flex items-center space-x-2'>
        <input
          type='radio'
          value='High'
          className='form-radio text-blue-600'
          checked={price === "High"}
          onChange={handleChangePrice}
        />

        <span>High</span>
      </label>
      <label className='flex items-center space-x-2'>
        <input
          type='radio'
          value='Low'
          className='form-radio text-blue-600'
          checked={price === "Low"}
          onChange={handleChangePrice}
        />
        <span>Low</span>
      </label>
    </div>
  );
};

export default Price;
