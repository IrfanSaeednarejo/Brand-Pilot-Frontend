import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./router.jsx";
import { AuthContextProvider }  from './context/AuthContext.jsx'

import "./index.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
       <AppRouter />
    </AuthContextProvider>
   
  </StrictMode>
);
