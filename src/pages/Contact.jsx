/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import SimpleToast from "../components/SimpleToast";
import DefaultModal from "../components/Modal";

function DefaultForm({showToast, setShowToast}) {
  const [openCondition, setOpenCondition] = useState();
  const [mesagge, setMessage] = useState({
    email: "",
    title: "",
    description: "",
    condition: "off",
  });

  const changeShowToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    changeShowToast();
    // Realizar cualquier otra acción que sea necesaria
    console.log(mesagge)
  };

  const onHandleChange = e => {
    setMessage({
      ...mesagge,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="flex md:w-1/3 w-full flex-col gap-4" onSubmit={handleSubmit}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Email" />
        </div>
        <TextInput
          icon={HiMail}
          id="email"
          name="email"
          placeholder="name@flowbite.com"
          required
          type="email"
          onChange={e => onHandleChange(e)}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="title" value="Título del mensaje" />
        </div>
        <TextInput
          id="title"
          name="title"
          required
          type="text"
          placeholder="Problema con el producto 8982w9..."
          onChange={e => onHandleChange(e)}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="description" value="Mensaje" />
        </div>
        <Textarea
          id="description"
          name="description"
          placeholder="Deja tu mensaje..."
          required
          rows={4}
          className="text-sm"
          onChange={e => onHandleChange(e)}
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="condition" name="condition" required onChange={e => onHandleChange(e)}/>
        <Label className="flex" htmlFor="condition">
          <p>Acepta |</p>
          <span
            className="text-cyan-600 hover:underline dark:text-cyan-500"
            onClick={() => setOpenCondition(true)}
          >
          | terminos y condiciones
          </span>
        </Label>
      </div>
      <Button type="submit">Enviar</Button>
      {showToast && <SimpleToast />}
      {openCondition && <DefaultModal openModal={openCondition} setOpenModal={setOpenCondition} /> }
    </form>
    
  );
}

export default function Contact() {
  const [showToast, setShowToast] = useState();

  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center bg-slate-900/80 rounded mx-2 h-1/2 p-5 font-mono">
        <DefaultForm showToast={showToast} setShowToast={setShowToast} />
        
      </div>
    </div>
  );
}
