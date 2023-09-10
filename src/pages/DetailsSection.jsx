import { useNavigate } from "react-router-dom"
export default function DetailSection(){
    const navigate = useNavigate();
    return (
        <>
        <div className="relative top-10 h-max text-center font-mono font-bold text-2xl p-5 bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-white border-b-2 ">
          Sección 1
        </div>
        <div className="flex md:flex-row flex-col bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-white font-mono">
          <div className="flex flex-col items-center pt-11  basis-1/3">
            <h3 className="pt-5">Title1</h3>
            <div className="flex justify-center w-full">
              <hr className="w-40 border-t-3 border-t-white" />
            </div>
            <p className="p-5 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              quia quisquam laboriosam aliquam dicta eum porro! Delectus
              sapiente animi nihil at aut sit, iure molestias, iste, libero eum
              tenetur vero.
            </p>

            <p className="p-5 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              quia quisquam laboriosam aliquam dicta eum porro! Delectus
              sapiente animi nihil at aut sit, iure molestias, iste, libero eum
              tenetur vero.
            </p>
          </div>
          <div className="flex flex-col md:border-x-2 basis-1/3 justify-center items-center py-7">
            <div className="flex items-center justify-between w-full">
              <hr className="w-20 border-t-3 border-t-white" />
              <hr className="w-20 border-t-3 border-t-white" />
            </div>

            <div className="flex w-60 h-60 outline hover:animate-spin  outline-purple-500 outline-offset-2 bg-purple-500 rounded-full justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-20 h-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                />
              </svg>
            </div>

            <div className="flex items-center justify-between w-full">
              <hr className="w-20 border-t-3 border-t-white" />
              <hr className="w-20 border-t-3 border-t-white" />
            </div>
          </div>
          <div className="flex flex-col items-center pt-11 basis-1/3">
            <h3 className="pt-5">Title2</h3>
            <div className="flex justify-center w-full">
              <hr className="w-40 border-t-3 border-t-white" />
            </div>
            <p className="p-5 font-light text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              quia quisquam laboriosam aliquam dicta eum porro! Delectus
              sapiente animi nihil at aut sit, iure molestias, iste, libero eum
              tenetur vero.
            </p>

            <p className="p-5 font-light text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              quia quisquam laboriosam aliquam dicta eum porro! Delectus
              sapiente animi nihil at aut sit, iure molestias, iste, libero eum
              tenetur vero.
            </p>
          </div>
        </div>
        <div className="bg-indigo-500">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0f172a"
              fillOpacity="1"
              d="M0,64L17.1,58.7C34.3,53,69,43,103,74.7C137.1,107,171,181,206,176C240,171,274,85,309,58.7C342.9,32,377,64,411,85.3C445.7,107,480,117,514,128C548.6,139,583,149,617,165.3C651.4,181,686,203,720,197.3C754.3,192,789,160,823,122.7C857.1,85,891,43,926,42.7C960,43,994,85,1029,117.3C1062.9,149,1097,171,1131,165.3C1165.7,160,1200,128,1234,106.7C1268.6,85,1303,75,1337,80C1371.4,85,1406,107,1423,117.3L1440,128L1440,0L1422.9,0C1405.7,0,1371,0,1337,0C1302.9,0,1269,0,1234,0C1200,0,1166,0,1131,0C1097.1,0,1063,0,1029,0C994.3,0,960,0,926,0C891.4,0,857,0,823,0C788.6,0,754,0,720,0C685.7,0,651,0,617,0C582.9,0,549,0,514,0C480,0,446,0,411,0C377.1,0,343,0,309,0C274.3,0,240,0,206,0C171.4,0,137,0,103,0C68.6,0,34,0,17,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className="bg-indigo-500 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center backdrop-blur-sm bg-slate-900/80 rounded-3xl h-max w-full m-10 p-10 ">
            <p className="text-justify font-mono text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
            maiores. Quae porro a saepe quasi dignissimos! Cum nemo magni sequi
            minima maiores. Officiis cumque excepturi possimus dicta numquam
            molestias quidem.
            </p>
            <button className="text-slate-100 bg-indigo-500 p-3 rounded-md mt-3 font-mono text-sm" onClick={() => navigate('/store')}>Tienda</button>
          </div>
        </div>
        </>
    )
}