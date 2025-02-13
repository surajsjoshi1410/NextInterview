import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import "./index.css";
import App from "./App.jsx";

const clerkFrontendApi ="pk_test_ZW5kbGVzcy1za2luay03Ni5jbGVyay5hY2NvdW50cy5kZXYk"


createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <ClerkProvider publishableKey={clerkFrontendApi}>
      <App />
    </ClerkProvider>
  // </StrictMode>
);
