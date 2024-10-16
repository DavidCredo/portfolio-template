import { writable } from "svelte/store";

export const availableLanguagesStore = writable<string[]>([]);