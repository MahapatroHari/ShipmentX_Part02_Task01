import React, { useState } from 'react';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import AddTransaction from './components/AddTransaction';
import TransactionList from './components/TransactionList';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const totalIncome = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + parseFloat(t.amount), 0);

  const totalExpenses = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + Math.abs(parseFloat(t.amount)), 0);

  const balance = totalIncome - totalExpenses;

  return (
    <div className="min-h-screen bg-white flex flex-col p-4 space-y-4">
      <div className="w-full mx-auto space-y-4">
        <Balance balance={balance} />
        <IncomeExpenses totalIncome={totalIncome} totalExpenses={totalExpenses} />
        <AddTransaction addTransaction={addTransaction} />
        <TransactionList transactions={transactions} />
      </div>
    </div>
  );
};

export default App;
