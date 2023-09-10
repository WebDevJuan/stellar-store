// import { Button } from 'flowbite-react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FooterPage from "./components/Footer";
import NavbarWithCTAButton from "./components/NavBar";
import Home from "./pages/Home";
import Store from './pages/Store';
import Contact from './pages/Contact';
import About from './pages/About';

function InitialPage(){
  return (
    <>
      <Home />
    </>
  )
}


function App() {
  return (
    <>
      <main className="h-screen bg-indigo-500">
      <BrowserRouter>
      <NavbarWithCTAButton />
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <FooterPage />
      </BrowserRouter>
      </main>
    </>
  );
}

export default App;
