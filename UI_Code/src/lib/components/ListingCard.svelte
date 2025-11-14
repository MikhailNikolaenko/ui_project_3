<script>
    export let item;
</script>

<style>
.card {
    background: #fff;
    border-radius: 14px;
    border: 1px solid #eee;
    padding: 0.75rem;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
    cursor: pointer;
    position: relative;
}

.card:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 18px rgba(0,0,0,0.08);
}

/* Image wrapper provides the "white frame" */
.image-wrapper {
    position: relative;
    background: #fff;
    border-radius: 12px;
    padding: 6px;
    border: 1px solid #f0f0f0;
    overflow: hidden;
}

/* Square image */
.image {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 10px;
}

/* Floating price badge */
.price-badge {
    position: absolute;
    bottom: 10px;
    right: 10px;

    background: #fff;
    padding: 0.25rem 0.6rem;
    border-radius: 999px;
    font-size: 0.85rem;
    font-weight: 600;

    border: 1px solid #ddd;
    box-shadow: 0 2px 6px rgba(0,0,0,0.08);
}

/* Title */
.title {
    margin-top: 0.65rem;
    font-size: 1rem;
    font-weight: 600;
    color: #222;
}

/* Location + time */
.meta {
    margin-top: 0.2rem;
    font-size: 0.82rem;
    color: #666;
}
</style>

<div class="card">
    
    <div class="image-wrapper">
        <img class="image" src={item.img} alt={item.title} />

        <div class="price-badge">
            ${item.price}
        </div>
    </div>

    <div class="title">{item.title}</div>

    <div class="meta">
        {item.location} • {item.year}
    </div>

</div>
