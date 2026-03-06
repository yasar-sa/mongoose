import { useEffect, useState } from "react";
import { getUsersWithAddress } from "../Api";

function UsersWithAddress() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await getUsersWithAddress();
    setUsers(res.data);
  };

  return (
    <div>
      <h2>Users With Address</h2>

      {users.map((user) => (
        <div
          key={user._id}
          style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}
        >
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>

          <p>Street: {user.address[0].street}</p>
          <p>Pincode: {user.address[0].pincode}</p>
          <p>Country: {user.address[0].country}</p>
        </div>
      ))}
    </div>
  );
}

export default UsersWithAddress;
