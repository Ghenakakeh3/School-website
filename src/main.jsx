import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import global_en from "./translations/en/global.json";
import global_ar from "./translations/ar/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import "./index.css";
import { UseServicesProvider } from "./context/Context.jsx";
import { DataProvider } from "./context/Provider.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
i18next.init({
  resources: {
    en: {
      global: global_en,
    },
    ar: {
      global: global_ar,
    },
  },
  lng: "ar", // Default Language
  fallbackLng: "ar", // Standby Language
  interpolation: {
    escapeValue: false,
  },
  // keySeparator: false,
  // nsSeparator: false,
});

const queryClient=new QueryClient()
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <UseServicesProvider>
        <DataProvider>
        <QueryClientProvider client={queryClient}>
        <App />


        </QueryClientProvider>
        </DataProvider>
       
      </UseServicesProvider>
    </I18nextProvider>
  </React.StrictMode>
);
