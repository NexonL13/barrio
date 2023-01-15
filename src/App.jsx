import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import Equipments from "./pages/Equipments";
import Overview from "./pages/Overview";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import Status from "./pages/Status";
import Dashboard from "./pages/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter basename="/barrio/">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Navbar />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/equipments" element={<Equipments />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
          <Route path="/status" element={<Status />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
