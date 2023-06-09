import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Contact from './pages/contact/contact';
import Services from './pages/Services/services';
import Pricing from './pages/pricing/pricing';
import Samples from './pages/samples/samples';
import Aboutus from './pages/Aboutus/Aboutus';
function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/" >
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/samples" element={<Samples/>}/>
        <Route path="/aboutus" element={<Aboutus/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
