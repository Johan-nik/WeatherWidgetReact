import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../shared/assets/styles/index.css";
import CarouselReact from "../widgets/weatherWidget/ui/mainWeatherCity";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <CarouselReact />
    </StrictMode>
);
