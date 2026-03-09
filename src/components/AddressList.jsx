import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddresses } from "../redux/addressSlice";


function AddressList({ addresses = [], editAddress, removeAddress }) {
       const dispatch = useDispatch();

  const {  loading, error } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    dispatch(fetchAddresses());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error}</p>;

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