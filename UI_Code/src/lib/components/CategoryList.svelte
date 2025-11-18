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
            category: f.category === label ? "" : label
        }));
    }
</script>

<style>
/* WRAPPER — modern frosted glass */
:global(body) {
    font-family: 'Inter', sans-serif;
}


.wrapper {
    width: 240px;
    padding: 1.2rem;
    background: rgba(250, 250, 255, 0.5);
    border-right: 1px solid rgba(200, 200, 200, 0.35);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);

    display: flex;
    flex-direction: column;
    gap: 0.7rem;
}

/* CATEGORY CARD — sleek, neumorphic-like */
.card {
    display: flex;
    align-items: center;
    gap: 0.65rem;

    padding: 0.7rem 0.9rem;

    background: rgba(255, 255, 255, 0.7);
    border-radius: 14px;
    border: 1px solid rgba(220, 220, 230, 0.6);

    cursor: pointer;
    transition: all 0.22s ease;
    font-size: 0.92rem;

    /* slight neumorphic shadow */
    box-shadow:
        0 2px 4px rgba(0,0,0,0.05),
        0 1px 0 rgba(255,255,255,0.7) inset;
}

.card:hover {
    transform: translateX(4px);
    background: rgba(255, 255, 255, 0.9);
    box-shadow:
        0 4px 12px rgba(0,0,0,0.08),
        0 0 0 2px rgba(124, 58, 237, 0.1); /* subtle purple glow */
}

/* ACTIVE OPTION */
.card.active {
    background: rgba(255, 255, 255, 0.95);
    border-color: rgba(124, 58, 237, 0.45); /* purple accent */
    box-shadow:
        0 6px 16px rgba(0,0,0,0.09),
        0 0 0 2px rgba(124, 58, 237, 0.25);
    transform: translateX(6px);
}

/* icon styling */
.icon {
    font-size: 1.35rem;
    opacity: 0.9;
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
