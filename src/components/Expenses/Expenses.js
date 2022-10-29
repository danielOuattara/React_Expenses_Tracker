import { useState } from "react";
import "./../../styles/expenses.css";
import Card from "./../UI/Card";

import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses({ expenses }) {
  const [selectYear, setSelectYear] = useState("");

  let filteredExpenses =
    selectYear === ""
      ? expenses
      : expenses.filter(
          (item) => item.date.getFullYear() === Number(selectYear)
        );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter setSelectYear={setSelectYear} />
        <ExpensesChart filteredExpenses={filteredExpenses} />
      </Card>

      <Card className="expenses">
        <ExpensesList
          filteredExpenses={filteredExpenses}
          selectYear={selectYear}
        />
      </Card>
    </div>
  );
}

export default Expenses;
