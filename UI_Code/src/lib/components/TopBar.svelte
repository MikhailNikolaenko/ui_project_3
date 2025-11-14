<script>
    import cities from "$lib/data/us_cities.json";
    import { filters } from "$lib/stores/listings";

    // Extract unique states
    const states = [...new Set(cities.map(c => c.state_id))].sort();

    let selectedState = "";
    let cityList = [];

    function onSelectState(e) {
        selectedState = e.target.value;

        // Update the list of cities for this state
        cityList = cities
            .filter(c => c.state_id === selectedState)
            .map(c => c.city)
            .sort();

        // Clear city filter if state changes
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
</script>

<style>
.topbar {
    position: sticky;
    top: 0;
    background: white;
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
    font-size: 0.9rem;
}
</style>

<div class="topbar">

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

</div>
