import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers , deleteUser} from "../redux/userSlice";

function UserList({editUser, selectUser }) {
     const dispatch = useDispatch();

  const { users, loading, error } = useSelector(
  (state) => state.users
);

//adding extra function to handle delete user for confirmation before delete user
const handleDelete = (id) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this user?");

  if (confirmDelete) {
    dispatch(deleteUser(id));
  }
};

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

          <button onClick={() => handleDelete(user._id)}>
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