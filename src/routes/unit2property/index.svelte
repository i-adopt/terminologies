<script context="module">
  import MarkDown from '../../components/MarkDown.svelte';
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
  import { goto } from '$app/navigation';
  import { assets } from '$app/paths';
  import { Datatable, SearchInput, rows } from 'svelte-simple-datatables';

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
  };

  function handleClick(){
    goto( `../data/${this.parentNode.dataset.id}` );
  }
</script>

<h1>Unit to Property Lookup</h1>

<div class="text">
  <MarkDown source="unit2prop" />
</div>

{#await dataPromise}
  <p>Loading...</p>
{:then data}
  <div class="search">
    <SearchInput/>
  </div>
  <div class="list">
    <Datatable settings={settings} data={data}>
      <thead>
        <th data-key="source">Ontology</th>
        <th data-key="unitLabel">Unit</th>
        <th data-key="quantLabel">Property</th>
      </thead>
      <tbody>
      {#each $rows as row}
        <tr>
          <td on:click={handleClick}>{row.source}</td>
          <td on:click={handleClick}><a href="{row.unit}" target="_blank">{row.unitLabel}</a></td>
          <td on:click={handleClick}>
            <ul>
            {#each row.quant as quant}
              <li><a href="{quant.quant}" target="_blank">{quant.quantLabel}</a></li>
            {/each}
            </ul>
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
    height:   calc(100% - 12em);
  }
  td, th {
    padding: 0.25em;
    text-align: left !important;
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
  td ul {
    margin: 0.2em;
  }
  .text {
    display: inline-block;
    max-width: 800px;
  }
</style>