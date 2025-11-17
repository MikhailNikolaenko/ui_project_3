<script>
    export let data;
    const { item } = data;
</script>

<svelte:head>
    <title>{item.title} - Listing</title>
</svelte:head>

<main class="detail-page">
    <a class="back-link" href="/">← Back to results</a>

    <div class="detail-layout">
        <div class="image-section">
            {#if item.img}
                <img src={item.img} alt={item.title} />
            {:else}
                <div class="image-placeholder">No Image</div>
            {/if}
        </div>

        <section class="info-section">
            <h1>{item.title}</h1>

            <p class="price">
                ${item.price}
                {#if item.negotiable}
                    <span class="negotiable-tag">Negotiable</span>
                {/if}
            </p>

            <p class="meta">
                {item.location}
                {#if item.year} • {item.year}{/if}
                {#if item.condition} • {item.condition}{/if}
                {#if item.category} • {item.category}{/if}
            </p>

            <h2>Details</h2>
            <ul class="detail-list">
                <li><strong>Condition:</strong> {item.condition || 'Not specified'}</li>
                <li><strong>Category:</strong> {item.category || 'Not specified'}</li>
                <li><strong>Location:</strong> {item.location || 'Not specified'}</li>
                <li><strong>Year:</strong> {item.year || 'Not specified'}</li>
                <li><strong>Negotiable:</strong> {item.negotiable ? 'Yes' : 'No'}</li>
            </ul>
        </section>
    </div>
</main>

<style>
    .detail-page {
        max-width: 960px;
        margin: 1.5rem auto;
        padding: 0 1rem 2rem;
    }

    .back-link {
        display: inline-block;
        margin-bottom: 1rem;
        text-decoration: none;
        color: #2563eb;
        font-size: 0.9rem;
    }

    .detail-layout {
        display: grid;
        grid-template-columns: minmax(0, 1.2fr) minmax(0, 1.5fr);
        gap: 1.5rem;
    }

    @media (max-width: 768px) {
        .detail-layout {
            grid-template-columns: 1fr;
        }
    }

    .image-section img,
    .image-placeholder {
        width: 100%;
        border-radius: 14px;
        object-fit: cover;
        max-height: 400px;
        background: #f3f4f6;
        display: block;
    }

    .image-placeholder {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #6b7280;
        font-size: 0.9rem;
    }

    .info-section h1 {
        font-size: 1.5rem;
        margin-bottom: 0.4rem;
    }

    .price {
        font-size: 1.5rem;
        font-weight: 700;
        margin: 0.25rem 0 0.5rem;
    }

    .negotiable-tag {
        font-size: 0.8rem;
        margin-left: 0.5rem;
        padding: 0.2rem 0.4rem;
        border-radius: 999px;
        background: #ecfdf5;
        color: #16a34a;
        border: 1px solid #bbf7d0;
    }

    .meta {
        color: #6b7280;
        font-size: 0.9rem;
        margin-bottom: 1rem;
    }

    .detail-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .detail-list li {
        margin-bottom: 0.4rem;
        font-size: 0.95rem;
    }
</style>
