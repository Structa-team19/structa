import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CounterView from "@/app/counter/view/counter-view";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CounterView />
  </StrictMode>,
);
