export default function ExpensesList({ expenses }) {
  return (
    <div>
      {expenses.length === 0 ? (
        <p> No Expenses for user.</p>
      ) : (
        <li>
          <ul>
            {expenses.map((e) => (
              <li key={e.id}>
                {e.group_name} Amount Owed: ${Number(e.item_amount).toFixed(2)}{" "}
                <button>View Expense Detail</button>
              </li>
            ))}
          </ul>
        </li>
      )}
    </div>
  );
}
