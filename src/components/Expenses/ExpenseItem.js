import ExpenseDate from "./ExpenseDate";
import "./../../styles/expenseItem.css";
import Card from "./../UI/Card";

function ExpenseItem({ title, amount, date }) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
