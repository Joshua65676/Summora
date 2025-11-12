import "./App.css";
import About from "./component/About";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import { BrowserRouter } from "react-router-dom";
import Service from "./component/service";
import Customer from "./component/Customer";
import Footer from "./component/Footer";

function App() {
  return (
    <BrowserRouter>
      <main className="overflow-x-hidden xl:overflow-x-scroll">
        <Navbar />
        <Hero />
        <About />
        <Service />
        <Customer />
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
