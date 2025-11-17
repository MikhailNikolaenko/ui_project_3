<script context="module">
    // GLOBAL store accessible to all components
    import { writable } from "svelte/store";

    // Must be exported from MODULE script
    export const mapOpen = writable(false);
</script>

<script>
    import TopBar from "$lib/components/TopBar.svelte";
    import CategoryList from "$lib/components/CategoryList.svelte";
    import ListingGrid from "$lib/components/ListingGrid.svelte";
    import SideFiltersRight from "$lib/components/SideFiltersRight.svelte";
    import MapFilterModal from "$lib/components/MapFilterModal.svelte";

    let filtersOpen = false;
</script>

<style>
.page {
    display: grid;
    grid-template-columns: auto 1fr;
}

/* FILTER BUTTON */
.filterButton {
    position: fixed;
    top: 24px;
    right: 20px;
    z-index: 500;

    background: linear-gradient(135deg,
        #7c3aed 0%,
        #3b82f6 100%
    );

    color: white;
    border: none;
    border-radius: 10px;
    padding: 0.55rem 1rem;
    font-size: 0.9rem;
    font-weight: 600;

    box-shadow:
        0 4px 14px rgba(60, 0, 150, 0.25),
        inset 0 0 8px rgba(255,255,255,0.1);

    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease,
        right 0.25s ease,
        opacity 0.25s ease;
}

.filterButton:hover {
    transform: translateY(-2px);
    box-shadow:
        0 6px 20px rgba(60, 0, 150, 0.35),
        inset 0 0 8px rgba(255,255,255,0.15);
}

/* Filters panel open */
.shifted {
    right: 260px;
    opacity: 0.85;
}
</style>

<!-- TOP BAR -->
<TopBar />

<!-- FILTERS BUTTON -->
<button
    class="filterButton {filtersOpen ? 'shifted' : ''}"
    on:click={() => (filtersOpen = !filtersOpen)}
>
    {filtersOpen ? "Close" : "Filters"}
</button>

<!-- SIDE FILTER PANEL -->
<SideFiltersRight {filtersOpen} open={filtersOpen} />

<div class="page">
    <CategoryList />
    <ListingGrid />

    <!-- GLOBAL MAP MODAL (uses global mapOpen) -->
    <MapFilterModal />
</div>
