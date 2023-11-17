import { createContext, useReducer, ReactNode } from "react";
import AppReducer from "./AppReducer";

interface Transaction {
  id: number;
  text: string;
  amount: number;
  // Add other properties as needed
}

interface State {
  transactions: Transaction[];
}

// Initial state
const initialState: State = {
  transactions: [],
};

// Create context
// export const GlobalContext = createContext<>(initialState);
export const GlobalContext = createContext<{
  state: State;
  deleteTransaction: (id: number) => void;
  addTransaction: (transaction: Transaction) => void;
}>({
  state: initialState,
  deleteTransaction: () => {},
  addTransaction: () => {},
});

// Provider component
export const GlobalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id: number) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction: Transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        // transactions: state.transactions,
        state,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
