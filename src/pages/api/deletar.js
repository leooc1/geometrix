import mysql from "mysql"
export default

    function Deletar(req, res) {

    const conexao = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "geometrix"
    })

    const {ID} = req.body

    conexao.query(`DELETE
    FROM ELEMENTO E
    WHERE E.ID = ${ID}`, (erro, resultado) =>{
        if(erro){
            res.json("Erro: " + erro.sqlMessage)
        }
        else{
            res.json("Foi")
        }

    })
}