import { promises as Fs } from 'fs';
import Path from 'path';
import * as Glob from 'glob-promise';
import Parse from 'papaparse';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get() {

  // scan for terminology descriptions
  const files = await Glob.promise( '*.csv', { cwd: Path.join('data', 'unit2property' ) } );

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

  return {
    body: result,
  };

}
