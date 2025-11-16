// @ts-nocheck
import { error } from '@sveltejs/kit';
import { listings } from '$lib/stores/listings';
import { get } from 'svelte/store';

export const load = ({ params }) => {
    const all = get(listings);
    const id = Number(params.id);
    const item = all.find((l) => l.id === id);

    if (!item) {
        throw error(404, 'Listing not found');
    }

    return { item };
};
