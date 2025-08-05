import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <div className="flex h-[95vh]">
        <ProductsList />
        <Cart />
      </div>
    </div>
  );
}

export default App;
