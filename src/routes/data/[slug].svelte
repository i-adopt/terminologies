<script context="module">
  import { base } from '$app/paths';
  export function load({ params }) {
    return {
      props: {
        promise: fetch(`${base}/data/${params.slug}.json`).then( (d) => d.json() ),
      }
    };
  }
</script>
<script>
  import Status from '../../components/Status.svelte';

  export let promise;
  export const BASE_PATH = base;
</script>

<div class="container">
  <div>
    {#await promise}
      <p>Loading...</p>
    {:then data}
      <h1>{data.title} {#if data.verified}<span class="verified" title="I-Adopt verified">&check;</span>{/if}</h1>
      <hr>
      <dl>


        {#if data.keywords && (data.keywords.length > 0)}
          <dt>URL(s)</dt>
          <dd>
            <ul>
              {#each data.url as url}
              <li><a href="{url}" target="_blank">{url}</a></li>
              {/each}
            </ul>
          </dd>
        {/if}

        {#if data.domain && (data.domain.length > 0)}
          <dt>Domain(s)</dt>
          <dd>
            <ul>
              {#each data.domain as domain}
              <li>
                {#if domain.iri}
                  <a href="{domain.iri}" target="_blank">{domain.label}</a>
                {:else}
                  {domain.label}
                {/if}
              </li>
              {/each}
            </ul>
          </dd>
        {/if}

        {#if data.keywords && (data.keywords.length > 0)}
          <dt>Keyword(s)</dt>
          <dd>
            <ul>
              {#each data.keywords as kw}
              <li>{kw}</li>
              {/each}
            </ul>
          </dd>
        {/if}

        <dt>Language(s)</dt>
        <dd>
          <div class="lang">
            {#each data.language as lang}
            <img src="https://unpkg.com/language-icons/icons/{lang}.svg" width="30" alt="{lang}" title="{lang}" />
            {/each}
          </div>
        </dd>

        <dt>Concepts contained</dt>
        <dd>
          <div class="stretched">
            <Status status={data.has.variable}   link={`${BASE_PATH}/list/variable`}    text="Variable" />
            <Status status={data.has.property}   link={`${BASE_PATH}/list/property`}    text="Property" />
            <Status status={data.has.entity}     link={`${BASE_PATH}/list/entity`}      text="Entity" />
            <Status status={data.has.constraint} link={`${BASE_PATH}/list/constraint`}  text="Constraint" />

            <Status status={data.has.method}     link={`${BASE_PATH}/list/method`}      text="Method" />
            <Status status={data.has.unit}       link={`${BASE_PATH}/list/unit`}        text="Unit" />
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
  .lang img {
    margin-left: 1em;
  }
  .verified {
    cursor: help;
  }
</style>