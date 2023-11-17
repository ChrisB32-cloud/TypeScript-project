import { Reducer } from "react";

interface Transaction {
  id: number;
  text: string;
  amount: number;
  // Add other properties as needed
}

interface State {
  transactions: Transaction[];
  // Add other properties as needed
}

type Action =
  | { type: "DELETE_TRANSACTION"; payload: number }
  | { type: "ADD_TRANSACTION"; payload: Transaction };

const AppReducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};

export default AppReducer;
