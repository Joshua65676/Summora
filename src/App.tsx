import "./App.css";
import About from "./component/About";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import { BrowserRouter } from "react-router-dom";
import Service from "./component/service";
import Customer from "./component/Customer";

function App() {
  return (
    <BrowserRouter>
      <main className="">
        <Navbar />
        <Hero />
        <About />
        <Service />
        <Customer />
      </main>
    </BrowserRouter>
  );
}

export default App;
