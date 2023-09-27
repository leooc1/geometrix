import mysql from "mysql"
export default

    function Listar(req, res) {

    const conexao = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "geometrix"
    })

    const { ID } = req.body

    conexao.query (`SELECT U.NOME, E.TIPO, E.NOME_OBJETO, E.DATA
        FROM USUARIO U
        JOIN ELEMENTO E ON (U.ID = E.ID_USUARIO)
        WHERE U.ID = '${ID}'`, (erro, resultado)=>{
            if(erro){
                res.json("Erro: " + erro.sqlMessage)
            }
            else
            res.json(resultado)

        })
    }
