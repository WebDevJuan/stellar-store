"use client";
import { Button, Navbar, DarkThemeToggle, Flowbite } from "flowbite-react";
import { useNavigate } from "react-router-dom";
// import './styleNavBar';

export function DarkMode() {
  return (
    <Flowbite>
      <DarkThemeToggle />
    </Flowbite>
  );
}

export default function NavbarWithCTAButton() {
  const navigate = useNavigate();
  return (
    <Navbar fluid className="fixed left-0 top-0 z-10 w-full">
    {/* <Navbar fluid rounded theme={{theme: customTheme}}> */}
      <Navbar.Brand href="#">
        {/* <img
          alt="F"
          className="mr-3 h-6 sm:h-9"
          src="https://i.ibb.co/Vq3vfVh/Firefly-ST-Spatial-effects-with-indigo-colors-13286-removebg-preview-1.png"
          // src="https://i.ibb.co/bHMw6SD/Firefly-Stellar-Threads-Spatial-effects-with-purple-touches-66720-1.png"s
        /> */}
      </Navbar.Brand>
      <div className="flex md:order-2 gap-2">
        {/* <DarkMode/> */}
        <Button gradientMonochrome="purple" className="font-mono" onClick={() => navigate("/store")}>Tienda</Button>
        <Navbar.Toggle className=""></Navbar.Toggle>
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          onClick={() => navigate("/")}
          className="text-slate-300 text-sm hover:text-indigo-500 font-mono cursor-pointer"
        >
          Inicio
        </Navbar.Link>
        <Navbar.Link
          onClick={() => navigate("/about")}
          className="text-slate-300 text-sm hover:text-indigo-500 font-mono cursor-pointer"
        >
          Nosotr@s
        </Navbar.Link>
        <Navbar.Link
          onClick={() => navigate("/contact")}
          className="text-slate-300 text-sm hover:text-indigo-500 font-mono cursor-pointer"
        >
          Contacto
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
