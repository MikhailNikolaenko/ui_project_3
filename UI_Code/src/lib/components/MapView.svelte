<script>
    import { onMount } from "svelte";
    import L from "leaflet";

    let mapDiv;

    onMount(() => {
        const map = L.map(mapDiv).setView([39.1031, -84.5120], 11); // Default Cincinnati

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution: "© OpenStreetMap"
        }).addTo(map);

        // Add marker for selected city
        let marker = null;

        function updateMarker(lat, lng) {
            if (marker) marker.remove();
            marker = L.marker([lat, lng]).addTo(map);
        }

        // EXAMPLE default marker
        updateMarker(39.1031, -84.5120);
    });
</script>

<style>
.map-container {
    width: 100%;
    height: 280px; /* adjust as needed */
    border-radius: 12px;
    overflow: hidden;
}
</style>

<div class="map-container" bind:this={mapDiv}></div>
