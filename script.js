const weatherData = {
  phnom_penh: {
    region: "Phnom Penh",
    temperature: "33°C",
    humidity: "72%",
    conditions: "Hot with isolated rain",
    risk: "Medium",
    summaryState: "Watchlist",
    summaryCopy: "Review timing, hydration, and route flexibility before dispatching field teams.",
    readiness: "Watch operations",
    riskPercent: 58,
    riskLabel: "Medium risk profile",
    guidance: [
      { title: "Reorder outdoor activity", copy: "Push the highest-exposure tasks outside the hottest midday window." },
      { title: "Field team guidance", copy: "Use hydration reminders and more frequent shade breaks." },
      { title: "Travel advisory", copy: "Keep short route alternatives ready in case rain cells intensify." },
      { title: "Schedule impact", copy: "Move lower-priority site work later in the day." }
    ],
    forecast: [
      { title: "Morning", copy: "Warm and humid. Lower disruption risk for site arrivals.", tag: "Best start window" },
      { title: "Midday", copy: "High heat load. Exposure rises sharply for outdoor teams.", tag: "Heat watch" },
      { title: "Afternoon", copy: "Isolated rain bursts likely. Expect slower movement in traffic.", tag: "Rain watch" },
      { title: "Evening", copy: "Cooling begins. Conditions improve for light outdoor activity.", tag: "Improving" }
    ],
    useCases: [
      { title: "Field operations", copy: "Reduce direct exposure during high-heat blocks." },
      { title: "Travel coordination", copy: "Adjust trip timing when showers affect roads." },
      { title: "Site readiness", copy: "Protect materials and temporary setups before rain arrives." },
      { title: "Manager visibility", copy: "Give supervisors a fast readiness snapshot." }
    ],
    actions: [
      "Shift physically demanding outdoor work away from the midday heat window.",
      "Issue hydration and rest reminders to mobile field teams.",
      "Prepare alternate short travel routes for rain-sensitive trips."
    ]
  },
  singapore: {
    region: "Singapore",
    temperature: "31°C",
    humidity: "79%",
    conditions: "Humid with scattered showers",
    risk: "Medium",
    summaryState: "Manage closely",
    summaryCopy: "Localized showers may affect delivery windows and outdoor scheduling.",
    readiness: "Monitor rain cells",
    riskPercent: 62,
    riskLabel: "Elevated shower disruption profile",
    guidance: [
      { title: "Dispatch timing", copy: "Stagger non-urgent departures around shower bands where possible." },
      { title: "Field team guidance", copy: "Keep light rain gear and protected storage for devices." },
      { title: "Travel advisory", copy: "Allow extra transit time during heavier downpours." },
      { title: "Schedule impact", copy: "Front-load indoor prep tasks before peak wet intervals." }
    ],
    forecast: [
      { title: "Morning", copy: "Warm, humid, manageable operations window.", tag: "Good window" },
      { title: "Midday", copy: "Clouds build. Light delays possible for exposed tasks.", tag: "Monitor" },
      { title: "Afternoon", copy: "Scattered showers increase route uncertainty.", tag: "Shower watch" },
      { title: "Evening", copy: "Mixed improvement with lingering wet patches.", tag: "Caution" }
    ],
    useCases: [
      { title: "Urban mobility", copy: "Coordinate around wet congestion spikes." },
      { title: "Outdoor service", copy: "Protect tools and manage short exposure." },
      { title: "Delivery timing", copy: "Reduce late-window slippage." },
      { title: "Ops oversight", copy: "Keep dispatch and site leads aligned." }
    ],
    actions: [
      "Adjust dispatch windows when local showers intensify.",
      "Keep weather-resistant covers available for field equipment.",
      "Buffer time into customer-facing travel commitments."
    ]
  },
  bangkok: {
    region: "Bangkok",
    temperature: "34°C",
    humidity: "68%",
    conditions: "Hot, cloudy, storm risk late",
    risk: "High",
    summaryState: "Escalate",
    summaryCopy: "Late-day storm development raises disruption and field safety concerns.",
    readiness: "Escalate late-day risk",
    riskPercent: 78,
    riskLabel: "High disruption profile",
    guidance: [
      { title: "Reorder activity", copy: "Complete exposed outdoor work before afternoon storm buildup." },
      { title: "Field team guidance", copy: "Shorten exposure windows and confirm safe shelter access." },
      { title: "Travel advisory", copy: "Expect slower movement and potential route backups later in the day." },
      { title: "Schedule impact", copy: "Hold non-essential outdoor events if the storm line strengthens." }
    ],
    forecast: [
      { title: "Morning", copy: "Best operating window with manageable heat.", tag: "Preferred" },
      { title: "Midday", copy: "Heat stress increases quickly outdoors.", tag: "Heat risk" },
      { title: "Afternoon", copy: "Storm potential rises. Plan for interruptions.", tag: "Storm watch" },
      { title: "Evening", copy: "Localized storm spillover may remain active.", tag: "High caution" }
    ],
    useCases: [
      { title: "Field work", copy: "Protect teams from late-day storm exposure." },
      { title: "Deliveries", copy: "Minimize route risk before heavier weather arrives." },
      { title: "Site coordination", copy: "Secure temporary structures and materials." },
      { title: "Management", copy: "Trigger visible escalation when risk spikes." }
    ],
    actions: [
      "Move exposed work into the morning operating window.",
      "Confirm shelter and stop-work guidance for field teams.",
      "Escalate route monitoring before afternoon storm buildup."
    ]
  },
  jakarta: {
    region: "Jakarta",
    temperature: "30°C",
    humidity: "83%",
    conditions: "Cloudy with persistent rain risk",
    risk: "Medium",
    summaryState: "Plan carefully",
    summaryCopy: "Rain persistence may slow route efficiency and increase site handling complexity.",
    readiness: "Rain-sensitive operations",
    riskPercent: 64,
    riskLabel: "Moisture-heavy operating profile",
    guidance: [
      { title: "Reorder activity", copy: "Shift vulnerable materials handling indoors where practical." },
      { title: "Field team guidance", copy: "Keep drying time, covers, and access safety in mind." },
      { title: "Travel advisory", copy: "Plan extra route duration and watch road waterlogging risk." },
      { title: "Schedule impact", copy: "Avoid compressing travel windows too tightly." }
    ],
    forecast: [
      { title: "Morning", copy: "Cloudy but manageable, with pockets of light rain.", tag: "Fair" },
      { title: "Midday", copy: "Humidity remains high. Operations continue with caution.", tag: "Monitor" },
      { title: "Afternoon", copy: "Persistent rain risk can affect site and mobility reliability.", tag: "Rain focus" },
      { title: "Evening", copy: "Wet conditions linger across travel routes.", tag: "Slow travel" }
    ],
    useCases: [
      { title: "Route planning", copy: "Anticipate wet-traffic slowdown." },
      { title: "Outdoor sites", copy: "Reduce rain damage exposure." },
      { title: "Team safety", copy: "Manage footing and access risks." },
      { title: "Coordination", copy: "Keep schedule drift visible to leaders." }
    ],
    actions: [
      "Build more travel buffer into rain-sensitive schedules.",
      "Protect exposed tools, materials, and site access points.",
      "Monitor local route conditions before dispatching teams."
    ]
  }
};

