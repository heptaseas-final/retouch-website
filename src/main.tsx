import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

/* Self-hosted through Fontsource rather than hotlinked, so no request leaves
   for a third party and the files are versioned with the build. Latin subsets
   only, and only the weights the site actually sets. All three faces are
   OFL-1.1, so commercial use is fine. Fontsource emits font-display: swap. */
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/inter/latin-700.css";
import "@fontsource/instrument-serif/latin-400-italic.css";
import "@fontsource/pinyon-script/latin-400.css";

import App from "./App";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
