import React from 'react';
import { GiWallet } from "react-icons/gi";

const Balance = ({ balance }) => {
  return (
    <div className="bg-orange-500 flex flex-col md:flex-row items-center justify-between md:justify-center gap-4 md:gap-10 text-black p-6 rounded-lg shadow-md mb-4">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold">Total Balance</h2>
        <p className="text-xl md:text-2xl text-center">₹{balance.toFixed(2)}</p>
      </div>

      <div>
        <GiWallet className='text-4xl md:text-5xl' />
      </div>
    </div>
  );
};

export default Balance;
