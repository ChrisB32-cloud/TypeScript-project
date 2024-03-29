import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance: React.FC = () => {
  const { state } = useContext(GlobalContext);
  const amounts = state.transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc: number, item: number) => (acc += item), 0);

  //Money formatter function
  function moneyFormatter(num: number): string {
    const p = num.toFixed(2).split(".");
    return (
      "$ " +
      (p[0].split("")[0] === "-" ? "-" : "") +
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

  return (
    <>
      <h4>Your Balance</h4>
      <h1>{moneyFormatter(total)}</h1>
    </>
  );
};

export default Balance;
