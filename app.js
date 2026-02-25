// SuryaNet Interactive Dashboard Logic

// Initialize Dashboard Metrics
let sunLevel = 78;
let batteryLevel = 62;
let stationCount = 32;
let isReflectionMode = true;

// Update Dashboard UI
function updateDashboard() {
    const sunLevelEl = document.getElementById('sunLevel');
    const sunMeterEl = document.getElementById('sunMeter');
    const batteryLevelEl = document.getElementById('batteryLevel');
    const batteryMeterEl = document.getElementById('batteryMeter');
    const stationCountEl = document.getElementById('stationCount');

    if (sunLevelEl) sunLevelEl.innerText = sunLevel;
    if (sunMeterEl) sunMeterEl.style.width = sunLevel + '%';
    if (batteryLevelEl) batteryLevelEl.innerText = batteryLevel;
    if (batteryMeterEl) batteryMeterEl.style.width = batteryLevel + '%';
    if (stationCountEl) stationCountEl.innerText = stationCount;
}

// Simulate Real-time Data
function simulateData() {
    // Slight fluctuations
    sunLevel = Math.max(0, Math.min(100, sunLevel + (Math.random() * 4 - 2).toFixed(1) * 1));
    batteryLevel = Math.max(0, Math.min(100, batteryLevel + (Math.random() * 2 - 1).toFixed(1) * 1));

    // Convert to integers for display
    sunLevel = Math.round(sunLevel);
    batteryLevel = Math.round(batteryLevel);

    updateDashboard();
}

// Toggle Mode
window.toggleMode = function () {
    isReflectionMode = !isReflectionMode;
    const modeLabel = document.getElementById('modeLabel');
    if (modeLabel) {
        modeLabel.innerText = isReflectionMode ? 'Reflection Mode' : 'Absorption Mode';
        modeLabel.style.background = isReflectionMode ? 'rgba(77,192,255,0.2)' : 'rgba(255,212,59,0.2)';
        modeLabel.style.color = isReflectionMode ? '#4dc0ff' : '#ffd43b';
    }
};

// Toggle Night Mode
window.toggleNight = function () {
    document.body.classList.toggle('night');
};

// Initialize Map Markers (SVG)
function initMarkers() {
    const markersGroup = document.getElementById('markers');
    if (!markersGroup) return;

    const locations = [
        { x: 350, y: 250, name: 'Himachal Station 1' },
        { x: 450, y: 200, name: 'Arunachal Station 1' },
        { x: 520, y: 150, name: 'Ladakh Station 1' },
        { x: 300, y: 400, name: 'Uttarakhand Station 1' },
        { x: 620, y: 480, name: 'Meghalaya Station 1' },
        { x: 450, y: 720, name: 'Deccan Station 1' },
    ];

    locations.forEach(loc => {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', loc.x);
        circle.setAttribute('cy', loc.y);
        circle.setAttribute('r', '8');
        circle.setAttribute('title', loc.name);
        circle.addEventListener('click', () => {
            alert(`Station: ${loc.name}\nStatus: Operational\nEfficiency: 98%`);
        });
        markersGroup.appendChild(circle);
    });
}

// Start Simulation
document.addEventListener('DOMContentLoaded', () => {
    updateDashboard();
    initMarkers();
    setInterval(simulateData, 2000);
});
