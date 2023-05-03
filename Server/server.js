const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');
const {SequelizeAuto} = require("sequelize-auto");
const {initModels} = require("C:\\Users\\arnau_sq0x0sm\\Desktop\\Examen\\UF2_ExArnauLloverasMorales\\src\\app\\models\\init-models");
const {Sequelize} = require("sequelize");

const auto = new Sequelize('universitat', 'root', 'JanGuapo123', {
  host: 'localhost', dialect: 'mysql'
});

const models = initModels(auto);


app.use(cors());
app.use(express.json());
port = 3080;
app.listen(port, () => {
  console.log(__dirname)
  console.log(`El servidor escolta per el port:: ${port}`)
})


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'JanGuapo123',
  database: 'universitat'
});

app.post('/alumnes/modifCorreu', (req,res)=>{
  function modifCorreu() {
    connection.query(`ALTER TABLE departament MODIFY dept_codi VARCHAR(30)`, function (error, results, fields) {
      if (`columnType = 'varchar(30)'`) {
        console.log("Ja es de 30 caràcters")
      }else if(error){
        console.log(error)
      } else {
        console.log("Camp canviat")
      }
    });
  }
  modifCorreu();
})

app.get('/llistaAssigInfo',(req, res)=>{
  connection.query('SELECT assig_codi, assig_nom\n' +
    'FROM professor, departament, assignatures_professor, assignatures\n' +
    'WHERE assig_codi=assigprof_assig_codi\n' +
    'AND prof_dni=assigprof_prof_dni\n' +
    'AND prof_dept_codi=dept_codi\n' +
    'AND dept_nom= "INFORMATICA I MATEMATICA APLICADA"\n' +
    'GROUP BY assig_codi, assig_nom', (err, data)=>{
    if(err) throw err;
    console.log("Informacio: ", data);
    connection.end();
    res.json(data);
  })
})

app.post('/nouDepartament', (req, res)=>{
  const {codi, nom, ubicacio, tel, dni} = req.body
  const attr = {DEPT_CODI: codi, dept_nom: nom, dept_ubicacio: ubicacio, dept_telefon: tel, dept_prof_dni: dni}
  const dept = models.departament.create(attr)
  console.log(dept)
})


