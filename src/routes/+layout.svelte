<script>
  import { base } from '$app/paths';
  export const BASE_PATH = base;
</script>
<nav>
  <a href="{BASE_PATH}/"              >Home</a>
  <a href="{BASE_PATH}/list"          >Terminologies</a>
  <a href="{BASE_PATH}/unit2property" >Unit-to-Property</a>
  <a href="{BASE_PATH}/join"          >Get Involved</a>
</nav>

<main>
  <slot></slot>
</main>

<svelte:body/>

<style>
  nav {
    margin-bottom: 0.5em;
    /* background-color: #005A9C; */
    color:        white;
    height:       2em;
    display:      flex;
    align-items:  center;
    position:     relative;
  }
  nav::before {
    content: "";
    position: absolute;
    border:   none;
    top:      -0px;
    bottom:   -50%;
    left:     -25%;
    right:     0px;
    width:    150%;
    height:   180%;
    z-index:  -1;
    background: #005A9C;
    transform: perspective(20em) rotateX(-45deg);
    transform-origin: top;
  }
  a {
    text-decoration: none;
    color:      white;
    margin:     0 1em;
    font-size:  130%;
  }

  main {
    max-width:  1024px;
    width:      80%;
    display:    inline-block;
    height:     calc( 100% - 3em );
    text-align: center;
  }

  :global( body ), :global(html) {
    height:   100%;
    overflow: hidden;
    margin:   0;
    padding:  0;
  }
  :global(main) {
    align-items:  center;
    display:      flex;
    flex-flow:    column;
    height:       100%;
  }
</style>