# Ontology of units of Measure (OM)

Data retrieved from https://github.com/HajoRijgersberg/OM as of 2021-12-01 (commit: 776c884).

File used in particular:
* https://raw.githubusercontent.com/HajoRijgersberg/OM/master/om-2.0.rdf


## Query

```sparql
PREFIX om: <http://www.ontology-of-units-of-measure.org/resource/om-2/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
select * where { 
	?unit   a                                 om:Unit ;
          (rdfs:label|om:alternativeLabel)  ?unitLabel .
  ?quant  om:commonlyHasUnit                ?unit ;
          (rdfs:label|om:alternativeLabel)  ?quantLabel .
  FILTER( LANG(?unitLabel) in ("en", "") )
  FILTER( LANG(?quantLabel) in ("en", "") )
}

```
