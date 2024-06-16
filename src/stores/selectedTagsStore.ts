import { writable } from 'svelte/store';

export const selectedTagsStore = writable<string[]>([]);