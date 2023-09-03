// import { Button } from 'flowbite-react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from "./components/Footer";
import NavbarWithCTAButton from "./components/NavBar";
import Home from "./pages/Home";

function InitialPage(){
  return (
    <>
      <NavbarWithCTAButton />
      <Home />
      <Footer />
    </>
  )
}

function Store(){
  return (
    <>
      Tienda
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
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route path="/store" element={<Store />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      </main>
    </>
  );
}

export default App;
