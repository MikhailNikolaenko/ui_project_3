<script>
    import { filters } from "$lib/stores/listings";
    export let open = false;
</script>

<style>
.panel {
    width: 300px;
    background: #ffffff;
    border-left: 1px solid #ddd;
    padding: 1.2rem;
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    overflow-y: auto;
    transition: transform 0.25s ease;
    z-index: 50;
}

/* hidden slide animation */
.hidden {
    transform: translateX(320px);
}

/* Modern form styling */
.field {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}

label {
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 0.25rem;
    color: #333;
}

input {
    padding: 0.45rem 0.6rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 0.9rem;
}

input:focus {
    outline: none;
    border-color: #888;
}
</style>

<div class="panel {open ? '' : 'hidden'}">
    <h2>Filters</h2>

    <div class="field">
        <label>Min Price</label>
        <input type="number"
            on:input="{e => filters.update(f => ({ ...f, minPrice: +e.target.value }))}">
    </div>

    <div class="field">
        <label>Max Price</label>
        <input type="number"
            on:input="{e => filters.update(f => ({ ...f, maxPrice: +e.target.value }))}">
    </div>

    <div class="field">
        <label>Min Year</label>
        <input type="number"
            on:input="{e => filters.update(f => ({ ...f, yearMin: +e.target.value }))}">
    </div>

    <div class="field">
        <label>Max Year</label>
        <input type="number"
            on:input="{e => filters.update(f => ({ ...f, yearMax: +e.target.value }))}">
    </div>

</div>
