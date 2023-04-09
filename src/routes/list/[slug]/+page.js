import { base } from '$app/paths';

export async function load({ params, fetch }) {

  // get data
  let data = fetch( `${base}/data/summary.json`)
    .then( (d) => d.json() )
    .then( (d) => d.sort( (a,b) => a.title.localeCompare( b.title ) ) );

  // possibly filter the data
  if( [ 'variable', 'property', 'entity', 'constraint', 'method', 'unit' ].includes( params.slug )) {
    const slug = params.slug;
    data = data.then( (d) => d.filter((el) => el.has[slug] ) );
  }

  return {
    promise: data,
  };

}
