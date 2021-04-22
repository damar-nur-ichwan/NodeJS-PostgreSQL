const pool = require('./config')

function Update(table,set, where){
    where = `WHERE ${where}` || ''
const x = pool.query(
    `UPDATE [${table}] SET ${set} ${where}`,
    (error, results) => {
      if (error) {
        throw error
      }
      return `Data Updated!`
  )
  return x
}
module.exports = Update