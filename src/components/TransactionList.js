import React, { useState } from 'react';
import { GiReceiveMoney, GiPayMoney } from 'react-icons/gi';

const TransactionList = ({ transactions }) => {
  const [filter, setFilter] = useState('All');

  const filteredTransactions = transactions.filter((t) =>
    filter === 'All' ? true : t.category === filter
  );

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border-2 border-gray-400">
      <h3 className="text-lg md:text-xl font-bold text-center mb-4">Transactions</h3>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Filter by Category</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option>All</option>
          <option>Food</option>
          <option>Rent</option>
          <option>Entertainment</option>
          <option>Salary</option>
          <option>Utilities</option>
          <option>Other</option>
        </select>
      </div>
      <table className="w-full bg-gray-100 rounded-lg border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 md:p-4 text-left">Category</th>
            <th className="p-2 md:p-4 text-left">Description</th>
            <th className="p-2 md:p-4 text-left">Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((t, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="p-2 md:p-4 flex items-center gap-2">
                {t.amount > 0 ? (
                  <GiReceiveMoney className="text-green-500 text-2xl md:text-3xl" />
                ) : (
                  <GiPayMoney className="text-red-500 text-2xl md:text-3xl" />
                )}
                {t.category}
              </td>
              <td className="p-2 md:p-4">{t.description}</td>
              <td className={`p-2 md:p-4 ₹{t.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>
                ₹{Math.abs(t.amount).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
