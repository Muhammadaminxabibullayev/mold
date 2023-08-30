import {Routes, Route} from "react-router-dom";
import About from "./routes/about/About";
import Contact from "./routes/contact/Contact";
import Home from "./routes/home/Home";
import Nav from "./components/nav/Nav";
import SubNav from "./components/SubNav/SubNav";
import SubFooter from "./components/SubFooter/SubFooter";
function App() {
  return (
    <>
      <SubNav/>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/about" element={<About/>} /> 
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      <SubFooter/>
    </>
  );
}

export default App;