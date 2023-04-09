<script>
  import { base } from '$app/paths';
  export const BASE_PATH = base;
  export let data;
</script>

<h1>List of Terminologies</h1>

<nav>
  {#if data.CURRENT_PAGE == 'all'}
    <span class="active">all</span> |
  {:else}
    <a data-sveltekit-reload href="{BASE_PATH}/list/all">all</a> |
  {/if}
  {#if data.CURRENT_PAGE == 'variable'}
    <span class="active">Variables</span> |
  {:else}
    <a data-sveltekit-reload href="{BASE_PATH}/list/variable">Variables</a> |
  {/if}
  {#if data.CURRENT_PAGE == 'property'}
    <span class="active">Properties</span> |
  {:else}
    <a data-sveltekit-reload href="{BASE_PATH}/list/property">Properties</a> |
  {/if}
  {#if data.CURRENT_PAGE == 'entity'}
  <span class="active">Entities</span> |
  {:else}
    <a data-sveltekit-reload href="{BASE_PATH}/list/entity">Entities</a> |
  {/if}
  {#if data.CURRENT_PAGE == 'constraint'}
  <span class="active">Constraints</span> |
  {:else}
    <a data-sveltekit-reload href="{BASE_PATH}/list/constraint">Constraints</a> |
  {/if}
  {#if data.CURRENT_PAGE == 'method'}
  <span class="active">Methods</span> |
  {:else}
    <a data-sveltekit-reload href="{BASE_PATH}/list/method">Methods</a> |
  {/if}
  {#if data.CURRENT_PAGE == 'unit'}
  <span class="active">Units</span>
  {:else}
    <a data-sveltekit-reload href="{BASE_PATH}/list/unit">Units</a>
  {/if}
</nav>

<slot></slot>

<style>
  nav {
    margin-bottom: 1em;
  }
  .active {
    text-decoration: underline;
  }
</style>
