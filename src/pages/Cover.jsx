export default function Cover(){
    return(
        <div className="relative top-12 bg-cover overflow-hidden bg-[url('https://cdn.dribbble.com/userupload/5906240/file/original-4285a895427f6e0ccc1e744a085bb175.jpg?resize=1200x900')]">
          <div className="flex md:flex-row flex-col items-center h-3/4 justify-items-center">
            <div className="flex flex-col basis-2/3 pl-8 backdrop-blur-sm bg-slate-600/50 rounded-3xl m-10 px-2">
              <h2 className="text-left md:text-5xl sm:text-4xl text-slate-200 text-3xl font-semibold mb-5 mt-20">
                Very spacey clothing
              </h2>
              <h1 className="text-left md:text-8xl sm:text-7xl font-serif text-purple-500 text-5xl font-bold pb-20">
                StellarThreads
              </h1>
              <div className="font-light mt-10 mb-2 text-slate-400">
                Juan Peñalver ®
              </div>
            </div>
            <div className="grow p-10"></div>
          </div>
          <div className="w-full h-15 text-center">
            <button
              className="transition duration-150 ease-out hover:ease-in bg-purple-500 px-10 py-5 hover:bg-purple-700 mb-12 rounded-xl text-center text-purple-50"
              type="button"
              value="scroll"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                />
              </svg>
            </button>
          </div>
        </div> 
    )
}