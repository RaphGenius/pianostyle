import React from "react";
import Home from "./pages/Home";
import Societe from "./components/Societe";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Home />
      <Societe />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
