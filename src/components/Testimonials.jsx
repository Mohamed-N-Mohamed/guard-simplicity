import React from "react";
import { BiSolidQuoteSingleRight } from "react-icons/bi";

const Testimonials = () => {
  return (
    <div className='text-center'>
      <div className='flex justify-center items-center'>
        <BiSolidQuoteSingleRight size={32} />
        <BiSolidQuoteSingleRight size={32} />
      </div>
      <h3 className='text-xl pt-4 pb-4'>Testimonials</h3>
      <p className='px-12 text-sm leading-relaxed'>
        I just wanted to take a few minutes to recognise the work and dedication
        you and your team have provided in this challenging time. I know this is
        an ever-changing environment with new ways of working day by day and
        Boots is as ever a demanding customer. It was good to hear that Guard
        Simplicity as a partner was mentioned with the outstanding work you have
        provided and continue to provide. I know some locations and requests
        have been complex, however, your team and your security guards have
        delivered to an excellent standard. It’s also good to see the feedback
        coming from customers who have had a great experience too.
      </p>
      <h4 className='font-bold py-2'>Central Operations Contract Manager</h4>
      <h5 className='font-bold'>Boots</h5>
    </div>
  );
};

export default Testimonials;
