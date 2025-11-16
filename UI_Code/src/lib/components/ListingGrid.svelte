<script>
    import { filteredListings, sortKey } from "$lib/stores/listings";
    import ListingCard from "./ListingCard.svelte";

    /**
     * Compare two items according to sort key.
     * @param {any} a
     * @param {any} b
     * @param {string} key
     * @returns {number}
     */
    function compareItems(a, b, key) {
        if (!key || key === 'relevance') return 0;
        if (key === 'priceAsc') return Number(a.price) - Number(b.price);
        if (key === 'priceDesc') return Number(b.price) - Number(a.price);
        if (key === 'yearAsc') return Number(a.year) - Number(b.year);
        if (key === 'yearDesc') return Number(b.year) - Number(a.year);
        if (key === 'titleAsc') return String(a.title).localeCompare(String(b.title));
        return 0;
    }

    $: sorted = [...$filteredListings].sort((a, b) => compareItems(a, b, $sortKey));

</script>

<style>
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1rem;
    padding: 1rem;
}

.toolbar { display:none; }
</style>

<div class="grid">
    {#each sorted as item (item.id)}
        <ListingCard {item} />
    {/each}
</div>
