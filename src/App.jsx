// import { Button } from 'flowbite-react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FooterPage from "./components/Footer";
import NavbarWithCTAButton from "./components/NavBar";
import Home from "./pages/Home";
import Store from './pages/Store';

function InitialPage(){
  return (
    <>
      <Home />
    </>
  )
}

function Contact(){
  return (
    <>
      Contact
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
