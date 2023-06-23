---
page_type: sample
languages:
- javascript
products:
- azure
description: "Azure Cosmos DB is a globally distributed multi-model database."
urlFragment: azure-cosmos-db-sql-api-nodejs-getting-started
---

# Developing a Node.js app using the Azure Cosmos DB SQL API
Azure Cosmos DB is a globally distributed multi-model database. One of the supported APIs is the SQL API, which provides a JSON document model with SQL querying and JavaScript procedural logic. This sample shows you how to use Azure Cosmos DB with the SQL API to store and access data from a Node.js application.

## Running this sample
* Before you can run this sample, you must have the following perquisites:
	* An active Azure Cosmos DB account - If you don't have an account, refer to the [Create an Azure Cosmos DB account](https://docs.microsoft.com/en-us/azure/cosmos-db/create-sql-api-nodejs#create-a-database-account) article.
	* [Node.js](https://nodejs.org/en/) version v0.10.29 or higher.
	* [Git](http://git-scm.com/).


1. We created a sample Node.js app connected to your "Items" collection. Download and extract the app.
 from the Azure Cosmos DB portal.

2. Change directories to the repo using `cd sql-nodejs` or open with your favorite IDE (Visual Studio/Visual Studio Code).  

3. There is no need to change the credentials from the extracted app.  We have entered the Azure Cosmos DB endpoint URL and the key into your `app.js` file.

4. Run `npm install` in a terminal to install required npm modules
 
5. Run `node app.js` in a terminal to start your start your node application.

## About the code
The code included in this sample is intended to get you quickly started with a Node.js console application that connects to Azure Cosmos DB with the SQL API.

## More information

- [Azure Cosmos DB](https://docs.microsoft.com/azure/cosmos-db/introduction)
- [Azure Cosmos DB: SQL API](https://docs.microsoft.com/en-us/azure/cosmos-db/sql-api-introduction)
- [Azure Cosmos DB Node.js SDK](https://docs.microsoft.com/en-us/azure/cosmos-db/sql-api-sdk-node)
- [Azure Cosmos DB Node.js SDK Reference Documentation](http://azure.github.io/azure-documentdb-node/)
