import "../shared/assets/styles/WeatherWidget.css";

function ButtonScroll() {
    return (
        <>
            <button className="widgetConteiner__buttonScroll buttonLeft">
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
            </button>
            <button className="widgetConteiner__buttonScroll buttonRigth">
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
            </button>
        </>
    );
}

export default ButtonScroll;
