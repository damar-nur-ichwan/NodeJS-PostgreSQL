const pool = require('./config')

function Insert(table,column,where){
  where = `WHERE ${where}` || ''
const x = pool.query(`SELECT (${column}) FROM [${table}] ${where}`, (error, results) => {
  if (error) {
    throw error
  }
  return results
})
  return x
}
module.exports = Insert