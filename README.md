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

# Cosmos samples
## Point operations
[Creating, deleting, upserting, updating, querying documents](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/cosmosdb/cosmos/samples/v3/javascript/ItemManagement.js)

## Bulk operations
[Bulk operations](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/cosmosdb/cosmos/samples/v3/javascript/Bulk.js)

## Basics – creating database/container, AAD auth
- [Database Management](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/cosmosdb/cosmos/samples/v3/javascript/DatabaseManagement.js)
- [Container Management]( https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/cosmosdb/cosmos/samples/v3/javascript/ContainerManagement.js)
- [AAD auth - only if you don't want to use master keys](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/cosmosdb/cosmos/samples/v3/javascript/AADAuth.js)

```

# Cosmos UI for the hackathon databases
Open cosmos.azure.com (make sure that you are not signed in - there should be a "Signin" button and a link allowing to login via connection string

Use this connection string `AccountEndpoint=https://hackathon-recap.documents.azure.com:443/;AccountKey=90NT3CKZPVTGsP3yaa1Khb2ur5rJCUwWZku0MxCK7eC8DQTTzugAmNnsqAHR0QZsDkEgRKBmg2v0ACDbKpvJoQ==;`
