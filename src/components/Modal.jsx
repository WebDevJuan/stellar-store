/* eslint-disable react/prop-types */
import { Button, Modal } from 'flowbite-react';

export default function DefaultModal({openModal, setOpenModal}) {

  return (
    <>
      
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terminos y servicios</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Quedan menos de un mes para que la Unión Europea promulgue nuevas leyes de privacidad de los consumidores para sus ciudadanos, por lo que las empresas de todo el mundo están actualizando sus acuerdos de términos de servicio para cumplir.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            El Reglamento General de Protección de Datos (G.D.P.R.) de la Unión Europea entra en vigor el 25 de mayo y está destinado a
              garantizar un conjunto común de derechos de datos en la Unión Europea. Requiere que las organizaciones notifiquen a los usuarios tan pronto como
              Posible violación de datos de alto riesgo que podría afectarlos personalmente.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>Cerrar</Button>

        </Modal.Footer>
      </Modal>
    </>
  )
}


