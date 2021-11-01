<script>
  import { onMount } from 'svelte';
  import marked from 'marked';
  import { base } from '$app/paths';

  export let content = '';
  export let source = '';
  let rendered = '';

  onMount(async () => {
    if( source ) {
      content = await (await fetch(`${base}/md/${source}.md`)).text()
    }
    rendered = marked( content );
  });

</script>

{@html rendered}
