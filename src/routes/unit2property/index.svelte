<script context="module">
  import MarkDown from '../../components/MarkDown.svelte';
  import Datatable from '../../components/Datatable.svelte';
  import { base } from '$app/paths';
  export async function load() {

    // get data
    let data = fetch( `${base}/data/unit2property.json`)
      .then( (d) => d.json() )
      .then( (d) => d.sort( (a,b) => a.unitLabel.localeCompare( b.unitLabel ) ) );

    return {
      props: {
        dataPromise: data,
      }
    };
  }
</script>
<script>
  export let dataPromise;

  const options = {
    columns: [
      {
        data: 'source',
        title: 'Ontology',
      },
      {
        data:   'unitLabel',
        title:  'Unit',
        render: ( _, __, row ) => `<a href="${row.unit}" target="_blank">${row.unitLabel}</a>`,
      },
      {
        data:   'quant',
        title:  'Property',
        render: ( q ) => `<ul>${ q.map( (el) => `<li><a href="${el.quant}" target="_blank">${el.quantLabel}</a></li>`).join( '' )}</ul>`,
      },
    ]
  };
</script>

<h1>Unit to Property Lookup</h1>

<div class="text">
  <MarkDown source="unit2prop" />
</div>

{#await dataPromise}
  <p>Loading...</p>
{:then data}
  <div class="list">
    <Datatable options={options} data={data}/>
  </div>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}

<style>
  .list {
    display:  inline-block;
    height:   calc(100% - 12em);
    width: 100%;
  }
  .text {
    display: inline-block;
    max-width: 800px;
  }
</style>