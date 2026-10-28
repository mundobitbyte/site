import { createRoot } from "react-dom/client";
import { App } from "./App.js";

const raiz = document.querySelector("#cafe-app");
if (!(raiz instanceof HTMLElement)) throw new Error("Confira a área cafe-app em balcao.php.");
createRoot(raiz).render(<App />);
