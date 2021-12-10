# QUDT - Quantities, Units, Dimensions and dataTypes

Data retrieved from https://github.com/qudt/qudt-public-repo as of 2021-12-01 (commit: b29186f).

Files used in particular:
* units: https://github.com/qudt/qudt-public-repo/blob/master/vocab/unit/VOCAB_QUDT-UNITS-ALL-v2.1.ttl
* quantity kinds: https://github.com/qudt/qudt-public-repo/blob/master/vocab/quantitykinds/VOCAB_QUDT-QUANTITY-KINDS-ALL-v2.1.ttl


## Query

```sparql
PREFIX qudt: <http://qudt.org/schema/qudt/>
PREFIX quantityKind: <http://qudt.org/vocab/quantitykind/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
SELECT DISTINCT * WHERE {

  # units + quantity kinds
  ?unit   a                           qudt:Unit ;
          (rdfs:label|skos:altLabel)  ?unitLabel ;
          qudt:hasQuantityKind        ?quant .
  ?quant  rdfs:label                  ?quantLabel .

  # language
  FILTER( LANG(?unitLabel) in ("en", "") )

  # remove currencies and counts
  FILTER NOT EXISTS {
      VALUES ?excludedQuant { quantityKind:Currency quantityKind:Dimensionless }
      ?unit qudt:hasQuantityKind ?excludedQuant.
  }
}
```
