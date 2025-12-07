import { useNavigate, useEffect } from "react-router";
import { getUserGroups } from "../api/groups";
import { useState } from "react";
import { useAuth } from "../auth/AuthContext";

export default function GroupsList() {
  const navigate = useNavigate();
  const { token } = useAuth();
  const [userGroups, setUserGroups] = useState([]);

  const syncGroups = async (token) => {
    const data = await getUserGroups(token);
    setUserGroups(data);
  };

  const handleNewGroupButton = () => {
    navigate("new");
  };

  useEffect(() => {
    syncGroups();
  }, [token]);

  return (
    <div>
      <button className="new-group-btn" onClick={handleNewGroupButton}>
        Create New Group
      </button>
      <li>
        {userGroups.map((group) => (
          <ul key={group.id}>{group.name}</ul>
        ))}
      </li>
    </div>
  );
}
