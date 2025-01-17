import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import "./index.css";
import App from "./App.jsx";

const clerkFrontendApi =
  "pk_test_bWVycnktc2tpbmstMjQuY2xlcmsuYWNjb3VudHMuZGV2JA";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <ClerkProvider publishableKey={clerkFrontendApi}>
      <App />
    </ClerkProvider>
  // </StrictMode>
);
