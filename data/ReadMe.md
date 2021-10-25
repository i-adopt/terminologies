# Data Repository

This folder contains the database for the repository.
When adding/editing, please adhere to the following schema and store a file with a corresponding unique ID for your terminology.

## Structure

```yaml
title: Some Example Terminology
url: http://example.org
domain:
  - main domain
topic:
  - topic A
  - topic B
type: ontology
specificity: generic
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
| url            | yes        | a URL                                                                                                                                                                                                           |
| domain         | no         | list of domains                                                                                                                                                                                                 |
| type           | yes        | ontology \| thesaurus \| SKOS vocabulary \| other                                                                                                                                                               |
| specificity    | yes        | generic \| broad \| narrow                                                                                                                                                                                      |
| language       | yes        | list of languages supported                                                                                                                                                                                     |
| has.unit       | yes        | are concepts for units and/or dimensions provided?                                                                                                                                                              |
| has.variable   | yes        | are concepts for variables provided?                                                                                                                                                                            |
| has.ooi        | yes        | are concepts for object of interest provided?                                                                                                                                                                   |
| has.constraint | yes        | are concepts for constraints provided?                                                                                                                                                                          |
| has.matrix     | yes        | are concepts for matrices provided?                                                                                                                                                                             |
| has.context    | yes        | are concepts for context object provided?                                                                                                                                                                       |
| has.method     | yes        | are concepts for methods provided?                                                                                                                                                                              |
| has.values     | yes        | are concepts for categorical values provided (e.g., “blue” for “color”)?                                                                                                                                        |
| formal         | yes        | is the terminology rules by a formal syntax, formal mappings, or ontological relationships between classes of concepts to enable a systematic and detailed description of complex property-object combinations? |
| alignments     | no         | list of existing mappings to other terminologies (please use the ID as provided in this repository, if possible)                                                                                                |
