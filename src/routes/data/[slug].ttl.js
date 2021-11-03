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
    data = Yaml.default.parse( raw );

    // collect in a dcat file
    data = `
@prefix dcat: <http://www.w3.org/ns/dcat#> .
@prefix dct:  <http://purl.org/dc/terms/> .

<${data.url[0]}> a dcat:Resource ;
${(data.domain ?? []).filter( (d) => d.iri ).map( (d) => `  dcat:theme <${d.iri}> ;` ).join( '\n' )}
${(data.keywords ?? []).map( (kw) => `  dcat:keyword "${kw}"@en ;` ).join( '\n' )}
${(data.url ?? []).map( (url) => `  dcat:landingPage <${url}> ;` ).join( '\n' )}
  dct:title  "${data.title}"@en .
`;

    return {
      body: data,
      headers: {
        // 'Content-Type': 'application/x-turtle',
      }
    };

  } catch(e) {

    return {
      status: 404,
      body: 'Terminology not found!'
    };

  }

}
