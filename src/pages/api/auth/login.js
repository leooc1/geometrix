import mysql from "mysql"
export default

    function Login(req, res) {

    const conexao = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "geometrix"
    })

    const { EMAIL, SENHA } = req.body

    conexao.query(`SELECT U.EMAIL, U.SENHA
    FROM USUARIO U
    WHERE U.EMAIL = '${EMAIL}'
    AND U.SENHA = '${SENHA}'`, (erro, resultado) => {
        if (erro){
            res.json('Erro: ' + erro.sqlMessage)
        }
        
        else{
            if(resultado.length === 0){
                res.status(404).send("Tem nada disso aqui não, sai vazado")
            }
            
            else
            res.json(resultado)
        }
               

    })
}