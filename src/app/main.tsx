import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../shared/assets/styles/index.css";
import CarouselReact from "../features/Carousel-react";


createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <CarouselReact />
    </StrictMode>
);
