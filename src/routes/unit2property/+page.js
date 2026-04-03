import { base } from '$app/paths';

export async function load({ fetch }) {
  const raw = await fetch(`${base}/md/unit2prop.md`);
  return {
    promise: fetch( `${base}/data/unit2property.json`)
      .then( (d) => d.json() )
      .then( (d) => d.sort( (a,b) => a.unitLabel.localeCompare( b.unitLabel ) ) ),
    content: await raw.text(),
  };
}

export const trailingSlash = 'always';
