<script>
  import MarkDown from '$lib/MarkDown.svelte';
  import Datatable from '$lib/Datatable.svelte';
  export let data;

  const dataFormatter = ( data, _, colIndex ) => {
    const cell = window.jQuery(data);
    switch( colIndex ) {
      case 1: // unit
        return `${cell.text()} (${cell.attr('href')})`;
      case 2: // properties
        return cell.find( 'a' ).map( (_, el) => `${el.textContent} (${el.href})` ).get().join( '\n' );
      default:
        return data;
    }
  };

  const options = {
    order: [[1, 'asc']],
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
        render: ( q ) => `<ul>${ q.sort( (a,b) => a.quantLabel.localeCompare( b.quantLabel ) ).map( (el) => `<li><a href="${el.quant}" target="_blank">${el.quantLabel}</a></li>`).join( '' )}</ul>`,
      },
    ],
    dom: 'frtipB',
    buttons: [
      {
        extend: 'excel',
        text : 'Export to Excel',
        exportOptions : {
          format: {
            body: dataFormatter
          }
        },
      },
      {
        extend: 'csv',
        text : 'Export to CSV',
        exportOptions : {
          format: {
            body: dataFormatter
          }
        },
      }
    ],
  };
</script>

<h1>Unit to Property Lookup</h1>

<div class="text">
  <MarkDown source="unit2prop" />
</div>

{#await data.promise}
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
    height:   calc(100% - 13em);
    width: 100%;
  }
  .text {
    display: inline-block;
    max-width: 800px;
  }
  :global(.dt-buttons) {
    padding-top:  0.755em;
    text-align:   right;
  }
</style>
