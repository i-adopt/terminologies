<script>
  import { onMount } from 'svelte';
  import marked from 'marked';

  export let content = '';
  export let source = '';
  let rendered = '';

  onMount(async () => {
    if( source ) {
      content = await (await fetch(`/md/${source}.md`)).text()
    }
    rendered = marked( content );
  });

</script>

{@html rendered}
