import React from "react";

const Security = ({ guards }) => {
  return (
    <div className='security-list grid grid-row md:grid-cols-3 p-8 gap-8 '>
      {guards.map(({ id, name, price, description, skills }) => (
        <div className='security-guard p-4 border' key={id}>
          <h2 className='text-lg text-center'>{name}</h2>
          <p className='text-center px-8 py-2'>{description}</p>
          <div className='skill-list flex gap-4 justify-center'>
            {skills.map((skill, index) => (
              <div
                className='guard-skill border border-black bg-black text-white rounded py-1 px-1 text-xs'
                key={index}
              >
                <span className=''>{skill}</span>
              </div>
            ))}
          </div>
          <h3 className='py-4 text-center font-bold'>Hourly Rate £{price}</h3>
        </div>
      ))}
    </div>
  );
};

export default Security;
