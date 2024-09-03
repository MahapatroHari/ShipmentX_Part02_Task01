import React, { useState } from 'react';

const AddTransaction = ({ addTransaction }) => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Food');
  const [type, setType] = useState('Income'); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount || !description) {
      alert('Please enter amount and description');
      return;
    }

    addTransaction({
      amount: type === 'Income' ? parseFloat(amount) : -parseFloat(amount), 
      description,
      category,
    });

    setAmount('');
    setDescription('');
    setCategory('Food');
    setType('Income');
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-4 border-2 border-gray-400">
      <h3 className="text-lg md:text-xl font-bold text-center mb-4">Add Income/Expense</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option>Food</option>
            <option>Rent</option>
            <option>Entertainment</option>
            <option>Utilities</option>
            <option>Salary</option>
            <option>Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option>Income</option>
            <option>Expense</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
