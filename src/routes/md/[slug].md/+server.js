import { promises as Fs } from 'fs';
import Path from 'path';
import { marked } from 'marked';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {

  let data;
  try {

    // load the source
    const filePath = Path.join( `texts/${params.slug}.md` );
    await Fs.access( filePath );
    data = await Fs.readFile( filePath, 'utf-8' );

  } catch(e) {
    throw error( 500, '' );
  }

  return new Response(marked( data ));

}

export const prerender = true;
