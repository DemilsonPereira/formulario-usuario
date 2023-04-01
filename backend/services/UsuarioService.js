import { databseConnect as db } from "../database/database.js";

class UsuarioService {
    async index() {
        const listarUsuarios = await new Promise((resolve, reject) => {
            const listarUsuarios = "select * from usuarios";
            db.query(listarUsuarios, (err, data) => {
                if (err) reject(err);
                else resolve(data);
            });
        });
        return listarUsuarios;
    }

    async create({ nome, email, fone, data_nascimento }) {
        const adicionarUsuarios = await new Promise((resolve, reject) => {
            const adicionarUsuarios = "insert into usuarios(`nome`,`email`,`fone`,`data_nascimento`) values(?)";
            const valores = [
                nome,
                email,
                fone,
                data_nascimento
            ];
            db.query(adicionarUsuarios, [valores], (err, data) => {
                if (err) reject(err);
                else resolve("Usuário adicionado com sucesso!");
            });
        });
        return adicionarUsuarios;
    }

    async update({ id, nome, email, fone, data_nascimento }) {
        const editarUsuarios = await new Promise((resolve, reject) => {
            const usuarioId = id;
            const editarUsuarios =
                "update usuarios set `nome` = ?,`email` = ?,`fone` = ?,`data_nascimento` = ? where id = ?";
            const valores = [
                nome,
                email,
                fone,
                data_nascimento
            ];
            db.query(editarUsuarios, [...valores, usuarioId], (err, data) => {
                if (data.affectedRows === 0) {
                    resolve("Usuário não encontrado!.");
                }
                if (err) reject(err);
                else resolve("Usuário atualizado com sucesso!");
            });
        });
        return editarUsuarios;
    }

    async delete({ id }) {
        const deletarUsuario = await new Promise((resolve, reject) => {
            const usuarioId = id;
            const deletarUsuario = "delete from usuarios where id = ?";
            db.query(deletarUsuario, [usuarioId], (err, data) => {
                if (data.affectedRows === 0) {
                    resolve("Usuário não encontrado!.");
                }
                if (err) reject(err);
                else resolve("Usuário removido com sucesso!");
            });
        });
        return deletarUsuario;
    }
}

export {
    UsuarioService
}