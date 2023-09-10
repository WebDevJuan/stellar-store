import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { mocksProducts } from "../mocks/mocksProducts";
import Filters from "../components/Filters";


export default function Store() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [openModal, setOpenModal] = useState();

  useEffect(() => {
    // Filtra los productos por el término de búsqueda
    setResults(
      mocksProducts.filter(product => {
        return product.title.toLowerCase().includes(searchTerm.toLowerCase());
      }),
    );
  }, [searchTerm]);

  return (
    <div className=" bg-gradient-to-r bg-indigo-500">
      <div
        id="store"
        className=" bg-gradient-to-r relative top-20"
      >
        <div className="flex gap-3 items-center justify-center">
        <input
          type="text"
          placeholder="Buscar productos..."
          onChange={event => setSearchTerm(event.target.value)}
          className="rounded md:w-1/2 w-full mx-2 dark:bg-slate-400 text-slate-800"
        />
        {/* <Button onClick={() => setOpenModal("dismissible")}>Filtros</Button> */}
        </div>
        <Filters openModal={openModal} setOpenModal={setOpenModal} />
        <div className="flex flex-col sm:flex-row gap-4 p-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {results.length > 0 ? (
                results.map(product => (
                  <Cards
                    key={product.id}
                    title={product.title}
                    description={product.description}
                    image={product.src}
                  />
                ))
              ) : (
                <p className="font-mono text-center">No hay productos</p>
              )}
            </div>
        </div>
      </div>
    </div>
  );
}
