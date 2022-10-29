import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import Card from "../UI/Card";
import "./../../styles/newExpense.css";

function NewExpense({ setExpenses }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <Card className="new-expense">
      {!showForm && (
        <button onClick={() => setShowForm(true)}>Add New Expense</button>
      )}

      {showForm && (
        <ExpenseForm setExpenses={setExpenses} setShowForm={setShowForm} />
      )}
    </Card>
  );
}

export default NewExpense;
