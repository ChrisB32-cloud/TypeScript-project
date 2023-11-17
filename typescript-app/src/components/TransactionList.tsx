import { useContext } from "react";
// import { Transaction } from './Transaction';
// import { Transaction } from "./Transaction";
import Transaction from "./Transaction";

import { GlobalContext } from "../context/GlobalState";

const TransactionList = () => {
  const { state } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {state.transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
