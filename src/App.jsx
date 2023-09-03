// import { Button } from 'flowbite-react';
import Footer from "./components/Footer";
import NavbarWithCTAButton from "./components/NavBar";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <main className="h-screen bg-indigo-500">
      <NavbarWithCTAButton />
      <Home />
      <Footer />
      </main>
    </>
  );
}

export default App;
