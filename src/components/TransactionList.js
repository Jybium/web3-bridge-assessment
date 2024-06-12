import React from "react";
import TransactionItem from "./TransactionItem";

const TransactionList = ({ transactions }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Transactions</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <TransactionItem key={index} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
