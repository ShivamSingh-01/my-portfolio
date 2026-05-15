import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";
import "./styles.css";

function App() {
  return <RouterProvider router={router} />;
}

createRoot(document.getElementById("root")!).render(<App />);
