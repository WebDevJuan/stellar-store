import { Button, Modal } from "flowbite-react";
import Select from 'react-select'

const options = [
  { value: 'all', label: 'Todo' },
  { value: 'accesorio', label: 'Accesorios' },
  { value: 'sudadera', label: 'Sudaderas' },
  { value: 'camiseta', label: 'Camisetas' }
]

const Selector = () => (
  <Select options={options} placeholder="Ejmpl. Accesorio" className="w-full  rounded font-mono" defaultValue={options[0]} />
)
// eslint-disable-next-line react/prop-types
function Filters({ openModal, setOpenModal }) {
    const onSubmit = values => {
        console.log('VALORES', values);
        
    }
  return (
    <>
      <Modal
        dismissible
        show={openModal === "dismissible"}
        onClose={() => setOpenModal(undefined)}
        className="h-full"
      >
        <Modal.Header>Búsqueda de productos</Modal.Header>
        <Modal.Body className="overflow-visible flex-wrap">
          <div className="space-y-6">
            <form onSubmit={() => onSubmit()}>
                <label className="font-mono text-slate-300 mt-10">Tipo</label>
                <input type="text" className="w-full rounded" placeholder="Ejmpl. Sudadera" maxLength={200} />
                <div className="py-2" />
                <label className="font-mono text-slate-300 mt-10">Búsqueda de producto</label>
                <Selector />
                <hr />
                <div className="flex items-center justify-center gap-4 pt-10">
                <Button type="submit">Buscar</Button>
                <Button color="gray" onClick={() => setOpenModal(undefined)}> Cerrar </Button>
                </div>         
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Filters;