function AddressList({ addresses = [], editAddress, removeAddress }) {

  return (
    <div>

      <h3>Addresses</h3>

      {addresses.map((addr) => (
        <div key={addr._id} style={{border:"1px solid gray",margin:"10px",padding:"10px"}}>

          <p>Street: {addr.street}</p>
          <p>Pincode: {addr.pincode}</p>
          <p>Country: {addr.country}</p>

          <button onClick={() => editAddress(addr)}>
            Edit
          </button>

          <button onClick={() => removeAddress(addr._id)}>
            Delete
          </button>

        </div>
      ))}

    </div>
  );
}

export default AddressList;