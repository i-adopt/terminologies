import { base } from '$app/paths';

export async function load({ fetch }) {
  return {
    promise: fetch( `${base}/data/unit2property.json`)
      .then( (d) => d.json() )
      .then( (d) => d.sort( (a,b) => a.unitLabel.localeCompare( b.unitLabel ) ) ),
  };
}

export const trailingSlash = 'always';
