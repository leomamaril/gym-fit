import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TrainersBio from "./pages/About/TrainersBio";
import Classes from "./pages/Classes";
import WorkoutClass from "./pages/Classes/WorkoutClass";
import Consultation from "./pages/Consultation";
import Contacts from "./pages/Contacts";
import Navigation from "./layout/Navigation";
import Footer from "./layout/Footer";
import Pricing from "./pages/Pricing";
import ScrollToTop from "./pages/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/trainer_bio/:name" element={<TrainersBio />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/workout/:classes" element={<WorkoutClass />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/pricing" element={<Pricing />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
