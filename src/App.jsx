import react from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import BackToTop from "./components/BackToTop";
import "./App.css";
import "./reset.css";
import { StaffGallery } from "./components/StaffGallery";
import Aboutevent from "./components/aboutevent";
import Quizlink from "./components/quizlink";
import ProjectGallery from "./components/ProjectGallery";
import Footer from "./components/Footer";
import questions from "./data/generalquestions.json";

function App() {
  console.log(questions.questions.length);
  return (
    <>
      <NavBar activeClass={"white"} />
      <Hero />
      <StaffGallery />
      <Aboutevent />
      <BackToTop />
      <Quizlink />
      <ProjectGallery />
      <Footer />
    </>
  );
}

export default App;
