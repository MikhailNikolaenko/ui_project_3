<script>
    import cities from "$lib/data/us_cities.json";
    import { filters } from "$lib/stores/listings";
    import { sortKey } from "$lib/stores/listings";
    import { onMount } from "svelte";

    // Extract unique states
    const states = [...new Set(cities.map(c => c.state_id))].sort();

    let selectedState = "";
    let cityList = [];

    // ----- SCROLL HIDE LOGIC -----
    let hidden = false;
    let lastY = 0;

    onMount(() => {
        function handleScroll() {
            const y = window.scrollY;

            // Always show at top
            if (y < 20) {
                hidden = false;
                lastY = y;
                return;
            }

            // scrolling down → hide
            if (y > lastY + 10) hidden = true;

            // scrolling up → show
            if (y < lastY - 10) hidden = false;

            lastY = y;
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    function onSelectState(e) {
        selectedState = e.target.value;

        cityList = cities
            .filter(c => c.state_id === selectedState)
            .map(c => c.city)
            .sort();

        filters.update(f => ({
            ...f,
            location: ""
        }));
    }

    function onSelectCity(e) {
        const city = e.target.value;

        filters.update(f => ({
            ...f,
            location: city
        }));
    }

    function onSearchInput(e) {
        filters.update(f => ({ ...f, search: e.target.value }));
    }

    function onSortChange(e) {
        sortKey.set(e.target.value);
    }
</script>

<style>
/* NEW: wrapper that keeps header height in layout */
.topbar-wrapper {
    height: 64px; /* your topbar is ~64px tall */
    position: sticky;
    top: 0;
    z-index: 200;
    background: white; /* avoids grid showing through */
}

/* Your topbar now moves INSIDE the wrapper */
.topbar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    background: white;
    padding: 1rem;
    border-bottom: 1px solid #ddd;
    display: flex;
    gap: 1rem;
    align-items: center;

    transition: transform 0.25s ease;
    will-change: transform;
}

/* slide up */
.topbar.hidden {
    transform: translateY(-100%);
}

.topbar-wrapper.hidden-bg {
    background: transparent !important;
}


.select {
    padding: 0.4rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 0.9rem;
}
</style>

<div class="topbar-wrapper {hidden ? 'hidden-bg' : ''}">
    <div class="topbar {hidden ? 'hidden' : ''}">


        <!-- STATE SELECT -->
        <select class="select" on:change={onSelectState}>
            <option value="">Select State</option>
            {#each states as st}
                <option value={st}>{st}</option>
            {/each}
        </select>

        <!-- CITY SELECT -->
        <select class="select" on:change={onSelectCity} disabled={!selectedState}>
            <option value="">Select City</option>
            {#each cityList as city}
                <option value={city}>{city}</option>
            {/each}
        </select>

        <!-- Search bar -->
        <input
            type="text"
            class="select"
            placeholder="Search listings…"
            on:input={onSearchInput}
        />

        <!-- Sort select -->
        <select class="select" on:change={onSortChange}>
            <option value="relevance">Sort</option>
            <option value="priceAsc">Price: Low → High</option>
            <option value="priceDesc">Price: High → Low</option>
            <option value="yearDesc">Newest</option>
            <option value="yearAsc">Oldest</option>
            <option value="titleAsc">Title A→Z</option>
        </select>

    </div>
</div>
