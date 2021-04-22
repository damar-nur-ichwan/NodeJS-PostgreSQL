const pool = require('./config')

function Delete(table,where){
    where = `WHERE ${where}` || ''
const x = pool.query(`DELETE FROM [${table}] ${where}`, (error, results) => {
    if (error) {
      throw error
    }
    return `Data Deleted!`
  })
  return x;
}

module.exports = Delete