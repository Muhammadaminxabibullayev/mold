import {Routes, Route} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import About from "./routes/about/About";
import Contact from "./routes/contact/Contact";
import Nav from "./components/nav/Nav";
import Search from "./components/search/Search";
import Home from "./routes/home/Home";
import ProductView from "./routes/product-view/ProductView";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop/>
       <Nav/>
      <Search/>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/about" element={<About/>} /> 
        <Route path="/contact" element={<Contact/>} />
        <Route path="/product-view/:id" element={<ProductView/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;