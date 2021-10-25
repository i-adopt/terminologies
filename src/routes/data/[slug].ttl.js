import { promises as Fs } from 'fs';
import Path from 'path';
import * as Yaml from 'yaml';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params }) {

  let data;
  try {

    // load the source
    const filePath = Path.join( `data/${params.slug}.yaml` );
    await Fs.access( filePath );
    const raw = await Fs.readFile( filePath, 'utf-8' );
    data = Yaml.parse( raw );

    // collect in a dcat file
    data = `

`;

  } catch(e) {
    data = '';
  }

  return {
    body: data,
  };

}
