<script>
  import { onMount } from 'svelte';
  import { base } from '$app/paths';

  export let content = '';
  export let source = '';

  onMount(async () => {
    if( source ) {
      content = await (await fetch(`${base}/md/${source}.md`)).text()
    }
  });

</script>

{@html content}
