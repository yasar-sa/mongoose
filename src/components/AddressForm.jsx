import { useState, useEffect } from "react";

function AddressForm({ userId, createAddress, updateAddress, editingAddress }) {

  const [form, setForm] = useState({
    street: "",
    pincode: "",
    country: ""
  });

  useEffect(() => {
    if (editingAddress) {
      setForm({
        street: editingAddress.street,
        pincode: editingAddress.pincode,
        country: editingAddress.country
      });
    }
  }, [editingAddress]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingAddress) {
      updateAddress(editingAddress._id, form);
    } else {
      createAddress(userId, form);
    }

    setForm({
      street: "",
      pincode: "",
      country: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>

      <h3>{editingAddress ? "Edit Address" : "Add Address"}</h3>

      <input
        name="street"
        value={form.street}
        onChange={handleChange}
        placeholder="Street"
      />

      <input
        name="pincode"
        value={form.pincode}
        onChange={handleChange}
        placeholder="Pincode"
      />

      <input
        name="country"
        value={form.country}
        onChange={handleChange}
        placeholder="Country"
      />

      <button type="submit">
        {editingAddress ? "Update" : "Create"}
      </button>

    </form>
  );
}

export default AddressForm;