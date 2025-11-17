<script>
    import cities from "$lib/data/us_cities.json";
    import { filters } from "$lib/stores/listings";
    import { sortKey } from "$lib/stores/listings";
    import { onMount } from "svelte";
    import { mapOpen } from "$lib/stores/mapStore";

    let mapBtn;

    $: if (mapBtn) mapBtn.blur();

    // Unique states
    const states = [...new Set(cities.map(c => c.state_id))].sort();

    let selectedState = "";
    let cityList = [];

    let hidden = false;
    let lastY = 0;

    onMount(() => {
        function handleScroll() {
            const y = window.scrollY;
            if (y < 20) {
                hidden = false;
                lastY = y;
                return;
            }
            if (y > lastY + 10) hidden = true;
            if (y < lastY - 10) hidden = false;
            lastY = y;
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    function onSelectState(e) {
        selectedState = e.target.value;
        cityList = cities.filter(c => c.state_id === selectedState).map(c => c.city).sort();
        filters.update(f => ({ ...f, location: "" }));
    }

    function onSelectCity(e) {
        filters.update(f => ({ ...f, location: e.target.value }));
    }

    function onSearchInput(e) {
        filters.update(f => ({ ...f, search: e.target.value }));
    }
</script>

<style>
.topbar-wrapper {
    height: 64px;
    position: sticky;
    top: 0;
    z-index: 200;
    background: white;
    transition: transform 0.25s ease;
}

.topbar-wrapper.hidden {
    transform: translateY(-100%);
}


.topbar {
    position: absolute;
    padding: 1rem;
    border-bottom: 1px solid #ddd;
    display: flex;
    gap: 1rem;
    align-items: center;
}

.select {
    padding: 0.4rem;
    border-radius: 6px;
    border: 1px solid #ccc;
}

/* Map filter button should NOT get stuck */
button.select:focus,
button.select:active {
    background: white !important;
    color: inherit !important;
    outline: none !important;
    box-shadow: none !important;
}

.brand {
    font-size: 1.3rem;
    font-weight: 600;
    color: #8f009c;
}
.sup {
    font-size: 0.75rem;
    vertical-align: super;
}
</style>

<div class="topbar-wrapper {hidden ? 'hidden' : ''}">
    <div class="topbar">

        <div class="brand">Craigslist<span class="sup">+</span></div>

        <!-- State -->
        <select class="select" on:change={onSelectState}>
            <option value="">Select State</option>
            {#each states as st}
                <option value={st}>{st}</option>
            {/each}
        </select>

        <!-- City -->
        <select class="select" on:change={onSelectCity} disabled={!selectedState}>
            <option value="">Select City</option>
            {#each cityList as city}
                <option value={city}>{city}</option>
            {/each}
        </select>

        <!-- Map Filter -->
        <button 
            class="select"
            bind:this={mapBtn}
            on:click={() => mapOpen.set(true)}
        >
            Map Filter 🗺️
        </button>

        <!-- Search -->
        <input 
            type="text"
            class="select"
            placeholder="Search listings…"
            on:input={onSearchInput}
        />
    </div>
</div>
