<script>
    export let item;
</script>

<style>
    .card {
        display: block;
        background: #fff;
        border-radius: 14px;
        border: 1px solid #e5e7eb;
        padding: 0.75rem;
        transition: transform 0.15s ease, box-shadow 0.15s ease;
        cursor: pointer;
        position: relative;
        text-decoration: none;
        color: inherit;
    }

    .card:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
    }

    .image-wrapper {
        position: relative;
        background: #fff;
        border-radius: 12px;
        padding: 6px;
        margin-bottom: 0.5rem;
        overflow: hidden;
    }

    .image {
        width: 100%;
        border-radius: 10px;
        object-fit: cover;
        max-height: 180px;
        display: block;
    }

    .placeholder {
        background: #f3f4f6;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #6b7280;
        font-size: 0.85rem;
    }

    .price-badge {
        position: absolute;
        left: 12px;
        bottom: 12px;
        background: rgba(15, 23, 42, 0.92);
        color: #f9fafb;
        padding: 4px 10px;
        border-radius: 999px;
        font-size: 0.85rem;
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
    }

    .negotiable-inline {
        font-size: 0.75rem;
        padding: 1px 6px;
        border-radius: 999px;
        background: rgba(34, 197, 94, 0.18);
        color: #bbf7d0;
        border: 1px solid rgba(34, 197, 94, 0.4);
    }

    .title {
        font-size: 0.98rem;
        font-weight: 600;
        margin-bottom: 0.25rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .meta {
        font-size: 0.8rem;
        color: #6b7280;
        display: flex;
        flex-wrap: wrap;
        gap: 0.3rem;
        align-items: center;
    }

    .condition {
        font-size: 0.75rem;
        padding: 2px 8px;
        border-radius: 999px;
        background: #f3f4f6;
        color: #4b5563;
    }
</style>

<a class="card" href={`/listing/${item.id}`}>
    <div class="image-wrapper">
        {#if item.img}
            <img class="image" src={item.img} alt={item.title} />
        {:else}
            <div class="image placeholder">No Image</div>
        {/if}

        <div class="price-badge">
            ${item.price}
            {#if item.negotiable}
                <span class="negotiable-inline" title="Price is negotiable">
                    Negotiable
                </span>
            {/if}
        </div>
    </div>

    <div class="title">{item.title}</div>

    <div class="meta">
        {item.location}
        {#if item.year}
            • {item.year}
        {/if}
        {#if item.condition}
            <span class="condition">{item.condition}</span>
        {/if}
    </div>

    
</a>
