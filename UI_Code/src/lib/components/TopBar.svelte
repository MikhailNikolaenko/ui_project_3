<script>
    import { filters } from "$lib/stores/listings";
    import { onMount } from "svelte";

    let collapsed = false;

    // collapse when user scrolls down
    onMount(() => {
        let lastY = 0;

        window.addEventListener("scroll", () => {
            const current = window.scrollY;
            collapsed = current > lastY && current > 60;
            lastY = current;
        });
    });

    function updateSearch(e) {
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
    transition: all 0.25s ease;
}

.collapsed {
    padding: 0.4rem 1rem;
    opacity: 0.9;
}
</style>

<div class="topbar {collapsed ? 'collapsed' : ''}">
    <div class="flex items-center gap-4">
        <input placeholder="Location…" on:input="{e => filters.update(f => ({ ...f, location: e.target.value }))}">
        
        <select on:change="{e => filters.update(f => ({ ...f, category: e.target.value }))}">
            <option value="">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Cars">Cars</option>
        </select>

        <input placeholder="Search…" on:input="{updateSearch}" />
    </div>
</div>
