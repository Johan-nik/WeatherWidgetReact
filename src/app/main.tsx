import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../shared/assets/styles/index.css";
import WeatherWidget from "../widgets/ui/WeatherWidget";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <WeatherWidget />
    </StrictMode>
);
