import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="mb-64">
      <nav className="bg-slate-100 py-5 ">
        <a className="link">Home</a>
        <a className="link">About</a>
        <a className="link">Account</a>
        <a className="link">Products </a>
      </nav>

      <main className="parent">
        {/* here cards go */}

        <div className="card">
          <img src="https://picsum.photos/200/200"></img>
          <h1 className="p-2 text-2xl text-gray-700">Product Name</h1>

          <div className="pl-2 text-lg text-emerald-500">100 $</div>
          <button className="rounded bg-green-300 px-4 py-2 m-2">
            Buy Now
          </button>
        </div>

        <div className="card">
          <img src="https://picsum.photos/200/200"></img>
          <h1 className="p-2 text-2xl text-gray-700">Product Name</h1>

          <div className="pl-2 text-lg text-emerald-500">100 $</div>
          <button className="rounded bg-green-300 px-4 py-2 m-2">
            Buy Now
          </button>
        </div>

        <div className="card">
          <img src="https://picsum.photos/200/200"></img>
          <h1 className="p-2 text-2xl text-gray-700">Product Name</h1>

          <div className="pl-2 text-lg text-emerald-500">100 $</div>
          <button className="rounded bg-green-300 px-4 py-2 m-2">
            Buy Now
          </button>
        </div>

        <div className="card">
          <img src="https://picsum.photos/200/200"></img>
          <h1 className="p-2 text-2xl text-gray-700">Product Name</h1>

          <div className="pl-2 text-lg text-emerald-500">100 $</div>
          <button className="rounded bg-green-300 px-4 py-2 m-2">
            Buy Now
          </button>
        </div>

        <div className="card">
          <img src="https://picsum.photos/200/200"></img>
          <h1 className="p-2 text-2xl text-gray-700">Product Name</h1>

          <div className="pl-2 text-lg text-emerald-500">100 $</div>
          <button className="rounded bg-green-300 px-4 py-2 m-2">
            Buy Now
          </button>
        </div>
      </main>

      <hr></hr>
      <h1 className="text-3xl font-bold p-2 text-blue-400">
        Using Another Font "Lato"
      </h1>
      <p className="lato-font border p-3 text-xl w-[200px] ml-10 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        aspernatur officia molestiae harum numquam! Dolores quam veniam
        blanditiis modi voluptatibus. Neque, suscipit. Nobis nesciunt velit,
        modi unde voluptates voluptatum dolor!
      </p>
    </div>
  );
}

export default App;
