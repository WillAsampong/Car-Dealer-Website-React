import Footer from "../Components/Footer"
import Header from "../Components/Header"
// import Layout from "../Components/Layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <div className="relative">
      <section className="hero-section relative">
        <div className="bg-[url('src/assets/Home-hero.jpg')] h-screen bg-cover bg-center">
          <Header />
          <div className="text-center absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-4">
            <h4 className="text-white text-sm">Find cars for sale and for rent near you</h4>
            <h1 className="capitalize text-6xl font-bold text-white">Find your perfect car</h1>
            <div className="tabs">
              <ul className="flex text-white gap-x-3 justify-center text-sm">
                <li className="border-b-2 ">All</li>
                <li className="">New</li>
                <li className="">Used</li>
              </ul>
            </div>
            <div className="form py-4 px-8 flex justify-center gap-x-6 rounded-full bg-white">
              <div className="border-r border-gray-400 px-4">
                <label htmlFor="">Any makes</label>
                <select></select>
              </div>
              <div className="border-r border-gray-400 px-4">
                <label htmlFor="">Any Models</label>  
                <select name="" id=""></select>
              </div>
              <div className="border-r border-gray-400 px-4">Prices: All Prices</div>
              <div className="search-button bg-[#405FF2] rounded-full px-4 py-2 flex items-center gap-x-2 text-white">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                Search
              </div>
            </div>
            <p className="capitalize text-white text-sm mt-5">Or browse featured models</p>
            <div className="featured-cars flex justify-center items-center gap-x-4">
              <div className="suv bg-white opacity-35 flex items-center rounded-full gap-x-4 px-4">
                <svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 260 140" enableBackground="new 0 0 260 140"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M246,90.011V59.995c0-5.523-4.48-9.995-10-9.995h-50L156.97,6.416C155.11,3.634,152.34,2,149,2H28 c-5.52,0-10,4.446-10,9.969V30h-8c-4.42,0-8,3.56-8,7.983v40.022C2,82.427,5.58,86,10,86h8v20h16.458 c2.8-15.959,16.702-28.066,33.462-28.066c16.75,0,30.708,12.107,33.518,28.066h72.958c2.8-15.959,16.764-28.066,33.524-28.066 c16.75,0,30.624,12.107,33.434,28.066H250c4.42,0,8-3.563,8-7.985v-8.004H246z M86,50H30V13.97h56V50z M98,50V13.97h48L170,50H98z M68,138c-14.336,0-26.083-11.706-26.083-26.051s11.664-26.014,26-26.014s26,11.669,26,26.014S82.336,138,68,138z M67.917,99.943 c-6.617,0-12,5.386-12,12.006c0,6.621,5.383,12.006,12,12.006s12-5.386,12-12.006C79.917,105.329,74.534,99.943,67.917,99.943z M208,138c-14.337,0-26.083-11.706-26.083-26.051s11.663-26.014,26-26.014s26,11.669,26,26.014S222.337,138,208,138z M207.917,99.943c-6.617,0-12,5.386-12,12.006c0,6.621,5.383,12.006,12,12.006s12-5.386,12-12.006 C219.917,105.329,214.534,99.943,207.917,99.943z"></path> </g></svg>
                <p>SUV</p>
              </div>
              <div className="sedan bg-white opacity-35 flex items-center rounded-full gap-x-4 px-4">
                <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  width="40px" height="40px" viewBox="0 0 47.067 47.067"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M43.377,23.098l-8.074-3.027l-7.934-8.429c-0.353-0.371-0.84-0.581-1.351-0.581H7.886c-0.607,0-1.176,0.298-1.522,0.798 L0.327,20.6c0,0.002-0.002,0.006-0.002,0.01c-0.093,0.134-0.159,0.282-0.212,0.434c-0.016,0.04-0.106,0.427-0.109,0.585 C0.004,21.637,0,21.645,0,21.651v7.816c0,1.021,0.829,1.851,1.851,1.851h0.002h1.764c0.543,2.672,2.91,4.688,5.739,4.688 c2.832,0,5.199-2.02,5.743-4.688h15.461c0.545,2.672,2.909,4.688,5.739,4.688s5.197-2.02,5.742-4.688h3.172 c1.024,0,1.854-0.828,1.854-1.851v-1.04C47.069,26.07,45.586,23.928,43.377,23.098z M9.359,32.305 c-1.192,0-2.157-0.966-2.157-2.158c0-1.191,0.965-2.158,2.157-2.158c1.193,0,2.16,0.967,2.16,2.158 C11.519,31.339,10.552,32.305,9.359,32.305z M13.372,19.802H5.379l3.478-5.038h4.512v5.038H13.372z M17.075,19.802v-5.038h8.146 l4.744,5.038H17.075z M36.252,32.305c-1.191,0-2.156-0.966-2.156-2.158c0-1.191,0.965-2.158,2.156-2.158 c1.192,0,2.159,0.967,2.159,2.158C38.411,31.339,37.444,32.305,36.252,32.305z"></path> </g> </g> </g></svg>
                <p>Sedan</p>
              </div>
              <div className="hatchback bg-white opacity-35 flex items-center rounded-full gap-x-4 px-4">
                <svg fill="#000000" width="40px" height="40px" viewBox="0 -39.69 122.88 122.88" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M103.94,23.97c5.39,0,9.76,4.37,9.76,9.76c0,5.39-4.37,9.76-9.76,9.76c-5.39,0-9.76-4.37-9.76-9.76 C94.18,28.34,98.55,23.97,103.94,23.97L103.94,23.97z M23,29.07v3.51h3.51C26.09,30.86,24.73,29.49,23,29.07L23,29.07z M26.52,34.87H23v3.51C24.73,37.97,26.09,36.6,26.52,34.87L26.52,34.87z M20.71,38.39v-3.51H17.2 C17.62,36.6,18.99,37.96,20.71,38.39L20.71,38.39z M17.2,32.59h3.51v-3.51C18.99,29.49,17.62,30.86,17.2,32.59L17.2,32.59z M105.09,29.07v3.51h3.51C108.18,30.86,106.82,29.49,105.09,29.07L105.09,29.07z M108.6,34.87h-3.51v3.51 C106.82,37.97,108.18,36.6,108.6,34.87L108.6,34.87z M102.8,38.39v-3.51h-3.51C99.71,36.6,101.07,37.96,102.8,38.39L102.8,38.39z M99.28,32.59h3.51v-3.51C101.07,29.49,99.71,30.86,99.28,32.59L99.28,32.59z M49.29,12.79c-1.54-0.35-3.07-0.35-4.61-0.28 C56.73,6.18,61.46,2.07,75.57,2.9l-1.94,12.87L50.4,16.65c0.21-0.61,0.33-0.94,0.37-1.55C50.88,13.36,50.86,13.15,49.29,12.79 L49.29,12.79z M79.12,3.13L76.6,15.6l24.13-0.98c2.48-0.1,2.91-1.19,1.41-3.28c-0.68-0.95-1.44-1.89-2.31-2.82 C93.59,1.86,87.38,3.24,79.12,3.13L79.12,3.13z M0.46,27.28H1.2c0.46-2.04,1.37-3.88,2.71-5.53c2.94-3.66,4.28-3.2,8.65-3.99 l24.46-4.61c5.43-3.86,11.98-7.3,19.97-10.2C64.4,0.25,69.63-0.01,77.56,0c4.54,0.01,9.14,0.28,13.81,0.84 c2.37,0.15,4.69,0.47,6.97,0.93c2.73,0.55,5.41,1.31,8.04,2.21l9.8,5.66c2.89,1.67,3.51,3.62,3.88,6.81l1.38,11.78h1.43v6.51 c-0.2,2.19-1.06,2.52-2.88,2.52h-2.37c0.92-20.59-28.05-24.11-27.42,1.63H34.76c3.73-17.75-14.17-23.91-22.96-13.76 c-2.67,3.09-3.6,7.31-3.36,12.3H2.03c-0.51-0.24-0.91-0.57-1.21-0.98c-1.05-1.43-0.82-5.74-0.74-8.23 C0.09,27.55-0.12,27.28,0.46,27.28L0.46,27.28z M21.86,23.97c5.39,0,9.76,4.37,9.76,9.76c0,5.39-4.37,9.76-9.76,9.76 c-5.39,0-9.76-4.37-9.76-9.76C12.1,28.34,16.47,23.97,21.86,23.97L21.86,23.97z"></path> </g> </g></svg>
                <p>Hatchback</p>
              </div>
              <div className="coupe bg-white opacity-35 flex items-center rounded-full gap-x-4 px-4">
                <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  width="40px" height="40px" viewBox="0 0 99.382 99.382" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M17.001,49.693c-4.12,0-7.46,3.338-7.46,7.459c0,0.319,0.026,0.631,0.066,0.938c0.462,3.677,3.593,6.521,7.394,6.521 c3.906,0,7.105-3.002,7.429-6.823c0.019-0.211,0.032-0.422,0.032-0.638C24.463,53.031,21.123,49.693,17.001,49.693z M13.264,54.342l1.522,1.521c-0.119,0.203-0.211,0.423-0.271,0.656H12.37C12.483,55.706,12.794,54.967,13.264,54.342z M12.364,57.812h2.16c0.062,0.229,0.15,0.447,0.27,0.646l-1.524,1.524C12.798,59.361,12.479,58.62,12.364,57.812z M16.356,61.787 c-0.809-0.111-1.543-0.429-2.164-0.896l1.517-1.518c0.199,0.116,0.418,0.201,0.647,0.262V61.787z M16.356,54.672 c-0.235,0.062-0.455,0.153-0.66,0.274l-1.521-1.521c0.625-0.475,1.366-0.788,2.181-0.901V54.672z M17.647,52.524 c0.813,0.113,1.555,0.428,2.18,0.902l-1.52,1.52c-0.205-0.121-0.426-0.214-0.66-0.274V52.524z M17.647,61.786v-2.151 c0.229-0.061,0.447-0.146,0.646-0.264l1.519,1.52C19.191,61.357,18.456,61.675,17.647,61.786z M20.738,59.988l-1.53-1.531 c0.118-0.199,0.217-0.414,0.278-0.646h2.144C21.516,58.62,21.21,59.367,20.738,59.988z M19.487,56.52 c-0.061-0.233-0.152-0.453-0.271-0.656l1.522-1.521c0.471,0.625,0.782,1.364,0.894,2.179L19.487,56.52L19.487,56.52z"></path> <path d="M78.611,49.758c-4.103,0-7.428,3.324-7.428,7.428c0,0.317,0.025,0.627,0.064,0.934c0.46,3.66,3.578,6.494,7.363,6.494 c3.889,0,7.074-2.989,7.396-6.794c0.019-0.21,0.032-0.42,0.032-0.634C86.04,53.082,82.715,49.758,78.611,49.758z M74.891,54.387 l1.516,1.516c-0.118,0.202-0.21,0.421-0.27,0.653h-2.136C74.112,55.744,74.422,55.009,74.891,54.387z M73.994,57.842h2.15 c0.062,0.229,0.15,0.444,0.269,0.644l-1.519,1.52C74.427,59.386,74.108,58.646,73.994,57.842z M77.969,61.801 c-0.805-0.112-1.535-0.429-2.154-0.896l1.51-1.51c0.198,0.115,0.417,0.201,0.645,0.26V61.801z M77.969,54.715 c-0.233,0.061-0.453,0.152-0.656,0.272l-1.514-1.514c0.622-0.471,1.36-0.784,2.17-0.897V54.715z M79.255,52.576 c0.812,0.113,1.549,0.428,2.17,0.898l-1.513,1.513c-0.204-0.12-0.423-0.213-0.657-0.272V52.576z M79.255,61.8v-2.145 c0.229-0.059,0.446-0.146,0.645-0.262l1.511,1.512C80.792,61.371,80.061,61.687,79.255,61.8z M82.332,60.009l-1.523-1.524 c0.117-0.199,0.216-0.412,0.276-0.643h2.134C83.106,58.646,82.802,59.389,82.332,60.009z M81.087,56.555 c-0.06-0.232-0.15-0.451-0.27-0.653l1.516-1.516c0.469,0.622,0.778,1.357,0.889,2.169H81.087z"></path> <path d="M99.352,52.001c-0.026-0.983-0.331-1.941-0.882-2.759l-0.402-0.6l-1.757-4.635c-0.331-0.875-1.139-1.484-2.07-1.562 c-1.728-0.146-4.663-0.368-7.465-0.471c-9.794-5.201-27.904-10.43-43.262-4.731c-3.151,1.169-12.154,5.744-12.154,5.744 s-14.62-0.37-25.047,3.349c-4.108,1.465-6.699,5.543-6.266,9.884c0.087,0.869,0.215,1.642,0.341,2.266 c0.199,0.987,1.014,1.731,2.015,1.842l6.487,0.711c-0.408-0.852-0.695-1.773-0.818-2.755c-0.052-0.401-0.078-0.772-0.078-1.132 c0-4.967,4.041-9.008,9.008-9.008c4.968,0,9.01,4.042,9.01,9.008c0,0.26-0.017,0.514-0.038,0.768 c-0.095,1.115-0.399,2.172-0.868,3.135h45.045l0.365-0.021c-0.4-0.842-0.683-1.753-0.804-2.72 c-0.052-0.403-0.077-0.773-0.077-1.127c0-4.95,4.026-8.978,8.977-8.978s8.978,4.026,8.978,8.978c0,0.259-0.017,0.511-0.038,0.764 c-0.062,0.734-0.223,1.438-0.453,2.11L88.112,60l6.979-0.923c1.214-0.161,2.285-0.876,2.898-1.936l0.695-1.199 c0.479-0.83,0.721-1.777,0.695-2.735L99.352,52.001z M74.63,43.068H40.469c0,0,0.203-0.809-0.69-1.786 c0,0,8.733-5.633,22.22-4.226c3.711,0.388,8.246,0.651,14.42,3.86L74.63,43.068z"></path> </g> </g> </g></svg>
                <p>Coupe</p>
              </div>
              <div className="hybrid bg-white opacity-35 flex items-center rounded-full gap-x-4 px-4">
                <svg fill="#000000" height="30px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 297 297"  transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M253.067,23.647H131.895c-23.104,0-42.086,17.934-43.794,40.611H74.069C33.228,64.259,0,97.494,0,138.348v60.912 c0,7.278,5.899,13.177,13.176,13.177h14.377c-0.312,2.336-0.488,4.711-0.488,7.129c0,29.658,24.122,53.787,53.773,53.787 s53.773-24.129,53.773-53.787c0-2.418-0.175-4.793-0.486-7.129h35.517c-0.311,2.336-0.486,4.711-0.486,7.129 c0,29.658,24.122,53.787,53.773,53.787c29.649,0,53.773-24.129,53.773-53.787c0-4.523-0.568-8.918-1.626-13.119 C288.228,198.719,297,184.365,297,168.497V67.589C297,43.36,277.292,23.647,253.067,23.647z M26.354,186.083v-47.735 c0-26.322,21.406-47.737,47.716-47.737h13.892v75.656c-2.334-0.31-4.708-0.486-7.123-0.486c-17.003,0-32.176,7.943-42.036,20.303 H26.354z M80.838,246.999c-15.12,0-27.421-12.308-27.421-27.434c0-15.127,12.301-27.432,27.421-27.432 c15.119,0,27.421,12.305,27.421,27.432C108.259,234.691,95.957,246.999,80.838,246.999z M222.929,246.999 c-15.12,0-27.422-12.308-27.422-27.434c0-15.127,12.302-27.432,27.422-27.432s27.42,12.305,27.42,27.432 C250.349,234.691,238.049,246.999,222.929,246.999z M222.929,165.78c-17.003,0-32.178,7.943-42.038,20.303h-48.996 c-9.694,0-17.58-7.889-17.58-17.586V67.589c0-9.699,7.886-17.588,17.58-17.588h121.173c9.693,0,17.579,7.889,17.579,17.588v100.908 c0,6.07-3.214,11.575-8.093,14.754C252.716,172.52,238.596,165.78,222.929,165.78z"></path> <path d="M211.547,98.969h-18.48l1.951-37.479c-7.785-4.172-17.477-1.248-21.655,6.534l-21.121,39.378 c-2.657,4.958-2.514,10.948,0.374,15.78c2.889,4.825,8.098,7.781,13.723,7.781h15.67l-3.293,34.316 c2.698,1.762,5.728,2.602,8.728,2.602c5.221,0,10.338-2.556,13.406-7.255l24.089-36.914c3.209-4.918,3.471-11.199,0.674-16.365 C222.815,102.186,217.42,98.969,211.547,98.969z"></path> </g> </g></svg>
                <p>Hybrid</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F9FBFC] rounded-2xl relative -translate-y-5 left-1/2 -translate-x-1/2 w-full">
        <div className="w-4/5 mx-auto">
          <div className="explore-brands text-[#050B20] ">
            <div className="flex justify-between py-10">
              <h2 className="text-2xl font-semibold">Explore Our Premium Brands</h2>
              <span className="all-brands-link flex gap-x-2">
                <p className="text-sm">Show all brands</p>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </span>
            </div>
            <div className="brands flex justify-between py-10">
              <div className="audi px-4 rounded-xl bg-white border w-fit">
                <img src="src/assets/audi.jpg" alt="" />
                <p className="text-center">Audi</p>
              </div>
              <div className="audi px-4 rounded-xl bg-white border w-fit">
                <img src="src/assets/BMW.jpg" alt="" />
                <p className="text-center">BMW</p>
              </div>
              <div className="audi px-4 rounded-xl bg-white border w-fit">
                <img src="src/assets/Ford.jpg" alt="" />
                <p className="text-center">Ford</p>
              </div>
              <div className="audi px-4 rounded-xl bg-white border w-fit">
                <img src="src/assets/Benz.jpg" alt="" />
                <p className="text-center">Mercedes-Benz</p>
              </div>
              <div className="audi px-4 rounded-xl bg-white border w-fit">
                <img src="src/assets/Peugeot.jpg" alt="" />
                <p className="text-center">Peugeot</p>
              </div>
              <div className="audi px-4 py-1 rounded-xl bg-white border w-fit">
                <img src="src/assets/Volkswagen.jpg" alt="" />
                <p className="text-center">Volkswagen</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="explore-all-cars mx-auto w-4/5 flex justify-between items-center py-5">
          <h2 className="text-2xl font-semibold">Explore All Cars</h2>
          <span className="all-brands-link flex gap-x-2">
                <p className="text-sm">View All</p>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </span>
        </div>
        <div className="car-tabs border-b mb-10 flex w-4/5 mx-auto gap-x-3">
          <div className="border-b-2 border-blue-600">In Stock</div>
          <div>New Cars</div>
          <div>Used Cars</div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home
