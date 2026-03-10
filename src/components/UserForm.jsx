import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser} from "../redux/userSlice";

function UserForm({ updateUser, editingUser }) {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    email: "",
    age: ""
  });

  useEffect(() => {
    if (editingUser) {
      setForm(editingUser);
    }
  }, [editingUser]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = (e) => {
  e.preventDefault();
  if (!form.name || !form.email || !form.age) {
    alert("Please fill in all fields");
    return;
  }

  if (isNaN(form.age) || form.age <= 0) {
    alert("Please enter a valid age");
    return;
  }

  if (editingUser) {
    updateUser(editingUser._id, form);
    alert("User updated successfully!");
  } else {
    dispatch(addUser(form));
    alert("User created successfully!");
  }

  setForm({ name: "", email: "", age: "" });
};

  return (
    <form onSubmit={handleSubmit}>
      <h3>{editingUser ? "Update User" : "Add User"}</h3>

      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <input
        name="age"
        placeholder="Age"
        value={form.age}
        onChange={handleChange}
      />

      <button type="submit">
        {editingUser ? "Update" : "Create"}
      </button>
    </form>
  );
}

export default UserForm;