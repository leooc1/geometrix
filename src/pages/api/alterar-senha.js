import mysql from "mysql"
export default

    function Alterar(req, res) {

    const conexao = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "geometrix"
    })

    const { SENHA, ID } = req.body
    conexao.query(`SELECT U.SENHA
    FROM USUARIO U
    WHERE U.SENHA = "${SENHA}"`, (erro, resultado) => {
        if(erro)
        res.json(erro.sqlMessage)
        if (resultado.length === 0) {
            conexao.query(`UPDATE USUARIO U 
            SET U.SENHA = "${SENHA}"
            WHERE U.ID = ${ID}`, (erro, resultado) => {
            

                if (erro)
                    res.json("Erro: " + erro.sqlMessage)

                else
                    res.json(resultado)
            })
        }
        else
        res.json("Senha igual doidao, vai tomar no cu")
    })



}