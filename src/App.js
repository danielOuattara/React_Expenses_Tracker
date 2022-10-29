import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
import initialData from "./data";

function App() {
  const [expenses, setExpenses] = useState(initialData);

  return (
    <>
      <NewExpense setExpenses={setExpenses} />
      <Expenses expenses={expenses} />
    </>
  );
}
export default App;
