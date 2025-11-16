import { writable, derived } from 'svelte/store';

export const listings = writable([
    {
        id: 1,
        title: "iPhone 13",
        condition: "Like New",
        negotiable: true,
        price: 450,
        location: "Cincinnati",
        year: 2021,
        category: "Electronics",
        img: "/demo/iphone.jpg"
    },
    {
        id: 2,
        title: "Honda Civic",
        condition: "Good",
        negotiable: false,
        price: 8500,
        location: "Cincinnati",
        year: 2015,
        category: "Cars",
        img: "/demo/civic.jpg"
    },
    {
        id: 3,
        title: "Samsung 32\" TV",
        condition: "Good",
        negotiable: true,
        price: 320,
        location: "Cincinnati",
        year: 2019,
        category: "Electronics",
        img: "/demo/samsung32tv.jpg"
    },
    {
        id: 4,
        title: "MacBook Pro 16\"",
        condition: "Like New",
        negotiable: false,
        price: 1200,
        location: "Cincinnati",
        year: 2020,
        category: "Electronics",
        img: "/demo/macbook.jpg"
    },
    {
        id: 5,
        title: "Nissan Altima",
        condition: "Fair",
        negotiable: true,
        price: 6700,
        location: "Cincinnati",
        year: 2014,
        category: "Cars",
        img: "/demo/altima.jpg"
    },
    {
        id: 6,
        title: "Dining Table Set",
        condition: "Good",
        negotiable: false,
        price: 250,
        location: "Cincinnati",
        year: 2018,
        category: "Furniture",
        img: "/demo/tableset.jpg"
    },
    {
        id: 7,
        title: "Gaming PC (RTX 3050)",
        condition: "Like New",
        negotiable: true,
        price: 900,
        location: "Cincinnati",
        year: 2022,
        category: "Electronics",
        img: "/demo/gamingpc.jpg"
    },
    {
        id: 8,
        title: "Mountain Bike",
        condition: "Good",
        negotiable: false,
        price: 180,
        location: "Cincinnati",
        year: 2020,
        category: "Sports",
        img: "/demo/mountainbike.jpg"
    },
    {
        id: 9,
        title: "Sofa – 3 Seater",
        condition: "Fair",
        negotiable: true,
        price: 350,
        location: "Cincinnati",
        year: 2019,
        category: "Furniture",
        img: "/demo/sofa3seat.jpg"
    },
    {
        id: 10,
        title: "Nintendo Switch",
        condition: "Good",
        negotiable: false,
        price: 220,
        location: "Cincinnati",
        year: 2021,
        category: "Electronics",
        img: "/demo/nintendoswitch.jpg"
    },
    {
        id: 11,
        title: "Dell XPS 13 Laptop",
        condition: "Good",
        negotiable: true,
        price: 650,
        location: "Cincinnati",
        year: 2020,
        category: "Electronics",
        img: "/demo/xps13.jpg"
    },
    {
        id: 12,
        title: "Ford F-150",
        condition: "Fair",
        negotiable: false,
        price: 14500,
        location: "Cincinnati",
        year: 2012,
        category: "Cars",
        img: "/demo/f150.jpg"
    },
    {
        id: 13,
        title: "Apple Watch Series 4",
        condition: "Good",
        negotiable: true,
        price: 260,
        location: "Cincinnati",
        year: 2021,
        category: "Electronics",
        img: "/demo/applewatch.jpg"
    },
    {
        id: 14,
        title: "Canon EOS Rebel T7",
        condition: "Good",
        negotiable: false,
        price: 350,
        location: "Cincinnati",
        year: 2020,
        category: "Electronics",
        img: "/demo/canonrebel.jpg"
    },
    {
        id: 15,
        title: "Queen Bed Frame",
        condition: "Good",
        negotiable: true,
        price: 120,
        location: "Cincinnati",
        year: 2018,
        category: "Furniture",
        img: "/demo/queenbedframe.jpg"
    },
    {
        id: 16,
        title: "Black Bookshelf",
        condition: "Good",
        negotiable: false,
        price: 60,
        location: "Cincinnati",
        year: 2019,
        category: "Furniture",
        img: "/demo/blackbookshelf.jpg"
    },
    {
        id: 17,
        title: "PlayStation 5",
        condition: "Like New",
        negotiable: true,
        price: 450,
        location: "Cincinnati",
        year: 2021,
        category: "Electronics",
        img: "/demo/ps5.jpg"
    },
    {
        id: 18,
        title: "Beach Kayak",
        condition: "Good",
        negotiable: false,
        price: 300,
        location: "Cincinnati",
        year: 2020,
        category: "Sports",
        img: "/demo/beachkayak.jpg"
    },
    {
        id: 19,
        title: "Apple AirPods Pro",
        condition: "Good",
        negotiable: true,
        price: 140,
        location: "Cincinnati",
        year: 2022,
        category: "Electronics",
        img: "/demo/airpodpro.jpg"
    },
    {
        id: 20,
        title: "2009 Toyota Camry",
        condition: "Fair",
        negotiable: false,
        price: 7800,
        location: "Cincinnati",
        year: 2013,
        category: "Cars",
        img: "/demo/camry2009.jpg"
    },
    {
        id: 21,
        title: "Vintage Office Chair",
        condition: "Good",
        negotiable: true,
        price: 95,
        location: "Cincinnati",
        year: 2021,
        category: "Furniture",
        img: "/demo/vintagechair.jpg"
    },
    {
        id: 22,
        title: "Lenovo ThinkPad 14in",
        condition: "Good",
        negotiable: false,
        price: 540,
        location: "Cincinnati",
        year: 2020,
        category: "Electronics",
        img: "/demo/thinkpad14.jpg"
    },
    {
        id: 23,
        title: "Samsung Galaxy S22",
        condition: "Like New",
        negotiable: true,
        price: 500,
        location: "Cincinnati",
        year: 2022,
        category: "Electronics",
        img: "/demo/galaxys22.jpg"
    },
    {
        id: 24,
        title: "Road Bicycle",
        condition: "Good",
        negotiable: false,
        price: 260,
        location: "Cincinnati",
        year: 2019,
        category: "Sports",
        img: "/demo/roadbike.jpg"
    },
    {
        id: 25,
        title: "Xbox Series X",
        condition: "Like New",
        negotiable: true,
        price: 420,
        location: "Cincinnati",
        year: 2021,
        category: "Electronics",
        img: "/demo/xboxseriesx.jpg"
    },
    {
        id: 26,
        title: "KitchenAid Mixer",
        condition: "Good",
        negotiable: false,
        price: 180,
        location: "Cincinnati",
        year: 2018,
        category: "Home",
        img: "/demo/kitchenaidmixer.jpg"
    },
    {
        id: 27,
        title: "Pet Crate",
        condition: "Good",
        negotiable: true,
        price: 45,
        location: "Cincinnati",
        year: 2020,
        category: "Pets",
        img: "/demo/petcrate.jpg"
    },
    {
        id: 28,
        title: "Treadmill – Foldable",
        condition: "Fair",
        negotiable: false,
        price: 300,
        location: "Cincinnati",
        year: 2019,
        category: "Sports",
        img: "/demo/treadmill.jpg"
    },
    {
        id: 29,
        title: "Leather Jacket (Men’s)",
        condition: "Good",
        negotiable: true,
        price: 75,
        location: "Cincinnati",
        year: 2021,
        category: "Clothing",
        img: "/demo/leatherjacket.jpg"
    },
    {
        id: 30,
        title: "Subaru Outback 2015",
        condition: "Fair",
        negotiable: false,
        price: 9600,
        location: "Cincinnati",
        year: 2014,
        category: "Cars",
        img: "/demo/outback2015.jpg"
    }
    // Add more sample data later…
]);

// UI state: global sort key for listing grid
export const sortKey = writable('relevance');

// user filters
export const filters = writable({
    search: "",
    category: "",
    location: "",
    minPrice: 0,
    maxPrice: 999999,
    yearMin: 1980,
    yearMax: 2030,
    condition: "",
    negotiableOnly: false
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

            const matchesCondition =
                !$filters.condition || (item.condition && item.condition === $filters.condition);

            const matchesNegotiable =
                !$filters.negotiableOnly || (item.negotiable === true);

            return (
                matchesSearch &&
                matchesCategory &&
                matchesLocation &&
                matchesPrice &&
                matchesYear
                && matchesCondition
                && matchesNegotiable
            );
        });
    }
);
