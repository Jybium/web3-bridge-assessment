import React from "react";

const TransactionItem = ({ transaction }) => {
  return (
    <li
      className={`mb-2 p-2 rounded ${
        transaction.type === "income" ? "bg-green-200" : "bg-red-200"
      }`}
    >
      <span>{transaction.amount}</span> - <span>{transaction.category}</span> (
      <span>{transaction.type}</span>)
    </li>
  );
};

export default TransactionItem;
