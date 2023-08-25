import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { formatNumber } from "@packages/utils";

function App() {
  const [count, setCount] = useState(0);

  const url = new URL("./assets/logo.png", import.meta.url);
  useEffect(() => {
    console.log("ur", url);
  }, []);
  return (
    <>
      <div>
        <img src={url.pathname} className="logo" alt="Vite logo" />
      </div>
      <h1>Vite + Reac {formatNumber(1302.555, 1)}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
