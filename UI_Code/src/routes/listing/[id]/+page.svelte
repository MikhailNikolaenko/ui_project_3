<script>
    export let data;
    const { item } = data;
</script>

<svelte:head>
    <title>{item.title} - Listing</title>
</svelte:head>

<main class="detail-page">

    <a class="back-link" href="/">← Back to listings</a>

    <!-- SIDE-BY-SIDE ROW -->
    <div class="content-row">

        <!-- LEFT — IMAGE -->
        <div class="hero-card">
            {#if item.img}
                <img class="hero-img" src={item.img} alt={item.title} />
            {:else}
                <div class="hero-img placeholder">No Image</div>
            {/if}
        </div>

        <!-- RIGHT — DETAILS -->
        <div class="info-panel">

            <h1 class="title">{item.title}</h1>

            <div class="price-row">
                <span class="price">${item.price}</span>
                {#if item.negotiable}
                    <span class="neg-tag">Negotiable</span>
                {/if}
            </div>

            <div class="stats-box">
                <div class="stat">
                    <div class="num">{item.views24h}</div>
                    <div class="label">Views (24h)</div>
                </div>
                <div class="stat">
                    <div class="num">{item.sellerLastOnlineHours}h</div>
                    <div class="label">Seller online</div>
                </div>
                <div class="stat">
                    <div class="num">{item.postedAgoDays}d</div>
                    <div class="label">Posted</div>
                </div>
            </div>

            <div class="meta-line">
                <span>{item.location}</span>
                {#if item.year}<span>• {item.year}</span>{/if}
                {#if item.condition}<span>• {item.condition}</span>{/if}
                {#if item.category}<span>• {item.category}</span>{/if}
            </div>

            <h2 class="section-title">Details</h2>
            <ul class="details-list">
                <li><strong>Condition:</strong> {item.condition}</li>
                <li><strong>Category:</strong> {item.category}</li>
                <li><strong>Location:</strong> {item.location}</li>
                <li><strong>Year:</strong> {item.year}</li>
                <li><strong>Negotiable:</strong> {item.negotiable ? "Yes" : "No"}</li>
            </ul>

            <button class="contact-btn">Contact Seller</button>
        </div>

    </div>
</main>

<style>

/* ---------------------------- */
/* FULL PAGE OVERLAY BLUR */
/* ---------------------------- */
.detail-page {
    position: fixed;
    inset: 0;
    z-index: 2000;

    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    background: rgba(255, 255, 255, 0.4);

    overflow-y: auto;
    padding: 2rem 1rem 3rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    animation: fadeIn 0.25s ease forwards;
}

@keyframes fadeIn {
    from { opacity: 0; backdrop-filter: blur(0px); }
    to   { opacity: 1; backdrop-filter: blur(12px); }
}


/* ---------------------------- */
/* TOP BACK LINK */
/* ---------------------------- */
.back-link {
    text-decoration: none;
    font-size: 1.5rem;
    color: #3b76f6;
    margin-bottom: 1rem;
    display: inline-block;
}


/* ---------------------------- */
/* SIDE-BY-SIDE LAYOUT */
/* ---------------------------- */
.content-row {
    display: flex;
    gap: 1.5rem;
    width: 100%;
    max-width: 1100px;
}

/* MOBILE fallback */
@media (max-width: 800px) {
    .content-row {
        flex-direction: column;
    }
}


/* ---------------------------- */
/* IMAGE CARD */
/* ---------------------------- */
.hero-card {
    flex: 1;
    max-width: 50%;
    background: #fff;
    border-radius: 18px;
    padding: 0.75rem;
    border: 1px solid #e5e7eb;
    box-shadow: 0 6px 18px rgba(0,0,0,0.04);
}

@media (max-width: 800px) {
    .hero-card { max-width: 100%; }
}

.hero-img {
    width: 100%;
    border-radius: 14px;
    object-fit: cover;
    max-height: 420px;
    display: block;
}


/* ---------------------------- */
/* RIGHT PANEL */
/* ---------------------------- */
.info-panel {
    flex: 1;
    background: #ffffff;
    border-radius: 18px;
    padding: 1.6rem;
    border: 1px solid #e5e7eb;
    box-shadow: 0 6px 18px rgba(0,0,0,0.04);
}



/* Title */
.title {
    font-weight: 700;
    font-size: 1.65rem;
    margin-bottom: 0.2rem;
}

/* Price row */
.price-row {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 1rem;
}

.price {
    font-size: 1.8rem;
    font-weight: 700;
}

.neg-tag {
    background: #ecfdf5;
    border: 1px solid #bbf7d0;
    padding: 3px 10px;
    font-size: 0.8rem;
    border-radius: 999px;
    color: #16a34a;
}


/* Stats */
.stats-box {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin: 1rem 0 1.4rem;
    padding: 0.9rem 1rem;
    background: #f8f9fb;
    border-radius: 14px;
    border: 1px solid #e5e7eb;
}

.stat { text-align: center; flex: 1; }
.num { font-size: 1.25rem; font-weight: 700; }
.label { font-size: 0.75rem; color: #6b7280; margin-top: 2px; }


/* Meta */
.meta-line {
    color: #6b7280;
    font-size: 0.92rem;
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1.2rem;
}

/* Section title */
.section-title {
    margin-top: 1rem;
    margin-bottom: 0.6rem;
    font-size: 1.15rem;
    font-weight: 600;
}

/* Details list */
.details-list {
    list-style: none;
    padding: 0;
    margin: 0 0 1.4rem;
    line-height: 1.55;
}


/* Contact button */
.contact-btn {
    background: linear-gradient(135deg, #7c3aed, #3b82f6);
    color: white;
    border: none;
    border-radius: 12px;
    padding: 0.85rem 1.4rem;
    font-size: 1rem;
    font-weight: 600;
    width: 100%;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.contact-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0,0,0,0.12);
}

</style>
