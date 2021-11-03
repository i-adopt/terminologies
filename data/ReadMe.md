# Data Repository

This folder contains the database for the repository.
When adding/editing, please adhere to the following schema and store a file with a corresponding unique ID for your terminology.

## Structure

```yaml
title: Some Example Terminology
url:
  - http://example.org
verified: true
domain:
  - label: biological sciences
    iri: http://data.europa.eu/8mn/euroscivoc/803cff73-504b-41ae-9873-1836c76c15d1
topic:
  - topic A
  - topic B
type: ontology
language:
  - en
has:
  unit:       false
  variable:   true
  ooi:        true
  constraint: true
  matrix:     true
  context:    true
  method:     false
  values:     true
formal: true
alignments:
  - other Terminology
  - CF names
  - SWEET
```

## Semantics

| Property       | Mandatory? | Description                                                                                                                                                                                                     |
|----------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| title          | yes        | a label to be shown                                                                                                                                                                                             |
| url            | yes        | a list of URLs                                                                                                                                                                                                  |
| verified       | yes        | has this terminology been verified by I-Adopt?                                                                                                                                                                                          |
| domain         | no         | a list of domains according to https://op.europa.eu/en/web/eu-vocabularies/euroscivoc                                                                                                                           |
| domain.label   |            | label of the domain                                                                                                                                                                                             |
| domain.iri     |            | IRI for the domain's concept                                                                                                                                                                                    |
| keywords       | no         | a list of keywords describing the terminology                                                                                                                                                                   |
| type           | yes        | ontology \| thesaurus \| SKOS vocabulary \| controlled vocabulary \| other                                                                                                                                      |
| language       | yes        | list of languages supported                                                                                                                                                                                     |
| has            | yes        | provides concepts for the following classes                                                                                                                                                                     |
| has.unit       | yes        | are concepts for units and/or dimensions provided?                                                                                                                                                              |
| has.variable   | yes        | are concepts for variables provided?                                                                                                                                                                            |
| has.property   | yes        | are concepts for properties provided?                                                                                                                                                                           |
| has.entity     | yes        | are concepts for entities?                                                                                                                                                                                      |
| has.constraint | yes        | are concepts for constraints provided?                                                                                                                                                                          |
| has.method     | yes        | are concepts for methods provided?                                                                                                                                                                              |
| formal         | yes        | is the terminology ruled by a formal syntax, formal mappings, or ontological relationships between classes of concepts to enable a systematic and detailed description of complex property-object combinations? |
| alignments     | no         | list of existing mappings to other terminologies (please use the ID as provided in this repository, if possible, i.e. the name of the corresponding file) 