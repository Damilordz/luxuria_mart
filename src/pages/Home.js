import { useState } from "react"; // Import the useState hook from React

import Form from "../components/Form"; // Import the Form component

function Home() {
  // Declare state variables using the useState hook
  const [name, setName] = useState(""); // State for storing the name
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for tracking login status

  // Function to handle name change in the input field
  function handleNameChange(e) {
    setName(e.target.value); // Update the name state with the new value
  }

  // Function to handle login
  function handleLogin(event) {
    if (name.length > 0) {
      setIsLoggedIn(true); // Set isLoggedIn to true if the name is not empty
    } else {
      setIsLoggedIn(false); // Set isLoggedIn to false if the name is empty
    }
    event.preventDefault(); // Prevent the default form submission behavior
  }

  // Function to handle logout
  function handleLogout() {
    setIsLoggedIn(false); // Set isLoggedIn to false to log out
    setName(''); 
  }

  return (
    <main>
      <div className="main-container p-4">
      <h1>LuxuriaMart <i className="fa-solid fa-cart-shopping fa-sm"></i></h1>
        {/* Render different content based on the login status */}
        {isLoggedIn ? (
          // If logged in, display the welcome message and logout button
          <div className="login-home">
            <div className="my-4 welcome-title">
              <h1>Welcome, {name}!</h1>
            </div>
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          // If not logged in, render the Form component
          <Form
            handleNameChange={handleNameChange}
            name={name}
            handleLogin={handleLogin}
          />
        )}
      </div>
    </main>
  );
}

export default Home;