import Card from "../UI/Card";
import "./../../styles/expensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList({ filteredExpenses, selectYear }) {
  if (filteredExpenses.length === 0) {
    return (
      <Card className="expense-item">
        <h2 className="expenses-list__fallback">
          No Expenses Found for {selectYear}
        </h2>
      </Card>
    );
  }

  return (
    <ul className="expenses-list">
      {filteredExpenses.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            date={item.date}
            amount={item.amount}
          />
        );
      })}
    </ul>
  );
}

export default ExpensesList;
