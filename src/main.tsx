import { createRoot } from "react-dom/client";
import "./index.css";
import "@fontsource/oswald/400.css";
import App from "./App.tsx";
import { ToastContainer } from "react-toastify";
import { QuestionsContextProvide } from "./contexts/QuestionsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <QuestionsContextProvide>
    <App />
    <ToastContainer />
  </QuestionsContextProvide>
);
