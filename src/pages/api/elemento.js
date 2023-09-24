import mysql from "mysql"
export default

    function Elemento(req, res) {

    const conexao = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "geometrix"
    })

    const data = new Date()
    let ano = data.getFullYear()
    let mes = data.getMonth()+1
    let dia = data.getDate()
    const DATA = `${ano}-${mes<10?'0'+mes:mes}-${dia<10?'0'+dia:dia}`
    const {TIPO, NOME_OBJETO, OBJETO, ID_USUARIO} = req.body

    conexao.query(`INSERT INTO
    ELEMENTO 
    VALUES ('0', '${TIPO}', '${NOME_OBJETO}', '${JSON.stringify(OBJETO)}', '${DATA}', '${ID_USUARIO}')`, (erro, resultado) =>{

        if(erro){
            res.json("Erro: " + erro.sqlMessage)
        }
        else{
            res.json("Foi")
        }
    })
}