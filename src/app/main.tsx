import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../shared/assets/styles/index.css";
import CarouselReact from "../widgets/mainWeatherCity";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <CarouselReact />
    </StrictMode>
);
