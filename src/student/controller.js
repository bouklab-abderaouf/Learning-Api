const pool = require("../../db")
const queries = require("./queries");


const getStudents = (req, res) => { 
  pool.query(queries.getStudents, (error, results) => {
    if(error) throw error;
    else res.status(200).json(results.rows)
  })
}

const getStudentById = (req, res) => {

  pool.query(queries.getStudentById, [req.params.id], (error, results) => {
    if(error) throw error;
    else res.status(200).json(results.rows);
  })
}


module.exports = {
  getStudents,
  getStudentById,
}