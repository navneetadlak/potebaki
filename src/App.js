import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AppRoutes from './Routes/AppRoutes';
import Startup from './Routes/Startup';
import Registrations from './Routes/Registrations';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <Startup />
      <Registrations />
      <Footer />
    </BrowserRouter>
  );
}

export default App;