const { DatabaseService } = require('@cap-js/db-service')
const { CosmosClient } = require('@azure/cosmos')
const cds = require ('@sap/cds/lib')
const LOG = cds.log('cosmos|db')

class CosmosService extends DatabaseService {
  init() {
    this.on('READ','*', req => {
      const [entity] = req.target.name.match(/[^.]*$/)
      return DummyData[entity]
    })
    this.on('CREATE','*', req => {

    })
    this.on('UPDATE','*', req => {

    })
    this.on('DELETE','*', req => {

    })
    this.on(['BEGIN','COMMIT','ROLLBACK'], req => LOG.debug(req.event))
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
          endpoint: 'https://hackathon-recap.documents.azure.com:443/',
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

  async set(variables) {} // expected by super.begin()
  async database() {} // ???
  async tenant({ tenant }) { // ???
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


const DummyData = {
  Beers: load_csv('db/data/nosql-Beers.csv'),
  Breweries: load_csv('db/data/nosql-Brewery.csv'),
}
function load_csv (filename) {
  const { fs, path } = cds.utils
  let src = fs.readFileSync(path.resolve(cds.root,filename),'utf8')
  let [columns,...rows] = cds.parse.csv(src)
  return rows.map(row => row.reduce((entry,value,i) => {
    entry[columns[i]] = value
    return entry
  },{}))
}

module.exports = CosmosService
