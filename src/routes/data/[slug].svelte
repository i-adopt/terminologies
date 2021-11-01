<script context="module">
  import * as Config from '../../config.js';
  export function load({ page }) {
    return {
      props: {
        promise: fetch(`${Config.BASE_PATH}/data/${page.params.slug}.json`).then( (d) => d.json() ),
      }
    };
  }
</script>
<script>
  import Status from '../../components/Status.svelte'

  export let promise;
</script>

<div class="container">
  <div>
    {#await promise}
      <p>Loading...</p>
    {:then data}
      <h1>{data.title}</h1>
      <hr>
      <dl>
        <dt>URL</dt>
        <dd><a href="{data.url}" target="_blank">{data.url}</a></dd>

        {#if data.domain && (data.domain.length > 0)}
          <dt>Domain(s)</dt>
          <dd>
            <ul>
              {#each data.domain as domain}
              <li>{domain}</li>
              {/each}
            </ul>
          </dd>
          {/if}

        {#if data.topic && (data.topic.length > 0)}
          <dt>Topic(s)</dt>
          <dd>
            <ul>
              {#each data.topic as topic}
              <li>{topic}</li>
              {/each}
            </ul>
          </dd>
        {/if}

        <dt>Language(s)</dt>
        <dd>
          <div class="stretched">
            {#each data.language as lang}
            <img src="https://unpkg.com/language-icons/icons/{lang}.svg" width="30" alt="{lang}" title="{lang}" />
            {/each}
          </div>
        </dd>

        <dt>Concepts contained</dt>
        <dd>
          <div class="stretched">
            <Status status={data.has.variable} text="Variable" />
            <Status status={data.has.property} text="Property" />
            <Status status={data.has.ooi} text="ObjectOfInterest" />
            <Status status={data.has.context} text="ContextObject" />
            <Status status={data.has.matrix} text="Matrix" />
            <Status status={data.has.constraint} text="Constraint" />
          </div>
          <hr>
          <div>
            <Status status={data.has.unit} text="Unit" />
            <Status status={data.has.method} text="Method" />
            <Status status={data.has.values} text="Values" />
          </div>
        </dd>

        {#if data.topic && (data.topic.length > 0)}
          <dt>Alignment(s)</dt>
          <dd>
            <ul>
              {#each data.alignments as alignment}
              <li>{alignment}</li>
              {/each}
            </ul>
          </dd>
        {/if}

      </dl>
    {:catch error}
      <p style="color: red">{error.message}</p>
    {/await}
  </div>
</div>

<style>
  .container {
    width:      100%;
    max-width:  640px;
    display:    inline-block;
    text-align: left;
  }

  dt {
    margin-top:     1em;
    margin-bottom:  0.5em;
    font-weight:    bold;
  }

  ul {
    padding: 0 1em;
  }

  .stretched {
    display: flex;
    justify-content: space-between;
  }
</style>