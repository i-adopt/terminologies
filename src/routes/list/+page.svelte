<script>
import { goto } from '$app/navigation';
import { base } from '$app/paths';

export function load() {
  goto( `${base}/list/all` );
}
</script>
