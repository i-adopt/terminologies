<script>
  import { onMount } from 'svelte';

  export let options;
  export let data;
  export let rowLink;

  $: tableClass = rowLink ? 'linked' : '';

  onMount( async () => {

    window.jQuery( 'table' ).empty();
    window.jQuery( 'table' ).DataTable({
      ...options,
      data:           data,

      scrollY:        `calc( ${window.jQuery( '.list' ).height()}px - 3em )`,
      deferRender:    true,
      scrollCollapse: false,
      scroller:       true,

      language: {
        search: '',
        searchPlaceholder: 'Search ...'
      },


    });
  });

  const clickHandler = !rowLink
    ? undefined
    : function clickHandler( ... args ){
      rowLink.apply( args[0].target, args );
    };

</script>

<table class="{tableClass}" on:click={clickHandler}>
  <thead><tr><th></th></tr></thead>
  <tbody><tr><td><ul></ul></td></tr></tbody>
</table>

<style>
  :global(table) {
    width: 100%;
  }
  :global(table td), :global(table th) {
    padding: 0.25em;
    text-align: left !important;
    box-sizing: border-box;
  }
  :global(table tbody tr:nth-child(odd)) {
    background-color: #eee;
  }
  :global(table.linked tbody tr) {
    cursor: pointer;
  }
  :global(table tbody tr:hover) {
    background-color: #a3c2db;
  }
  :global(table td ul) {
    margin: 0.2em;
  }

  :global(.dataTables_wrapper .dataTables_filter) {
    float: unset;
    text-align: center;
  }
  :global(.dataTables_wrapper .dataTables_filter input) {
    border-color: #e0e0e0;
    max-width:    300px;
    width:        50%;
  }

  :global(div.dts div.dataTables_scrollBody) {
    background: none;
  }
</style>
