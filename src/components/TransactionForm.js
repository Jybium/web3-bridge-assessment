import React, { useState } from "react";

const TransactionForm = ({ addTransaction }) => {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({ amount, type, category });
    setAmount("");
    setType("income");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <label className="block text-gray-700">Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border rounded w-full py-2 px-3 text-gray-700"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block text-gray-700">Type:</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border rounded w-full py-2 px-3 text-gray-700"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <div className="mb-2">
        <label className="block text-gray-700">Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded w-full py-2 px-3 text-gray-700"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
