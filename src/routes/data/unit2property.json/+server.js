import { promises as Fs } from 'fs';
import Path from 'path';
import { glob as Glob } from 'glob';
import { error, json } from '@sveltejs/kit';
import Parse from 'papaparse';

/** @type {import('./$types').RequestHandler} */
export async function GET() {

  try {

    // scan for terminology descriptions
    const files = await Glob( '*.csv', { cwd: Path.join('data', 'unit2property' ) } );

    // parse all files and summarize data
    const result = [];
    for( const file of files ) {
      const raw = await Fs.readFile( Path.join( 'data', 'unit2property', file ), 'utf-8' ),
            parsed = Parse.parse( raw.trim(), { header: true } );

      const source = file.replace( '.csv', '' ).toUpperCase();
      const data = {};
      for( const el of parsed.data ) {
        if( !(el.unitLabel in data) ) {
          data[el.unitLabel] = {
            source,
            unitLabel: el.unitLabel,
            unit: el.unit,
            quant: []
          };
        }
        data[el.unitLabel].quant.push({
          quant: el.quant,
          quantLabel: el.quantLabel,
        });
      }

      result.push( ... Object.values( data ) );

    }

    return json( result );

  } catch(e) {
    console.error(e);
    throw error( 500, e.message );
  }
}

export const prerender = true;
