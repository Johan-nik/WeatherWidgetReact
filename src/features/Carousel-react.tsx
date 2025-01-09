import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import '../shared/assets/styles/Carousel.css'
import WeatherWidgetClearDay from '../widgets/ui/WeatherWidgetClearDay';
import WeatherWidgetCloudyDay from "../widgets/ui/WeatherWidgetCloudyDay";
import WeatherWidgetSnowDay from "../widgets/ui/WeatherWidgetSnowDay";



export default class extends React.Component {
    render() {
      return (
        <CarouselProvider
          naturalSlideWidth={325}
          naturalSlideHeight={280}
          totalSlides={3}
          infinite={true}
        >
          <Slider>
            <Slide index={0}><WeatherWidgetClearDay /></Slide>
            <Slide index={1}><WeatherWidgetCloudyDay /></Slide>
            <Slide index={2}><WeatherWidgetSnowDay /></Slide>
          </Slider>
          <ButtonBack className='carouselButtonScroll buttonLeft'>
          <div className="widgetConteiner__buttonScroll">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        width="24"
                        height="24"
                        rx="12"
                        fill="white"
                        fill-opacity="0.4"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.29285 12L13.2677 8.02515L13.9748 8.73225L10.7071 12L13.9748 15.2678L13.2677 15.9749L9.29285 12Z"
                        fill="white"
                    />
                </svg>
            </div>
          </ButtonBack>
          <ButtonNext className='carouselButtonScroll buttonRigth'>
            <div className="widgetConteiner__buttonScroll">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        width="24"
                        height="24"
                        rx="12"
                        fill="white"
                        fill-opacity="0.7"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.9748 12L11 15.9749L10.2928 15.2678L13.5606 12L10.2928 8.73225L11 8.02515L14.9748 12Z"
                        fill="white"
                    />
                </svg>
            </div>
          </ButtonNext>
          <div className='caruselDotConteiner'>
            <Dot className='caruselDot' slide={0} />
            <Dot className='caruselDot' slide={1} />
            <Dot className='caruselDot' slide={2} />
          </div>
        </CarouselProvider>
      );
    }
  }