import "./styles.css"
import Navbar from "./components/Navbar"
import Home from "./routes/home";
import Contact from "./routes/contact";
import About from "./routes/about";
import Service from "./routes/service";
import { Route,Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/contact" element = {<Contact/>}/>
        <Route path="/service" element = {<Service/>}/>
      </Routes>

    </div>
  );
}
export default App;


