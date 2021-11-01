import adapter from '@sveltejs/adapter-static';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import * as Glob from 'glob-promise';
import * as Config from './src/config.js';

// list of all files to be generated for the data
const files = Glob.default.sync( '*.yaml', { cwd: 'data'} );
const dataFiles = files.flatMap( (f) => {
  f = f.replace( /.yaml$/, '' );
  return [
    `/data/${f}`,
    `/data/${f}.ttl`,
    `/data/${f}.json`,
  ];
});
const mdFiles = Glob.default
  .sync( '*.md', { cwd: 'texts'} )
  .map( (f) => `/md/${f}` );


/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: adapter(),
    paths: {
      base:   Config.BASE_PATH,
      assets: '',
    },
    prerender: {
      crawl: true,
      enabled: true,
      onError: 'continue',
      entries: [
        '*',
        '/data/summary.json',
        ... dataFiles,
        ... mdFiles,
      ],
    },
  },
  plugins: [ resolve(), commonjs(), ]
};

export default config;
