"use strict";

window.addEventListener("DOMContentLoaded", () => {
    const mapElement = document.getElementById("map");
    if (!mapElement || typeof L === "undefined") return;

    const malvern = [-29.8801, 30.9188];
    const map = L.map("map", { scrollWheelZoom: false }).setView(malvern, 14);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    L.marker(malvern)
        .addTo(map)
        .bindPopup("<strong>Meliora Media service area</strong><br>Malvern, Durban")
        .openPopup();
});
