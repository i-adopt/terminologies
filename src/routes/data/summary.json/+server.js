import { promises as Fs } from 'fs';
import Path from 'path';
import { glob as Glob } from 'glob';
import * as Yaml from 'yaml';
import { error, json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET() {

  try {

    // scan for terminology descriptions
    const files = await Glob( '*.yaml', { cwd: 'data' } );

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

    return json(result);

  } catch(e) {
    console.error(e);
    throw error( 500, e.message );
  }
}

export const prerender = true;
