const cds = require('@sap/cds')

module.exports = srv => {
  srv.on('reset', async () => {
    let db
    try {
      db = await cds.connect.to('db')
    } catch (err) {
      db = cds.db
    }
    await cds.deploy('./srv/', {}).to(db)
  })
  srv.on('createBeer', async () => {
    const { Beers } = cds.entities('nosql')
    const entries = [{ name: `Beer_${Date.now()}`, abv: 1.0, ibu: 1, brewery: `Brewery_${Date.now()}` }]
    const insertResult = await cds.run(INSERT.into(Beers).entries(entries))
    // eslint-disable-next-line no-console
    console.log(insertResult)
  })
  
}
