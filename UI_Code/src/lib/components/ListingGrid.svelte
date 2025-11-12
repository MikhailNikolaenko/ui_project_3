<script>
    import { filteredListings } from "$lib/stores/listings";
    import ListingCard from "./ListingCard.svelte";
</script>

<style>
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1rem;
    padding: 1rem;
}
</style>

<div class="grid">
    {#each $filteredListings as item}
        <ListingCard {item} />
    {/each}
</div>
