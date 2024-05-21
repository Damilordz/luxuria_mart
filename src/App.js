import "./assets/css/App.css"; // Import the App.css file for custom styles
import "bootstrap/dist/css/bootstrap.min.css"; // Import the Bootstrap CSS
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./components/Header"; // Import the Header component
import Home from "./pages/Home"; // Import the Home component
import Footer from "./components/Footer"; // Import the Footer component
import { Routes, Route } from "react-router-dom"; // Import the Routes and Route components from react-router-dom
import Products from "./pages/Products"; // Import the Products component
import About from "./pages/About"; // Import the About component

function App() {
  return (
    <div className="App">
      <Header /> {/* Render the Header component */}
      {/* Define routes */}
      <Routes>
        {/* Route for the Home page */}
        <Route exact path="/" element={<Home />} />

        {/* Route for the Products page */}
        <Route path="/products" element={<Products />} />

        {/* Route for the About page */}
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer /> {/* Render the Footer component */}
    </div>
  );
}

export default App;