const locationSelect = document.getElementById("locationSelect");

function makeSmallCard(item, tagText = "") {
  const card = document.createElement("div");
  card.className = "small-card";

  const title = document.createElement("div");
  title.className = "small-card-title";
  title.textContent = item.title;

  const copy = document.createElement("div");
  copy.className = "small-card-copy";
  copy.textContent = item.copy;

  card.appendChild(title);
  card.appendChild(copy);

  if (tagText) {
    const tag = document.createElement("div");
    tag.className = "small-card-tag";
    tag.textContent = tagText;
    card.appendChild(tag);
  }

  return card;
}

function renderGrid(containerId, items, useTag = false) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  items.forEach((item) => {
    container.appendChild(makeSmallCard(item, useTag ? item.tag : ""));
  });
}

function renderActions(actions) {
  const actionsList = document.getElementById("actionsList");
  actionsList.innerHTML = "";
  actions.forEach((action) => {
    const li = document.createElement("li");
    li.textContent = action;
    actionsList.appendChild(li);
  });
}

function renderWeather(key) {
  const data = weatherData[key];

  document.getElementById("activeRegion").textContent = data.region;
  document.getElementById("readinessPosture").textContent = data.readiness;
  document.getElementById("temperatureValue").textContent = data.temperature;
  document.getElementById("humidityValue").textContent = data.humidity;
  document.getElementById("conditionsValue").textContent = data.conditions;
  document.getElementById("riskValue").textContent = data.risk;
  document.getElementById("summaryState").textContent = data.summaryState;
  document.getElementById("summaryCopy").textContent = data.summaryCopy;
  document.getElementById("riskBandFill").style.width = `${data.riskPercent}%`;
  document.getElementById("riskBandLabel").textContent = data.riskLabel;

  renderGrid("guidanceGrid", data.guidance, false);
  renderGrid("forecastGrid", data.forecast, true);
  renderGrid("useCaseGrid", data.useCases, false);
  renderActions(data.actions);
}

locationSelect.addEventListener("change", (event) => {
  renderWeather(event.target.value);
});

renderWeather("phnom_penh");
