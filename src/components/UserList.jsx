function UserList({ users, deleteUser, editUser, selectUser }) {

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