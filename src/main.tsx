import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { Toaster } from "react-hot-toast";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/queryClient";

const app = createRoot(document.getElementById("root")!);

app.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Toaster />
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
