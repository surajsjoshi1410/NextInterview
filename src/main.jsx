import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import "./index.css";
import App from "./App.jsx";

const clerkFrontendApi =
"pk_test_bW9kZXN0LW11ZGZpc2gtMTguY2xlcmsuYWNjb3VudHMuZGV2JA"//rajat sysy
  // "pk_test_bWVycnktc2tpbmstMjQuY2xlcmsuYWNjb3VudHMuZGV2JA";//G@G

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerkFrontendApi}>
      <App />
    </ClerkProvider>
  </StrictMode>
);
