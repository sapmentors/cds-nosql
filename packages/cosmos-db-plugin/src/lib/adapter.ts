import { CosmosClient } from '@azure/cosmos'
import { DatabaseService } from '@sap/cds'

export class CosmosService extends DatabaseService {
  options?: {
    credentials: any
  }
  init() {
    const result = super.init()

    const credentials = this.options?.credentials

    credentials.userAgentSuffix = credentials.userAgentSuffix || 'CosmosDB-CAPadapter'

   

    const client = new CosmosClient(credentials)

    // this.on('GET', req => {
    //   return 'Dummy'
    // })

    return result
  }
}
