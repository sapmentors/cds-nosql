const { CosmosClient } = require('@azure/cosmos')

const SQLService = require('@cap-js/db-service')
const cds = require('@sap/cds/lib')

class CosmosService extends SQLService {
  init() {
    this.kind = 'cosmos-nosql'
    return super.init(...arguments)
  }

  get factory() {
    return {
      options: {
        ...this.options.pool,
        min: 0,
        testOnBorrow: true,
        acquireTimeoutMillis: 60 * 1000,
        destroyTimeoutMillis: 1000
      },
      create: async () => {
        const cr = this.options.credentials || {}
        const credentials = {
          endpoint: 'https://localhost:8081',
          key: 'C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw==',
          userAgentSuffix: 'cap'
        }
        const dbc = new CosmosClient(credentials)
        if (cr.tenant) {
          return dbc.database(cr.tenant)
        }
        return dbc
      },
      destroy: dbc => {},
      validate: dbc => true
    }
  }

  async set(variables) {}

  prepare(sql) {}

  exec(sql) {}

  static CQN2SQL = class CQN2Comsos extends SQLService.CQN2SQL {}

  async database() {}

  async tenant({ tenant }) {
    const con = await this.factory.create(this.options.credentials)
    try {
      await con.database(tenant).delete()
    } catch (e) {
      /**/
    }
    await con.databases.createIfNotExists({
      id: tenant
    })
    this.options.credentials.tenant = tenant
  }
}

module.exports = CosmosService