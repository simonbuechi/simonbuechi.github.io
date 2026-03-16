import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import theme from "./style/theme";
import "./i18n/i18n";
import SplashScreen from "./structure/SplashScreen";
// import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
//import reportWebVitals from './reportWebVitals';
import ThemeProvider from "./utils/ThemeProvider";
import Router from "./utils/Router";
import CssBaseline from "@mui/material/CssBaseline";
//lazy load
const App = lazy(() => import("./App"));

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = createRoot(container);
root.render(
  <Suspense fallback={<SplashScreen />}>
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <App />
      </Router>
    </ThemeProvider>
  </Suspense>
);

// serviceWorkerRegistration.register();
//reportWebVitals(console.log);
