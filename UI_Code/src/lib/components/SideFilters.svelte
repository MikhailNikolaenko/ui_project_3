<script>
    import { filters } from "$lib/stores/listings";
    export let open = true;
</script>

<style>
.panel {
    width: 250px;
    background: #fafafa;
    border-right: 1px solid #ddd;
    padding: 1rem;
    transition: transform 0.25s ease;
}
.hidden {
    transform: translateX(-260px);
}
</style>

<div class="panel {open ? '' : 'hidden'}">
    <h3>Filters</h3>

    <label>Min Price</label>
    <input type="number" on:input="{e => filters.update(f => ({ ...f, minPrice: +e.target.value }))}">

    <label>Max Price</label>
    <input type="number" on:input="{e => filters.update(f => ({ ...f, maxPrice: +e.target.value }))}">
</div>
