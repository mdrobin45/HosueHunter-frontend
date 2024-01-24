import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import AuthContextProvider from "./Context/AuthContextProvider.jsx";
import router from "./Router/Router.jsx";
import "./index.css";

// Create a client
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <QueryClientProvider client={queryClient}>
         <AuthContextProvider>
            <RouterProvider router={router} />
            <Toaster />
         </AuthContextProvider>
      </QueryClientProvider>
   </React.StrictMode>
);
