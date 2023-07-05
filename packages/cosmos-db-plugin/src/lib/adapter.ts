import { CosmosClient } from '@azure/cosmos'
import { DatabaseService } from '@sap/cds'

import { env } from 'node:process'
import * as assert from 'node:assert'

const { COSMOS_CONNECTION_STRING } = env

export class CosmosService extends DatabaseService {
  init() {
    const result = super.init()

    const connectionString = COSMOS_CONNECTION_STRING

    assert.default(connectionString, 'Cosmos Db connection string is not provided')

    const client = new CosmosClient(connectionString)

    // this.on('GET', req => {
    //   return 'Dummy'
    // })

    return result
  }
}
