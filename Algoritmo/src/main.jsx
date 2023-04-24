import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Capa from "./routes/Capa";
import FolhaRosto from "./routes/FolhaRosto";
import Epigrafe from "./routes/Epigrafe";
import Resumo from "./routes/Resumo";
import Sumario from "./routes/Sumario";
import Introducao from "./routes/Introducao";
import Desenvolvimento from "./routes/Desenvolvimento";
import Conclusao from "./routes/Conclusao";
import Bibliografia from "./routes/Bibliografia";


const router = createBrowserRouter(
  createRoutesFromElements(
    // Rota Pai
    <Route path="/" element={<App/>}>      
        {/* Rota Filha */}
        <Route index element={<Capa />} />
        <Route path="folha-rosto" element={<FolhaRosto />} />
        <Route path="epigrafe" element={<Epigrafe />} />
        <Route path="resumo" element={<Resumo />} />
        <Route path="sumario" element={<Sumario />} />
        <Route path="introducao" element={<Introducao />} />
        <Route path="desenvolvimento" element={<Desenvolvimento />} />
        <Route path="conclusao" element={<Conclusao />} />
        <Route path="bibliografia" element={<Bibliografia />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);