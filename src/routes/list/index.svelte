<script context="module">
  import { base } from '$app/paths';
  export function load() {
    return {
      status:   302,
      redirect: `${base}/list/all`
    };
  }
</script>