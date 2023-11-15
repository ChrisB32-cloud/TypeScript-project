import { useState } from "react";
// import { Header } from "./components/Header";
import Header from "./components/Header";
// import { Balance } from "./components/Balance";
import Balance from "./components/Balance";
// import { IncomeExpenses } from "./components/IncomeExpenses";
import IncomeExpenses from "./components/IncomeExpense";
// import { TransactionList } from "./components/TransactionList";
// import { AddTransaction } from "./components/AddTransaction";
import AddTransaction from "./components/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        {/* <TransactionList /> */}
        <AddTransaction />
      </div>
    </GlobalProvider>
    // <>
    //   <div>
    //     <h1 className="text-3xl font-bold underline">Hello world!</h1>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  );
}

export default App;
