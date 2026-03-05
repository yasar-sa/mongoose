import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UsersWithAddress from './components/UsersWithAddress.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <UsersWithAddress />
  </StrictMode>,
)


// TASK

// Create a user collection and implement crud operations for it
// Create an address collection and implement crud operations for it
// Each user can have only one address
// Implement api to get user details with address using virtual populate method

//CONCEPTS 

// 1. Mongoose models and schemas
// 2. Mongoose CRUD operations
// 3. Mongoose virtual populate method
// 4. Mongoose aggregation framework
// 5. Mongoose populate method 