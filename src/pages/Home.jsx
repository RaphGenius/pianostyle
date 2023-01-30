import React from "react";
import Societe from "../components/Societe";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import { motion as m } from "framer-motion";

const Home = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Societe />
      <ContactUs />
      <Footer />
    </m.div>
  );
};

export default Home;
