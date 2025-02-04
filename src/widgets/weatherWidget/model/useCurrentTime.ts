import { useEffect, useState } from "react";

const useCurrentTime = (utcOffset: number) => {
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            try {
                // Получаем текущее UTC-время
                const now = new Date();
                // Преобразуем UTC-время с учётом смещения
                const localHours = (now.getUTCHours() + utcOffset + 24) % 24; // Часы с учётом смещения
                const minutes = now.getUTCMinutes(); // Минуты
                // Форматируем в HH:mm
                const formattedTime = `${localHours.toString().padStart(2, "0")}:${minutes
                    .toString()
                    .padStart(2, "0")}`;
                setCurrentTime(formattedTime);
            } catch (error) {
                console.error("Error updating time:", error);
                setCurrentTime("Invalid time");
            }
        };

        // Обновляем время сразу и каждые 60 секунд
        updateTime();
        const interval = setInterval(updateTime, 60000);

        return () => clearInterval(interval);
    }, [utcOffset]);

    return currentTime;
};

export default useCurrentTime;