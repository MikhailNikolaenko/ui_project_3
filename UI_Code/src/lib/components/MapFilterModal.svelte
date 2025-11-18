<script>
    import { mapOpen } from "$lib/stores/mapStore";
    import { filters } from "$lib/stores/listings";
    import { onMount, tick } from "svelte";

    let open = false;
    mapOpen.subscribe(v => open = v);

    let mapBox;
    let map;
    let marker;
    let circle;
    let L; // leaflet module

    const radiusOptions = [5, 10, 25, 50, 100];
    let selectedRadius = 25;

    /** Close Modal */
    function closeModal() {
        mapOpen.set(false);
    }

    function applyRadius() {
        if (!marker) return;

        const pos = marker.getLatLng();

        filters.update(f => ({
            ...f,
            radiusMiles: selectedRadius,
            locationLat: pos.lat,
            locationLon: pos.lng
        }));

        closeModal();
    }

    /* Update circle */
    function updateCircle() {
        if (!map || !marker || !L) return;

        const pos = marker.getLatLng();

        // Remove old circle
        if (circle) circle.remove();

        // Convert miles to meters
        const meters = selectedRadius * 1609.34;

        circle = L.circle(pos, {
            radius: meters,
            color: "#7c3aed",
            weight: 2,
            fillColor: "#c4b5fd",
            fillOpacity: 0.25
        }).addTo(map);
    }

    function safeUpdateCircle() {
        if (!map || !marker) return;
        updateCircle();
    }

    /* Initialize map on open */
    onMount(async () => {
        await tick();

        mapOpen.subscribe(async (isOpen) => {
            open = isOpen;

            if (!open) return;

            await tick();

            // Import Leaflet only on client
            const leaflet = await import("leaflet");
            L = leaflet.default;

            // Leaflet CSS
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "https://unpkg.com/leaflet/dist/leaflet.css";
            document.head.appendChild(link);

            mapBox.innerHTML = "";
            mapBox.style.height = "260px";

            await tick();

            // Create map
            map = L.map(mapBox).setView([39.5, -98.35], 4);

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
                .addTo(map);

            marker = L.marker([39.5, -98.35], { draggable: true }).addTo(map);

            marker.on("drag", () => {
                if (circle) updateCircle();
            });

            await tick();

            map.invalidateSize();
            updateCircle(); // initial draw
        });
    });

    /* Re-run circle when modal reopens or radius changes */
    $: if (open && map && marker) {
        safeUpdateCircle();
    }
</script>


{#if open}
<div class="overlay" on:click={closeModal}>
    <div class="modal" on:click|stopPropagation>

        <h2>Select Area</h2>

        <div bind:this={mapBox} class="map"></div>

        <div class="radius-options">
            {#each radiusOptions as r}
                <button
                    class:selected={selectedRadius === r}
                    on:click={() => {
                        selectedRadius = r;
                        safeUpdateCircle();   // radius update
                    }}
                >
                    {r} miles
                </button>
            {/each}
        </div>

        <button class="apply" on:click={applyRadius}>
            Apply radius filter
        </button>

    </div>
</div>
{/if}


<style>
/* Blur overlay */
.overlay {
    position: fixed;
    inset: 0;
    background: rgba(15,23,42,0.35);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
}


.modal {
    width: 420px;
    max-width: calc(100% - 2rem);
    background: rgba(255,255,255,0.97);
    padding: 1.4rem 1.6rem;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    z-index: 10000;
}

/* Map container */
.map {
    width: 100%;
    height: 260px;
    border-radius: 12px;
    overflow: hidden;
    background: #ddd;
}

.radius-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    gap: 0.5rem;
}

.radius-options button {
    padding: 0.5rem 0.6rem;
    border-radius: 999px;
    border: 1px solid #d1d5db;
    background: white;
    color: #374151;
    cursor: pointer;
    transition: all 0.15s ease;
    font-size: 0.9rem;
}

.radius-options button:hover {
    border-color: #7c3aed;
    color: #7c3aed;
}

button.selected {
    background: linear-gradient(90deg, #7c3aed, #8b5cf6);
    color: white;
    border-color: transparent;
    box-shadow: 0 4px 12px rgba(124,58,237,0.25);
}

.apply {
    width: 100%;
    margin-top: 0.3rem;
    padding: 0.7rem;
    border-radius: 999px;
    background: linear-gradient(90deg, #7c3aed, #8b5cf6);
    border: none;
    color: white;
    font-weight: 600;
    cursor: pointer;
}
.apply:hover {
    opacity: 0.95;
}
</style>
