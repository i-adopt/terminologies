<script>
  export let status = false;
  export let text = '';
  export let link = '';
</script>

<div class="container">
  {#if status}
    <span class="check">&check;</span>
  {:else}
    <span class="cross">&cross;</span>
  {/if}
  {#if link}
    <a href="{link}">{text}</a>
  {:else}
    {text}
  {/if}
</div>

<style>
  .container {
    display: inline-block;
    white-space: nowrap;
    padding-right: 1em;
  }
  .check, .cross {
    font-weight: bold;
  }
  .check {
    color: green;
  }
  .cross {
    color: red;
  }
</style>