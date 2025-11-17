<script>
    import { filters } from "$lib/stores/listings";
    export let open = false;

    function clearAll() {
    filters.set({
        search: "",
        category: "",
        location: "",
        minPrice: 0,
        maxPrice: 999999,
        yearMin: 1980,
        yearMax: 2030,
        condition: "",
        negotiableOnly: false,
        radiusMiles: null,
        locationLat: null,
        locationLon: null,
        minViews24h: 0,
        maxOnlineHours: 9999,
        maxPostedDays: 9999
    });
}

</script>

<style>
.panel {
    width: 300px;

    background: rgba(249, 250, 251, 0.7);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);

    border-left: 1px solid rgba(229, 231, 235, 0.6);
    padding: 1.5rem;
    padding-bottom: 0;

    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    overflow-y: auto;

    transition: transform 0.25s ease;

    z-index: 400;

    display: flex;
    flex-direction: column;
    gap: 1.5rem; /* gap is now ONLY between groups */
}

/* Hide panel when closed */
.hidden {
    transform: translateX(360px);
}

/* Both sections are grouped, so NO gap inside them */
.section {
    display: flex;
    flex-direction: column;
    gap: 1rem; /* inner spacing */
}

.section-advanced {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

/* headings */
.panel h2 {
    margin: 0;
    font-size: 1.35rem;
    font-weight: 700;
    color: #111827;
}
.panel h3 {
    margin: 0;
    font-size: 1.05rem;
    font-weight: 600;
    color: #374151;
}

/* form fields */
.field {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
}
label {
    font-size: 0.85rem;
    color: #374151;
    font-weight: 500;
}

input,
select {
    padding: 0.55rem 0.7rem;
    border-radius: 10px;
    border: 1px solid #d1d5db;
    background: rgba(255,255,255,0.85);
    font-size: 0.9rem;
    transition: border-color 0.2s, box-shadow 0.2s;
}

input:focus,
select:focus {
    outline: none;
    border-color: #7c3aed;
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.25);
}

.checkbox {
    display: flex;
    align-items: center;
    gap: 0.6rem;
}
.checkbox input {
    width: 16px;
    height: 16px;
}

/* divider */
.divider {
    height: 1px;
    width: 100%;
    background: #e5e7eb;
    margin: 0;
}

/* bottom padding ONLY under advanced filters */
.advanced-spacer {
    height: 80px;
    width: 100%;
}

.clearBtn {
    align-self: flex-end;
    margin-bottom: -0.5rem;

    background: linear-gradient(135deg,
        #ef4444 0%,     /* red */
        #dc2626 100%
    );

    color: white;
    border: none;
    border-radius: 10px;
    padding: 0.45rem 0.9rem;
    font-size: 0.85rem;
    font-weight: 600;

    box-shadow:
        0 4px 12px rgba(200, 0, 0, 0.25),
        inset 0 0 8px rgba(255,255,255,0.1);

    cursor: pointer;
    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;
}

.clearBtn:hover {
    transform: translateY(-2px);
    box-shadow:
        0 6px 18px rgba(200, 0, 0, 0.35),
        inset 0 0 8px rgba(255,255,255,0.15);
}

</style>



<div class="panel {open ? '' : 'hidden'}">

    <button class="clearBtn" on:click={clearAll}>Clear Filters</button>


    <!-- ⭐ NORMAL FILTERS grouped together (NO gap above/below) -->
    <div class="section">
        <h2>Filters</h2>

        <div class="field">
            <label>Min Price</label>
            <input type="number" placeholder="e.g. 50"
                on:input="{e => filters.update(f => ({ ...f, minPrice: +e.target.value }))}">
        </div>

        <div class="field">
            <label>Max Price</label>
            <input type="number" placeholder="e.g. 500"
                on:input="{e => filters.update(f => ({ ...f, maxPrice: +e.target.value }))}">
        </div>

        <div class="field">
            <label>Min Year</label>
            <input type="number" placeholder="e.g. 2010"
                on:input="{e => filters.update(f => ({ ...f, yearMin: +e.target.value }))}">
        </div>

        <div class="field">
            <label>Max Year</label>
            <input type="number" placeholder="e.g. 2024"
                on:input="{e => filters.update(f => ({ ...f, yearMax: +e.target.value }))}">
        </div>

        <div class="field">
            <label>Condition</label>
            <select on:change="{e => filters.update(f => ({ ...f, condition: e.target.value }))}">
                <option value="">Any</option>
                <option value="New">New</option>
                <option value="Like New">Like New</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
                <option value="For parts">For parts</option>
            </select>
        </div>

        <div class="checkbox">
            <input id="neg" type="checkbox"
                on:change="{e => filters.update(f => ({ ...f, negotiableOnly: e.target.checked }))}">
            <label for="neg">Negotiable only</label>
        </div>
    </div>


    <div class="divider"></div>


    <!-- ADVANCED FILTERS grouped together -->
    <div class="section-advanced">
        <h3>Advanced Filters</h3>

        <div class="field">
            <label>Min Views (24h)</label>
            <input
                type="number"
                placeholder="e.g. 20"
                on:input="{e => filters.update(f => ({ ...f, minViews24h: +e.target.value }))}"
            >
        </div>

        <div class="field">
            <label>Seller Online (max hours ago)</label>
            <input
                type="number"
                placeholder="e.g. 12"
                on:input="{e => filters.update(f => ({ ...f, maxOnlineHours: +e.target.value }))}"
            >
        </div>

        <div class="field">
            <label>Posted (max days ago)</label>
            <input
                type="number"
                placeholder="e.g. 7"
                on:input="{e => filters.update(f => ({ ...f, maxPostedDays: +e.target.value }))}"
            >
        </div>

        <div class="advanced-spacer"></div>
    </div>


</div>
