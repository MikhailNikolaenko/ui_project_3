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

.addButton {
    position: fixed;
    bottom: 28px;
    right: 26px;

    z-index: 399;

    width: 52px;
    height: 52px;
    border-radius: 14px;

    background: linear-gradient(135deg,
        #7c3aed 0%,
        #3b82f6 100%
    );

    color: white;
    border: none;

    font-size: 2rem;
    font-weight: 700;
    line-height: 0; /* makes the + centered nicely */

    display: flex;
    justify-content: center;
    align-items: center;

    box-shadow:
        0 6px 20px rgba(60, 0, 150, 0.35),
        inset 0 0 8px rgba(255,255,255,0.15);

    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.addButton:hover {
    transform: translateY(-3px);
    box-shadow:
        0 8px 26px rgba(60, 0, 150, 0.45),
        inset 0 0 8px rgba(255,255,255,0.12);
}

</style>

<div class="grid">
    <button class="addButton">+</button>

    {#each sorted as item (item.id)}
        <ListingCard {item} />
    {/each}
</div>
