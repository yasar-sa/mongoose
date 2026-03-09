import { useEffect, useState } from "react";
import api from "../api/axios";

function Dashboard() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    const fetchUsers = async () => {
      const res = await api.get("/users");
      setUsers(res.data);
    };

    fetchUsers();

  }, []);

  return (
    <div>
      <h2>User List</h2>

      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}

    </div>
  );
}

export default Dashboard;