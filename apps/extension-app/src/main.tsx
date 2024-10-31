import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Note from "./app/note/view";
import "./index.css";
import { Layout } from "./app/layout/view";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout>
      <Note />
    </Layout>
  </StrictMode>,
);
