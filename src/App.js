import "./App.css";
import "./Root.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Detail from "./components/Detail";
import LetMeKnow from "./components/LetMeKnow";
import RigthKnowledge from "./components/RigthKnowledge";
import About from "./components/About";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className=" overflow-hidden">
      <header className="headerbg d-flex flex-column ">
        <NavBar />
        <Hero />
      </header>
      <Detail />
      <LetMeKnow />
      <RigthKnowledge />
      <About />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
