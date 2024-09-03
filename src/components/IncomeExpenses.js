import React from 'react';
import { GiReceiveMoney, GiPayMoney } from "react-icons/gi";

const IncomeExpenses = ({ totalIncome, totalExpenses }) => {
    return (
        <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 flex items-center justify-center gap-5 bg-violet-500 text-white p-4 md:p-6 rounded-lg shadow-md">
                <div>
                    <h3 className="text-lg md:text-xl font-semibold">Income</h3>
                    <p className="text-lg md:text-2xl">₹{totalIncome.toFixed(2)}</p>
                </div>
                <div>
                    <GiReceiveMoney className='text-3xl md:text-4xl' />
                </div>
            </div>
            <div className="flex-1 flex items-center justify-center gap-5 bg-red-500 text-white p-4 md:p-6 rounded-lg shadow-md">
                <div>
                    <h3 className="text-lg md:text-xl font-semibold">Expenses</h3>
                    <p className="text-lg md:text-2xl">₹{totalExpenses.toFixed(2)}</p>
                </div>
                <div>
                    <GiPayMoney className='text-3xl md:text-4xl'/>
                </div>
            </div>
        </div>
    );
};

export default IncomeExpenses;
