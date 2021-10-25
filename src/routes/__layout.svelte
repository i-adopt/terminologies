<nav>
  <a href="/">Home</a>
  <a href="/list">Terminologies</a>
  <a href="/join">Get Involved</a>
</nav>

<main>
  <slot></slot>
</main>

<svelte:body/>

<style>
  nav {
    margin-bottom: 1em;
    /* background-color: #005A9C; */
    color: white;
    height: 2em;
    display: flex;
    align-items: center;
    position: relative;
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
    max-width:  800px;
    width:      80%;
    display:    inline-block;
    flex-grow:  1;
    text-align: center;
  }

  :global( body ), :global(html) {
    height:   100%;
    overflow: hidden;
    margin:   0;
    padding:  0;
  }
  :global(#svelte) {
    align-items:  center;
    display:      flex;
    flex-flow:    column;
    height:       100%;
  }
</style>