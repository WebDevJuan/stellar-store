import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import Cards from "../components/Cards";
import { mocksProducts } from "../mocks/mocksProducts";
// import DefaultBreadcrumb from "../components/Breadcrumb";
import { useNavigate } from "react-router-dom";

export default function Store() {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {/* <div className="relative top-20 text-black flex font-mono p-3 pr-10 mx-10 rounded-lg">
        <Breadcrumb>
          <Breadcrumb.Item href="#" icon={HiHome}>
            <p onClick={() => navigate("/")}>Home</p>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">
            <p onClick={() => navigate("/store")}>Store</p>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div> */}
      <div
        id="store"
        className="relative top-20 flex flex-col sm:flex-row gap-4 p-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      >
        <section id="filter" className="basis-1/3">
          <div className="backdrop-blur-sm bg-slate-900/80 rounded-3xl h-max p-10 ">
            <div className="text-justify font-mono text-white ">
              <Breadcrumb>
                <Breadcrumb.Item href="#" icon={HiHome}>
                  <p onClick={() => navigate("/")}>Home</p>
                </Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                  <p onClick={() => navigate("/store")}>Store</p>
                </Breadcrumb.Item>
              </Breadcrumb>
              <hr className="my-3" />
              <h3 className="text-lg text-center cursor-default">Store</h3>
              {/* <hr className="mb-3" />
              <ul className="text-center cursor-pointer">
                <li>Sudaderas</li>
                <li>Camisetas</li>
                <li>Accesorios</li>
              </ul> */}
            </div>
          </div>
        </section>
        <section id="filter" className="basis-full ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {mocksProducts &&
              mocksProducts.map(product => (
                <Cards
                  key={product.id}
                  title={product.title}
                  description={product.description}
                  image={product.src}
                />
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}
