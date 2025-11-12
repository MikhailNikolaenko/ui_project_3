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
