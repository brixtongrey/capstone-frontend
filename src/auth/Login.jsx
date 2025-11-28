import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "./AuthContext";

/** A form that allows users to log into an existing account. */
export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const onLogin = async (e) => {
    e.preventDefault(); // Prevent page reload
    setError(null);

    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      await login({ username, password });
      navigate("/profile"); // redirect on success
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Login</h1>

        <form className="auth-form" onSubmit={onLogin}>
          <label>Username</label>
          <input type="text" name="username" required />

          <label>Password</label>
          <input type="password" name="password" required />

          <button type="submit" className="auth-btn">Login</button>

          {error && <p className="error-text">{error}</p>}
        </form>

        <p className="auth-footer">
          Don’t have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}
