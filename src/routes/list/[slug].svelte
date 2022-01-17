<script context="module">
  import Datatable from '../../components/Datatable.svelte';
  import { base } from '$app/paths';
  export async function load({ params }) {

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
      props: {
        dataPromise: data,
      }
    };
  }
</script>
<script>
  import { goto } from '$app/navigation';

  export let dataPromise;

  const options = {
    columns: [
      {
        data: 'title',
        title: 'Name',
      },
      {
        data:   'domain',
        title:  'Domain(s)',
        render: (d) => d ? d.map( (el) => el.label ).join() : '',
      },
      {
        data:   'type',
        title:  'Type',
      },
      {
        data:     'id',
        title:    '&nbsp;',
        sortable: false,
        render: (d) => `
          <div class="download">
            <a href="${base}/data/${d}.ttl" target="_blank"><img src="${base}/gfx/rdf.svg" alt="dcat"/></a>
            <a href="${base}/data/${d}.json" target="_blank"><img src="${base}/gfx/json.svg" alt="JSON"/></a>
          </div>
        `
      },
    ],

    rowCallback: (row, data) => row.dataset.id = data.id,

  };

  function handleClick(){
    goto( `../data/${this.parentNode.dataset.id}` );
  }

</script>

{#await dataPromise}
  <p>Loading...</p>
{:then data}
  <div class="list">
    <Datatable options={options} data={data} rowLink={handleClick} />
  </div>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}

<style>
  .list {
    display:  inline-block;
    height:   calc(100% - 10em);
  }
  :global( .download img ) {
    height: 1.5em;
    width: 1.5em;
  }
  :global( .download ) {
    white-space: nowrap;
  }
</style>
