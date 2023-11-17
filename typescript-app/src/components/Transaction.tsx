import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

interface TransactionProps {
  transaction: {
    id: number;
    text: string;
    amount: number;
  };
}

const Transaction: React.FC<TransactionProps> = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  console.log(transaction);

  //Money formatter function
  function moneyFormatter(num: number): string {
    const p = num.toFixed(2).split(".");
    return (
      "$ " +
      p[0]
        .split("")
        .reverse()
        .reduce(function (acc, num, i) {
          return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
        }, "") +
      "." +
      p[1]
    );
  }

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}
        {moneyFormatter(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
