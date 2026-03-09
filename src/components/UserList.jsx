import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/userSlice";

function UserList({ users, deleteUser, editUser, selectUser }) {
     const dispatch = useDispatch();

  const {  loading, error } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <h3>Users</h3>

      {users.map((user) => (
        <div key={user._id} style={{border:"1px solid gray",margin:"10px",padding:"10px"}}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Age: {user.age}</p>

          <button onClick={() => editUser(user)}>
            Edit
          </button>

          <button onClick={() => deleteUser(user._id)}>
            Delete
          </button>
          <button onClick={() => {
            console.log( user);
            selectUser(user);
          }}>
            View Address
          </button>
        </div>
      ))}

    </div>
  );
}

export default UserList;