import { writable } from "svelte/store";

export const title = writable("Hold My Pics");
export const count = writable<number | undefined>(undefined);
