<script context="module">
  export function load({ page }) {
    return {
      props: {
        CURRENT_PAGE: page.params.slug || 'all',
      }
    };
  }
</script>
<script>
  import { base } from '$app/paths';
  export const BASE_PATH = base;
  export let CURRENT_PAGE;
</script>

<h1>List of Terminologies</h1>

<nav>
  {#if CURRENT_PAGE == 'all'}
    <span class="active">all</span> |
  {:else}
    <a href="{BASE_PATH}/list/all">all</a> |
  {/if}
  {#if CURRENT_PAGE == 'variable'}
    <span class="active">Variables</span> |
  {:else}
    <a href="{BASE_PATH}/list/variable">Variables</a> |
  {/if}
  {#if CURRENT_PAGE == 'property'}
    <span class="active">Properties</span> |
  {:else}
    <a href="{BASE_PATH}/list/property">Properties</a> |
  {/if}
  {#if CURRENT_PAGE == 'entity'}
  <span class="active">Entities</span> |
  {:else}
    <a href="{BASE_PATH}/list/entity">Entities</a> |
  {/if}
  {#if CURRENT_PAGE == 'constraint'}
  <span class="active">Constraints</span> |
  {:else}
    <a href="{BASE_PATH}/list/constraint">Constraints</a> |
  {/if}
  {#if CURRENT_PAGE == 'method'}
  <span class="active">Methods</span> |
  {:else}
    <a href="{BASE_PATH}/list/method">Methods</a> |
  {/if}
  {#if CURRENT_PAGE == 'unit'}
  <span class="active">Units</span>
  {:else}
    <a href="{BASE_PATH}/list/unit">Units</a>
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