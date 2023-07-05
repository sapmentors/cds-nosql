import cds from '@sap/cds'
const { expect } = cds.test(__dirname + '/beershop')

//> this is the goal:
// const project = require('path').resolve(__dirname, 'beershop')
// const { GET, POST, PUT, PATH, DELTE, expect, data } = cds.test('serve', '--project', project).verbose()
//> note that all of the above requires to have
//> /cosmos-db/test/beershop/package.json > cds.requires.db.kind = "cosmos-nosql"

describe('CRUD operations', () => {
  it('general', async () => {
    const resolved = await Promise.resolve(42)
    expect(resolved).to.eql(42)
  })
  it.todo('should read Beers and Breweries')
  it.todo('should create a Beer and add its Brewery')
  it.todo("should change a Beer's master data")
  it.todo('should delete a Beer')
})
