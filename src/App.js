import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BusinessStats from './Components/BusinessStats';
import Footer from './Components/Footer';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import Testimonials from './Components/Testimonials';
import About from './Components/About';
import ContactUs from './Components/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/business-stats' element={<BusinessStats />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/contactUs' element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
