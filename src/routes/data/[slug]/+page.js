import { base } from '$app/paths';

export function load({ fetch, params }) {
  return {
    promise: fetch(`${base}/data/${params.slug}.json`)
      .then( (d) => d.json())
  };
}

export const trailingSlash = true;