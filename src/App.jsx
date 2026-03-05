import { useEffect, useState } from "react";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  createAddress,
  getAddresses,
  updateAddress,
  deleteAddress
} from "./Api";

import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import AddressForm from "./components/AddressForm";
import AddressList from "./components/AddressList";

function App() {

  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const [selectedUser, setSelectedUser] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [editingAddress, setEditingAddress] = useState(null);

  // ---------------- USERS ----------------

  const fetchUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const addUser = async (data) => {
    await createUser(data);
    fetchUsers();
  };

  const handleUpdate = async (id, data) => {
    await updateUser(id, data);
    setEditingUser(null);
    fetchUsers();
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete this user?");
    if (!confirmDelete) return;

    await deleteUser(id);
    fetchUsers();
  };

  // ---------------- ADDRESS ----------------

  const loadAddresses = async (user) => {
    setSelectedUser(user);
    setAddresses([]);

    const res = await getAddresses(user._id);
    setAddresses(res.data);
  };

  const addAddress = async (userId, data) => {
  try {

    await createAddress(userId, data);

    const res = await getAddresses(userId);
    setAddresses(res.data);

    alert("Address created successfully!");

  } catch (error) {

    alert(error.response.data.message);

  }
};

const handleAddressUpdate = async (id, data) => {

  await updateAddress(id, data);

  const res = await getAddresses(selectedUser._id);
  setAddresses(res.data);

  setEditingAddress(null);

  alert("Address updated!");
};

  const handleAddressDelete = async (id) => {
    const confirmDelete = window.confirm("Delete this address?");
    if (!confirmDelete) return;

    await deleteAddress(id);

    const res = await getAddresses(selectedUser._id);
    setAddresses(res.data);
  };

  return (
    <div style={{ padding: "20px" }}>

      <h2>CRUD APPLICATION</h2>

      <UserForm
        addUser={addUser}
        updateUser={handleUpdate}
        editingUser={editingUser}
      />

      <UserList
        users={users}
        deleteUser={handleDelete}
        editUser={setEditingUser}
        selectUser={loadAddresses}
      />

      {selectedUser && (
        <>
          <h3>Addresses for {selectedUser.name}</h3>

          {(addresses.length === 0 || editingAddress) && (
                <AddressForm
                  userId={selectedUser._id}
                  createAddress={addAddress}
                  updateAddress={handleAddressUpdate}
                  editingAddress={editingAddress}
                />
              )}

          <AddressList
            addresses={addresses}
            editAddress={setEditingAddress}
            removeAddress={handleAddressDelete}
          />
        </>
      )}

    </div>
  );
}

export default App;