import react from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Form from "./components/form";
import questions from "./data/Year13.json";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <>
      <NavBar activeClass={"white"} />
      <Hero />
      {/* <Form /> */}
      <BackToTop />
    </>
  );
}

export default App;
