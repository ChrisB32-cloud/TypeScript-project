// import { useState } from "react";
// import { Header } from "./components/Header";
import Header from "./components/Header";
// import { Balance } from "./components/Balance";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpense";
// import { TransactionList } from "./components/TransactionList";
import TransactionList from "./components/TransactionList";
// import { AddTransaction } from "./components/AddTransaction";
import AddTransaction from "./components/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

const App: React.FC = () => {
  // const [count, setCount] = useState(0);

  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
};

export default App;
