import react from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import BackToTop from "./components/BackToTop";
import "./App.css";
import "./reset.css";
import { StaffGallery } from "./components/staffGallery";
import Aboutevent from "./components/aboutevent";
import Quizlink from "./components/quizlink";
import ProjectGallery from "./components/ProjectGallery";

function App() {
  return (
    <>
      <NavBar activeClass={"white"} />
      <Hero />

      <StaffGallery />
      <Aboutevent />
      <BackToTop />
      <Quizlink />
      <ProjectGallery />
    </>
  );
}

export default App;
