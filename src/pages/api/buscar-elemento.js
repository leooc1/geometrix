import mysql from "mysql"
export default

    function Buscar(req, res) {

    const conexao = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "geometrix"
    })

    const { Data_Inicio, Data_Fim, ID } = req.body

    conexao.query (`SELECT U.NOME, E.TIPO, E.NOME_OBJETO, E.DATA
        FROM USUARIO U
        JOIN ELEMENTO E ON (U.ID = E.ID_USUARIO)
        WHERE E.DATA BETWEEN "${Data_Inicio}" AND "${Data_Fim}"
        AND U.ID = '${ID}'`, (erro, resultado) =>{

        if(erro){
            res.json("Erro: " + erro.sqlMessage)
        }
        let Inicio = new Date(Data_Inicio)
        let Fim = new Date(Data_Fim)

         if(Inicio > Fim){
            res.json("Data inicio maior que a final")
        }

        else{
            if(resultado.length == 0 )
                res.json("Achei nada, fodase")

            else
            res.json(resultado)
        }
    })
}
