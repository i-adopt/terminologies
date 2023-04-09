import { promises as Fs } from 'fs';
import Path from 'path';
import * as Yaml from 'yaml';
import { error, json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {

  let data;
  try {

    // load the source
    const filePath = Path.join( `data/${params.slug}.yaml` );
    await Fs.access( filePath );
    const raw = await Fs.readFile( filePath, 'utf-8' );
    data = Yaml.default.parse( raw );

    return json(data);

  } catch(e) {

    throw error( 404, 'Terminology not found!' );

  }

}

export const prerender = true;
