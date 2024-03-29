import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses: React.FC = () => {
  const { state } = useContext(GlobalContext);

  const amounts = state.transactions.map((transaction) => transaction.amount);

  //Money formatter function
  function moneyFormatter(num: number) {
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

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{moneyFormatter(income)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{moneyFormatter(expense)}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
