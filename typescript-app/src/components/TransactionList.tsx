import React, { useContext } from "react";
// import { Transaction } from './Transaction';
import { Transaction } from "./Transaction";

import { GlobalContext } from "../context/GlobalState";

interface Transaction {
  id: number;
  text: string;
  amount: number;
}

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction: Transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
