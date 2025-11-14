<script>
    import { filters } from "$lib/stores/listings";

    const categories = [
        { label: "Electronics", icon: "💻" },
        { label: "Cars", icon: "🚗" },
        { label: "Furniture", icon: "🛋️" },
        { label: "Clothing", icon: "👕" },
        { label: "Housing", icon: "🏠" },
        { label: "Jobs", icon: "💼" }
    ];

    function toggleCategory(label) {
        filters.update(f => ({
            ...f,
            category: f.category === label ? "" : label // toggle on/off
        }));
    }
</script>

<style>
.wrapper {
    width: 240px;
    padding: 1rem;
    border-right: 1px solid #ddd;
    background: #fafafa;
}

.card {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    padding: 0.6rem 0.8rem;
    margin-bottom: 0.6rem;
    border-radius: 10px;
    border: 1px solid #ddd;
    background: white;
    cursor: pointer;
    transition: all 0.2s ease;
}

.card:hover {
    background: #f1f1f1;
    transform: translateX(3px);
}

.card.active {
    background: #e7e7e7;
    border-color: #bbb;
    transform: translateX(4px);
}

.icon {
    font-size: 1.3rem;
}
</style>

<div class="wrapper">
    {#each categories as cat}
        <div
            class="card"
            class:active={$filters.category === cat.label}
            on:click={() => toggleCategory(cat.label)}
        >
            <span class="icon">{cat.icon}</span>
            <span>{cat.label}</span>
        </div>
    {/each}
</div>
