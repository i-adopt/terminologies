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
    goto( `data/${this.parentNode.dataset.id}` );
  }
</script>

<div class="search">
  <SearchInput/>
</div>
<div class="list">
  <Datatable settings={settings} data={data}>
    <thead>
      <th data-key="title">Name</th>
      <th data-key="(row) => row.domain.join()">Domain(s)</th>
      <th data-key="type">Type</th>
      <th>Download</th>
    </thead>
    <tbody>
    {#each $rows as row}
      <tr data-id="{row.id}">
        <td on:click={handleClick}>{row.title}</td>
        <td on:click={handleClick}>{(row.domain || []).join(', ')}</td>
        <td on:click={handleClick}>{row.type}</td>
        <td>
          <a href="/data/{row.id}.ttl" target="_blank"><img src="gfx/rdf.svg" alt="dcat"/></a>
          <a href="/data/{row.id}.json" target="_blank"><img src="gfx/json.svg" alt="dcat"/></a>
        </td>
      </tr>
    {/each}
    </tbody>
  </Datatable>
</div>

<style>
  .search {
    margin-bottom: 1em;
  }
  .list {
    display:  inline-block;
    height:   95%;
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
</style>