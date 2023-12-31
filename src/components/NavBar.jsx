"use client";
import { Button, Navbar, DarkThemeToggle, Flowbite } from "flowbite-react";

export function DarkMode() {
  return (
    <Flowbite>
      <DarkThemeToggle />
    </Flowbite>
  );
}

export default function NavbarWithCTAButton() {
  return (
    <Navbar fluid rounded style={{position: 'fixed', left: 0, top:0, zIndex: 10, width: '100%'}}>
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
        <Button gradientMonochrome="purple" className="font-mono">Tienda</Button>
        <Navbar.Toggle className="" ></Navbar.Toggle>
       
      </div>
      <Navbar.Collapse className="z-40">
        <Navbar.Link
          href="#"
          className="text-slate-300 text-base hover:text-indigo-500 font-mono"
        >
          Inicio
        </Navbar.Link>
        <Navbar.Link
          href="#"
          className="text-slate-300 text-base hover:text-indigo-500 font-mono"
        >
          Nosotr@s
        </Navbar.Link>
        <Navbar.Link
          href="#"
          className="text-slate-300 text-base hover:text-indigo-500 font-mono"
        >
          Contacto
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
