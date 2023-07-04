import react from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import BackToTop from "./components/BackToTop";
import "./App.css";
import "./reset.css";
import { StaffGallery } from "./components/staffGallery";
import Aboutevent from "./components/aboutevent";

function App() {
  return (
    <>
      <NavBar activeClass={"white"} />
      <Hero />

      <StaffGallery />
      <Aboutevent />
      <BackToTop />
    </>
  );
}

export default App;
