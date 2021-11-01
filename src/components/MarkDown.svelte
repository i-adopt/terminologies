<script>
  import { onMount } from 'svelte';
  import marked from 'marked';
  import * as Config from './../config';

  export let content = '';
  export let source = '';
  let rendered = '';

  onMount(async () => {
    if( source ) {
      content = await (await fetch(`${Config.BASE_PATH}/md/${source}.md`)).text()
    }
    rendered = marked( content );
  });

</script>

{@html rendered}
