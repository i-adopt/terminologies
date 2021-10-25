<script>
import { goto } from '$app/navigation';

  import { onMount } from 'svelte'
  export let data;
  import { Datatable, SearchInput, rows } from 'svelte-simple-datatables'

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

  onMount(async () => {
    data = await (await fetch('/data/summary.json')).json()
  });

  function handleClick(){
    goto( `data/${this.dataset.id}` );
  }
</script>

<div style="text-align: right;">
  <SearchInput/>
</div>
<div id="list">
  <Datatable settings={settings} data={data}>
    <thead>
      <th data-key="name">Name</th>
      <th data-key="url">Url</th>
      <th></th>
    </thead>
    <tbody>
    {#each $rows as row}
      <tr data-id="{row.id}" on:click={handleClick}>
        <td>{row.name}</td>
        <td>{row.url}</td>
        <td><a href="/data/{row.id}.ttl"><img src="gfx/rdf.svg" alt="dcat"/></a></td>
      </tr>
    {/each}
    </tbody>
  </Datatable>
</div>

<style>
  #list {
    display:  inline-block;
    height:   95%;
  }
  td {
    padding: 0.25em;
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
</style>