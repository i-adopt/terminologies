import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';

/** @type {import('./$types').LayoutServerLoad} */
export function load() {
  throw redirect(308, `${base}/list/all` );
}

export const trailingSlash = 'always';
