import "./App.css";
import About from "./component/About";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <main className="">
        <Navbar />
        <Hero />
        <About />
      </main>
    </BrowserRouter>
  );
}

export default App;
