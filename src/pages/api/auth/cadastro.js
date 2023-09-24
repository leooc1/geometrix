import mysql from "mysql"
export default

    function Cadastrar(req, res) {

    const conexao = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "geometrix"
    })

    const data = new Date()
    let ano = data.getFullYear()
    let mes = data.getMonth() + 1
    let dia = data.getDate()
    const DATA = `${ano}-${mes < 10 ? '0' + mes : mes}-${dia < 10 ? '0' + dia : dia}`

    const { NOME, EMAIL, SENHA } = req.body
    conexao.query(`SELECT U.EMAIL
    FROM USUARIO U
    WHERE U.EMAIL = '${EMAIL}'`, (erro, resultado) => {
        if (erro) {
            res.json('Erro: ' + erro.sqlMessage)
        }
        else {
            if (resultado.length === 0) {
                conexao.query(`INSERT INTO 
                USUARIO 
                VALUES('0', '${NOME}', '${EMAIL}', '${SENHA}', '${DATA}')`, (erro, resultado) => {
                    if (erro) {
                        res.json('Erro: ' + erro.sqlMessage);
                    }
                    else {
                        res.json("Foi");
                    }
                })
            }
            else
                res.json("Tem esse emei já, cabaço")
        }
    })
}
