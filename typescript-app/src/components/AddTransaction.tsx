import React, { useState } from "react";

type FormEvent = React.FormEvent<HTMLFormElement>;
interface Transaction {
  id: number;
  text: string;
  amount: number;
}

const AddTransactions = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newTransaction: Transaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    console.log(newTransaction);
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransactions;
