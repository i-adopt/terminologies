<script context="module">
  import { base } from '$app/paths';
  export async function load({ page }) {

    // get data
    let data = fetch( `${base}/data/summary.json`)
      .then( (d) => d.json() )
      .then( (d) => d.sort( (a,b) => a.title.localeCompare( b.title ) ) );

    // possibly filter the data
    if( [ 'variable', 'property', 'entity', 'constraint', 'method', 'unit' ].includes( page.params.slug )) {
      const slug = page.params.slug;
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
  import { assets } from '$app/paths';
  import { Datatable, SearchInput, rows } from 'svelte-simple-datatables'

  export let dataPromise;
  export const BASE_PATH = base;
  export const ASSET_PATH = assets;

  const settings = {
    sortable: true,
    pagination: false,
    columnFilter: false,
    blocks: {
      searchInput: false,
      paginationButtons: false,
      paginationRowCount: false,
    }
  }

  function handleClick(){
    goto( `../data/${this.parentNode.dataset.id}` );
  }
</script>

{#await dataPromise}
  <p>Loading...</p>
{:then data}
  <div class="search">
    <SearchInput/>
  </div>
  <div class="list">
    <Datatable settings={settings} data={data}>
      <thead>
        <th data-key="title">Name</th>
        <th data-key="(row) => row.domain.join()">Domain(s)</th>
        <th data-key="type">Type</th>
        <th>&nbsp;</th>
      </thead>
      <tbody>
      {#each $rows as row}
        <tr data-id="{row.id}">
          <td on:click={handleClick}>{row.title}</td>
          <td on:click={handleClick}>{(row.domain || []).map( (d) => d.label ).join('; ')}</td>
          <td on:click={handleClick}>{row.type}</td>
          <td class="download">
            <a href="{BASE_PATH}/data/{row.id}.ttl" target="_blank"><img src="{BASE_PATH}/gfx/rdf.svg" alt="dcat"/></a>
            <a href="{BASE_PATH}/data/{row.id}.json" target="_blank"><img src="{ASSET_PATH}/gfx/json.svg" alt="JSON"/></a>
          </td>
        </tr>
      {/each}
      </tbody>
    </Datatable>
  </div>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}

<style>
  .search {
    margin-bottom: 1em;
  }
  .list {
    display:  inline-block;
    height:   calc(100% - 10em);
  }
  td, th {
    padding: 0.25em;
    text-align: center;
    box-sizing: border-box;
  }
  tr:nth-child(odd) {
    background-color: #eee;
  }
  tr {
    cursor: pointer;
  }
  tr:hover {
    background-color: steelblue;
  }
  img {
    height: 1.5em;
    width: 1.5em;
  }
  .download {
    white-space: nowrap;
  }
</style>