<script>
    import TopBar from "$lib/components/TopBar.svelte";
    import SideFilters from "$lib/components/SideFilters.svelte";
    import ListingGrid from "$lib/components/ListingGrid.svelte";

    let filtersOpen = true;
</script>

<style>
.layout {
    display: grid;
    grid-template-columns: auto 1fr;
}
.toggle {
    position: fixed;
    left: 10px;
    top: 80px;
    z-index: 20;
}
</style>

<TopBar />

<button class="toggle" on:click={() => (filtersOpen = !filtersOpen)}>
    Filters
</button>

<div class="layout">
    <SideFilters open={filtersOpen} />
    <ListingGrid />
</div>

