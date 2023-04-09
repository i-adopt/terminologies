import adapter from '@sveltejs/adapter-static';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { glob as Glob } from 'glob';

// are we in dev mode?
const dev = process.argv.includes('dev');

// list of all files to be generated for the data
const files = Glob.sync( '*.yaml', { cwd: 'data'} );
const dataFiles = files.flatMap( (f) => {
  f = f.replace( /.yaml$/, '' );
  return [
    `/data/${f}`,
    `/data/${f}.ttl`,
    `/data/${f}.json`,
  ];
});
const mdFiles = Glob
  .sync( '*.md', { cwd: 'texts'} )
  .map( (f) => `/md/${f}` );


/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      strict: false,
    }),
    paths: {
      base: dev ? '' : '/terminologies',
      relative: false,
    },
    prerender: {
      // crawl: true,
      handleHttpError: 'ignore',
      entries: [
        '*',
        '/data/summary.json',
        '/data/unit2property.json',
        ... dataFiles,
        ... mdFiles,
      ],
    },
  },
  plugins: [ resolve(), commonjs(), ]

};

export default config;
