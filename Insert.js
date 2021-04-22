const pool = require('./config')

function Insert(table,column,value, where){
where = `WHERE ${where}` || ''
const x = pool.query(`INSERT INTO [${table}] (${column}) VALUES (${value}) ${where}`, (error, results) => {
    if (error) {
      throw error
    }
    return `Data inserted!`
  })
  return x
}
module.exports = Insert