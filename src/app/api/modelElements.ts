import utils from "./utils";

type queryPromise = {
    status: number,
    value: JSON | string
}

const modelElements = {

    //listar elementos do usuário
    list: async (id_usuario: number) => {
        const conexao: any = await utils.bdConnection()
        return new Promise<queryPromise>(async (resolve, reject) => {
            await conexao.promise().query(
                `SELECT U.NOME, E.TIPO, E.NOME_OBJETO, E.OBJETO, E.DATA, E.ID
            FROM USUARIO U
            JOIN ELEMENTO E ON (U.ID = E.ID_USUARIO)
            WHERE U.ID = ?`, [id_usuario]
                /* (err: any, result: any) => {
                    if (err) {
                        reject({
                            status: 400,
                            value: "err: " + err.sqlMessage
                        });
                    }
                    else {
                        resolve({
                            status: 201,
                            value: result
                        });
                    }
                } */
            )
                .then(([rows]: any) => {
                    resolve({
                        status: 200,
                        value: rows
                    })
                })
                .catch((err: any) => {
                    reject({
                        status: 400,
                        value: err
                    })
                })
                .then(()=>conexao.end())


        });
    },

    //salvar elemento no banco
    save: async (tipo: number, nome_objeto: string, objeto: JSON, data: string, id_usuario: number) => {
        const conexao: any = await utils.bdConnection()
        return new Promise<queryPromise>(async (resolve, reject) => {
            await conexao.promise().query(`
            INSERT INTO
            ELEMENTO 
            VALUES ('0', ?, ?, ?, ?, ?)`, [tipo, nome_objeto, JSON.stringify(objeto), data, id_usuario])
                /* ,
                    (err: any, result: any) => {
                        if (err) {
                            reject({
                                status: 400,
                                value: "err: " + err.sqlMessage
                            });
                        }
                        else {
                            resolve({
                                status: 200,
                                value: result
                            });
                        }
                    }
                ); */
                .then(([rows]: any) => {
                    resolve({
                        status: 200,
                        value: rows
                    })
                })
                .catch((err: any) => {
                    reject({
                        status: 400,
                        value: err
                    })
                })
                .then(()=>conexao.end())
        });
    },

    // //buscar elemento por data
    dateFilter: async (Data_Inicio: string, Data_Fim: string, id_usuario: number) => {
        const conexao: any = await utils.bdConnection()
        return new Promise<queryPromise>(async (resolve, reject) => {
            await conexao.promise().query(`
        SELECT U.NOME, E.TIPO, E.NOME_OBJETO,  E.OBJETO, E.DATA, E.ID
        FROM USUARIO U
        JOIN ELEMENTO E ON (U.ID = E.ID_USUARIO)
        WHERE E.DATA BETWEEN ? AND ?
        AND U.ID = ?`, [Data_Inicio, Data_Fim, id_usuario])
                /*
                (err: any, result: any) => {
        
                            if (err) {
                                reject({
                                    status: 400,
                                    value: "err: " + err.sqlMessage
                                });
                            }
                            let Inicio = new Date(Data_Inicio)
                            let Fim = new Date(Data_Fim)
        
                            if (Inicio > Fim) {
                                resolve({
                                    status: 410,
                                    value: "Data inicio maior que a final"
                                })
                            }
        
                            else {
                                if (result.length == 0)
                                    resolve({
                                        status: 410,
                                        value: "Achei nada, fodase"
                                    })
        
                                else
                                    resolve({
                                        status: 210,
                                        value: result
                                    })
                            }
                        */
                .then(([rows]: any) => {
                    const Inicio = new Date(Data_Inicio)
                    const Fim = new Date(Data_Fim)
                    if (Inicio > Fim) {
                        resolve({
                            status: 410,
                            value: "Data inicio maior que a final"
                        })
                    }

                    else {
                        if (rows.length == 0)
                            resolve({
                                status: 410,
                                value: "Achei nada, fodase"
                            })

                        else
                            resolve({
                                status: 210,
                                value: rows
                            })
                    }
                })
                .catch((err: any) => {
                    reject({
                        status: 400,
                        value: err
                    })
                })
                .then(()=>conexao.end())
        })
    },

    // //deletar elemento
    delete: async (id_elemento: number) => {
        const conexao: any = await utils.bdConnection()
        return new Promise<queryPromise>(async (resolve, reject) => {
            await conexao.promise().query(`
        DELETE
        FROM ELEMENTO 
        WHERE ID = ?`, [id_elemento])
                /* ,
                        (err: any, result: any) => {
                            if (err) {
                                reject({
                                    status: 400,
                                    value: "err: " + err.sqlMessage
                                });
                            }
                            else {
                                resolve({
                                    status: 200,
                                    value: result
                                });
                            }
        
                        }) */
                .then(([rows]: any) => {
                    resolve({
                        status: 200,
                        value: rows
                    })
                })
                .catch((err: any) => {
                    reject({
                        status: 400,
                        value: err
                    })
                })
                .then(()=>conexao.end())
        })
    },

    // //buscar elemento pelo id
    searchElement: async (id_elemento: number) => {
        const conexao: any = await utils.bdConnection()
        return new Promise<queryPromise>(async (resolve, reject) => {
            await conexao.promise().query(`
        SELECT OBJETO
        FROM ELEMENTO 
        WHERE ID = ?`, [id_elemento])
/* ,
                    (err: any, result: any) => {
                            if (err) {
                                reject({
                                    status: 400,
                                    value: "err: " + err.sqlMessage
                                });
                            }
                            else {
                                if (result.length > 0) {
                                    resolve({
                                        status: 200,
                                        value: result[0].OBJETO
                                    });
                                }
                                else {
        
                                    resolve({
                                        status: 404,
                                        value: '[]'
                                    })
                                }
                            } })*/
                .then(([rows]: any) => {
                    if (rows.length > 0) {
                        resolve({
                            status: 200,
                            value: rows[0].OBJETO
                        });
                    }
                    else {

                        resolve({
                            status: 404,
                            value: '[]'
                        })
                    }
                })
                .catch((err: any) => {
                    reject({
                        status: 400,
                        value: err
                    })
                })
                .then(()=>conexao.end())

        })
    }
}

export default modelElements