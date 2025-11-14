<script>
    import TopBar from "$lib/components/TopBar.svelte";
    import CategoryList from "$lib/components/CategoryList.svelte";
    import ListingGrid from "$lib/components/ListingGrid.svelte";
    import SideFiltersRight from "$lib/components/SideFiltersRight.svelte";

    let filtersOpen = false;
</script>

<style>
.page {
    display: grid;
    grid-template-columns: auto 1fr;
}

.filterButton {
    position: fixed;
    top: 75px;
    right: 20px;
    z-index: 100; 
    background: black;
    color: white;
    border-radius: 8px;
    padding: 0.4rem 0.8rem;
    transition: all 0.25s ease;
}

.shifted {
    right: 330px;      /* moves left when panel is open */
    opacity: 0.85;     /* slight fade for modern feel */
}

</style>

<TopBar />

<!-- Filters button (top right) -->
<button 
    class="filterButton {filtersOpen ? 'shifted' : ''}" 
    on:click={() => (filtersOpen = !filtersOpen)}
>
    {filtersOpen ? "Close" : "Filters"}
</button>


<SideFiltersRight open={filtersOpen} />

<div class="page">
    <CategoryList />
    <ListingGrid />
</div>
