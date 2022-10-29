import { useState } from "react";
import "./../../styles/expenseForm.css";

function ExpenseForm({ setExpenses, setShowForm }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleExpenseTitle = (event) => {
    return setTitle(() => event.target.value);
  };

  const handleExpenseAmount = (event) => {
    return setAmount(() => event.target.value);
  };

  const handleExpenseDate = (event) => {
    return setDate(() => event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newExpenseData = {
      title,
      amount: Number(amount),
      date: new Date(date),
      id: Math.random().toString(),
    };
    setExpenses((prevState) => [newExpenseData, ...prevState]);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={title}
            onChange={handleExpenseTitle}
            required
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            value={amount}
            min="0.01"
            step="0.01"
            onChange={handleExpenseAmount}
            required
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            value={date}
            min="2019-01-01"
            max="2022-12-31"
            onChange={handleExpenseDate}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={() => setShowForm(false)}>
          Close
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
