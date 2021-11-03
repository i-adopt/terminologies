import { promises as Fs } from 'fs';
import Path from 'path';
import marked from 'marked';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params }) {

  let data;
  try {

    // load the source
    const filePath = Path.join( `texts/${params.slug}.md` );
    await Fs.access( filePath );
    data = await Fs.readFile( filePath, 'utf-8' );

  } catch(e) {
    data = '';
  }

  return {
    body: marked( data ),
  };

}
