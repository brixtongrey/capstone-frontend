import { useNavigate, useParams } from "react-router";

export default function ExpenseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <div>
      <button onClick={handleBackButton}>Back</button>
      <h1>Expense Detail for {id}</h1>
    </div>
  );
}
