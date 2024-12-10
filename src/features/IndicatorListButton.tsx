import "../shared/assets/styles/WeatherWidget.css";

function IndicatorListButton() {
    return (
        <>
            <div className="widgetConteiner__indicatorList">
                <button>
                    <svg
                        width="9"
                        height="8"
                        viewBox="0 0 9 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="4.5"
                            cy="4"
                            r="4"
                            fill="white"
                            fill-opacity="0.3"
                        />
                    </svg>
                </button>
                <button className="active">
                    <svg
                        width="9"
                        height="8"
                        viewBox="0 0 9 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="4.5"
                            cy="4"
                            r="4"
                            fill="white"
                            fill-opacity="0.3"
                        />
                    </svg>
                </button>
                <button>
                    <svg
                        width="9"
                        height="8"
                        viewBox="0 0 9 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="4.5"
                            cy="4"
                            r="4"
                            fill="white"
                            fill-opacity="0.3"
                        />
                    </svg>
                </button>
            </div>
        </>
    );
}

export default IndicatorListButton;
