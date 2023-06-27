# monorepo for re>≡CAP Hackathon

## cosmos-db

contains the culprit :)

## min-sample

as the name suggest, a minimal sample from the Azure Docs on how to connect and work with Cosmos NoSQL via vanilla Node.js

## get started

```bash
$> cd cosmos-db
$> npm i
$> npm test
```

`cosmos-db/test/**/*` contains a test setup that runs locally _with SQLite_.  
Obviously a Cosmos DB connect needs to be implemented first before the tests can run with bespoken DB.  
When that is achieved, change the `cds` section in `cosmos-db/test/beershop/package.json` from

```json
"cds": {
  "requires": {
      "db": {
        "kind": "sql"
    }
  }
}
```

to

```json
"cds": {
  "requires": {
      "db": {
        "kind": "cosmos-nosql"
    }
  }
}
```