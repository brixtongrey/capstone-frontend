import { useEffect, useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { getProfile } from "../api/profile";

export default function Profile() {
  const { user, token } = useAuth();
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) return;

    async function fetchProfile() {
      try {
        const data = await getProfile(token);
        setExpenses(data.expensesOwed || []);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchProfile();
  }, [token]);

  return (
    <div className="profile-container">
      <h1>Hello {user?.username}!</h1>

      {error && <p className="error-text">{error}</p>}

      <h2>Your Expenses Owed</h2>
      {expenses.length ? (
        <ul>
          {expenses.map((e) => (
            <li key={e.expenseId}>
              Expense #{e.expenseId}: ${e.amountOwed.toFixed(2)}
            </li>
          ))}
        </ul>
      ) : (
        <p>No expenses owed yet.</p>
      )}
    </div>
  );
}

