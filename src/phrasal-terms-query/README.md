# phrasal-terms-query

To know if a query will add phrasal term expansion

## Setup

Porf forward:

```bash
kl pf phrasal-terms-server-1
```

Logs:

```bash
kubectl logs -f phrasal-terms-server-1
```

Request:

```bash
curl -d '{"text": "processo de Luiz Inacio Lula da Silva e salvador dali"}' -H "Content-Type: application/json" -X POST http://localhost:8080/match
```

Response:

```bash
{"matches":[{"offset":12,"length":25,"synonym_id":0}],"synonyms":[{"value":"Luiz Inacio Lula da Silva","normalized_value":"luiz inacio lula da silva","synonyms":["luiz inacio lula da silva"]}]}%
```

## Running script

```bash
node src/index.js data/metrics.csv
```
