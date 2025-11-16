import { writable, derived } from 'svelte/store';

export const listings = writable([
    {
        id: 1,
        title: "iPhone 13",
        price: 450,
        location: "Cincinnati",
        year: 2021,
        category: "Electronics",
        img: "/demo/iphone.jpg"
    },
    {
        id: 2,
        title: "Honda Civic",
        price: 8500,
        location: "Cincinnati",
        year: 2015,
        category: "Cars",
        img: "/demo/civic.jpg"
    },
    {
    id: 3,
    title: "Samsung 32\" TV",
    price: 320,
    location: "Cincinnati",
    year: 2019,
    category: "Electronics",
    img: "/demo/samsung32tv.jpg"
    },
    {
    id: 4,
    title: "MacBook Pro 16\"",
    price: 1200,
    location: "Cincinnati",
    year: 2020,
    category: "Electronics",
    img: "/demo/macbook.jpg"
    },
    {
    id: 5,
    title: "Nissan Altima",
    price: 6700,
    location: "Cincinnati",
    year: 2014,
    category: "Cars",
    img: "/demo/altima.jpg"
    },
    {
    id: 6,
    title: "Dining Table Set",
    price: 250,
    location: "Cincinnati",
    year: 2018,
    category: "Furniture",
    img: "/demo/tableset.jpg"
    },
    {
    id: 7,
    title: "Gaming PC (RTX 3050)",
    price: 900,
    location: "Cincinnati",
    year: 2022,
    category: "Electronics",
    img: "/demo/gamingpc.jpg"
    },
    {
    id: 8,
    title: "Mountain Bike",
    price: 180,
    location: "Cincinnati",
    year: 2020,
    category: "Sports",
    img: "/demo/mountainbike.jpg"
    },
    {
    id: 9,
    title: "Sofa – 3 Seater",
    price: 350,
    location: "Cincinnati",
    year: 2019,
    category: "Furniture",
    img: "/demo/sofa3seat.jpg"
    },
    {
    id: 10,
    title: "Nintendo Switch",
    price: 220,
    location: "Cincinnati",
    year: 2021,
    category: "Electronics",
    img: "/demo/nintendoswitch.jpg"
    }
    // Add more sample data later…
]);

// user filters
export const filters = writable({
    search: "",
    category: "",
    location: "",
    minPrice: 0,
    maxPrice: 999999,
    yearMin: 1980,
    yearMax: 2030
});

// derived filtered data
export const filteredListings = derived(
    [listings, filters],
    ([$listings, $filters]) => {
        return $listings.filter(item => {
            const matchesSearch =
                item.title.toLowerCase().includes($filters.search.toLowerCase());

            const matchesCategory =
                !$filters.category || item.category === $filters.category;

            const matchesLocation =
                !$filters.location || item.location === $filters.location;

            const matchesPrice =
                item.price >= $filters.minPrice &&
                item.price <= $filters.maxPrice;

            const matchesYear =
                item.year >= $filters.yearMin &&
                item.year <= $filters.yearMax;

            return (
                matchesSearch &&
                matchesCategory &&
                matchesLocation &&
                matchesPrice &&
                matchesYear
            );
        });
    }
);
