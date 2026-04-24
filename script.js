const weatherData = {
    "Phnom Penh": {
        temperature: "33°C",
        humidity: "72%",
        conditions: "Hot With Isolated Rain",
        risk: "Medium",
        action: "Plan outdoor activity early and keep hydration and weather interruptions in mind.",
        field: "Use lighter field schedules and prepare rain backup for site work.",
        travel: "Allow extra time for afternoon movement if showers increase.",
        schedule: "Moderate risk of short delays later in the day.",
        forecast: [
            { label: "Morning", temp: "30°C", condition: "Humid" },
            { label: "Midday", temp: "33°C", condition: "Hot" },
            { label: "Afternoon", temp: "32°C", condition: "Rain Risk" },
            { label: "Evening", temp: "29°C", condition: "Cloudy" }
        ]
    },
    "Shanghai": {
        temperature: "24°C",
        humidity: "61%",
        conditions: "Cloudy",
        risk: "Low",
        action: "Maintain normal operations with standard weather monitoring.",
        field: "Outdoor work is generally suitable with light weather awareness.",
        travel: "Routine travel conditions with low disruption risk.",
        schedule: "Low weather impact for the current work window.",
        forecast: [
            { label: "Morning", temp: "21°C", condition: "Cloudy" },
            { label: "Midday", temp: "24°C", condition: "Mild" },
            { label: "Afternoon", temp: "23°C", condition: "Breezy" },
            { label: "Evening", temp: "20°C", condition: "Clear" }
        ]
    },
    "Cape Town": {
        temperature: "18°C",
        humidity: "68%",
        conditions: "Windy",
        risk: "Medium",
        action: "Watch wind exposure for outdoor tasks and adjust equipment planning.",
        field: "Secure lighter materials and avoid weather-sensitive setup without cover.",
        travel: "Monitor road and coastal travel if winds intensify.",
        schedule: "Possible minor execution disruption for exposed outdoor work.",
        forecast: [
            { label: "Morning", temp: "16°C", condition: "Windy" },
            { label: "Midday", temp: "18°C", condition: "Cool" },
            { label: "Afternoon", temp: "17°C", condition: "Wind Gusts" },
            { label: "Evening", temp: "14°C", condition: "Clear" }
        ]
    },
    "Seattle": {
        temperature: "12°C",
        humidity: "84%",
        conditions: "Rain",
        risk: "High",
        action: "Shift weather-sensitive field activity and prioritize indoor or protected work where possible.",
        field: "Use wet-weather planning, protective gear, and backup site sequencing.",
        travel: "Expect slower movement and weather-related schedule pressure.",
        schedule: "Higher likelihood of delays or productivity loss for outdoor tasks.",
        forecast: [
            { label: "Morning", temp: "10°C", condition: "Rain" },
            { label: "Midday", temp: "12°C", condition: "Steady Rain" },
            { label: "Afternoon", temp: "11°C", condition: "Showers" },
            { label: "Evening", temp: "9°C", condition: "Wet And Cool" }
        ]
    }
};

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function renderWeather(city) {
    const data = weatherData[city];

    document.getElementById("temperatureValue").textContent = data.temperature;
    document.getElementById("humidityValue").textContent = data.humidity;
    document.getElementById("conditionValue").textContent = data.conditions;
    document.getElementById("riskValue").textContent = data.risk;

    document.getElementById("actionText").textContent = data.action;
    document.getElementById("fieldText").textContent = data.field;
    document.getElementById("travelText").textContent = data.travel;
    document.getElementById("scheduleText").textContent = data.schedule;

    const forecastGrid = document.getElementById("forecastGrid");
    forecastGrid.innerHTML = data.forecast.map(item => `
        <article class="forecast-card">
            <h3>${item.label}</h3>
            <p><strong>Temperature:</strong> ${item.temp}</p>
            <p><strong>Conditions:</strong> ${item.condition}</p>
            <span class="risk-tag risk-${data.risk}">${data.risk} Risk</span>
        </article>
    `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
    const citySelect = document.getElementById("citySelect");
    renderWeather(citySelect.value);

    citySelect.addEventListener("change", event => {
        renderWeather(event.target.value);
    });
});
