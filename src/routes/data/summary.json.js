import { promises as Fs } from 'fs';
import Path from 'path';
import * as Glob from 'glob-promise';
import * as Yaml from 'yaml';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get() {

  // scan for terminology descriptions
  const files = await Glob.promise( '*.yaml', { cwd: 'data' } );

  // parse all files and extract summary data
  const result = [];
  for( const file of files ) {
    const raw = await Fs.readFile( Path.join( 'data', file ), 'utf-8' ),
          data = Yaml.default.parse( raw );
    
    result.push({
      id:     file.replace('.yaml', ''),
      title:  data.title,
      domain: data.domain,
      type:   data.type,
      has:    data.has,
    });

  }

  return {
    body: result,
  };

}
