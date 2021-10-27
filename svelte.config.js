import adapter from '@sveltejs/adapter-static';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: adapter(),
    prerender: {
      crawl: true,
      enabled: true,
      onError: 'continue',
      entries: [
        '*',
      ],
    },
  },
  plugins: [ resolve(), commonjs(), ]
};

export default config;
