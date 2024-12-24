import React from "react";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Navbar from "./Sections/Navbar";
import Features from "./Sections/Features";
import Story from "./Sections/Story";
import Contacts from "./Sections/Contacts";
import Footer from "./Sections/Footer";

const App = () => {
  return (
    <main className=" relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contacts />
      <Footer />
    </main>
  );
};

export default App;
