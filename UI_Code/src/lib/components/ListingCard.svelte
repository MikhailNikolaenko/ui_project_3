<script>
    export let item;
</script>

<style>
.card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    background: white;
    transition: transform .15s ease;
}
.card:hover {
    transform: scale(1.02);
}
img {
    width: 100%;
    height: 160px;
    object-fit: cover;
}
</style>

<div class="card">
    <img src={item.img} alt={item.title} />
    <div class="p-2">
        <h3>{item.title}</h3>
        <p>${item.price}</p>
        <small>{item.location} • {item.year}</small>
    </div>
</div>
