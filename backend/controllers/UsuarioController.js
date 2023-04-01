import { UsuarioService } from "../services/UsuarioService.js"

class UsuarioController {
    async index(request, response) {
        const usuariosService = new UsuarioService();
        const listarUsuarios = await usuariosService.index();
        return response.json(listarUsuarios);
    }

    async create(request, response) {
        const { nome, email, fone, data_nascimento } = request.body;
        const usuariosService = new UsuarioService();
        const adicionarUsuarios = await usuariosService.create({ nome, email, fone, data_nascimento });
        return response.json(adicionarUsuarios);
    }

    async update(request, response) {
        const { id } = request.params;
        const { nome, email, fone, data_nascimento } = request.body;
        const usuariosService = new UsuarioService();
        const editarUsuarios = await usuariosService.update({ id, nome, email, fone, data_nascimento });
        return response.json(editarUsuarios);
    }

    async delete(request, response) {
        const { id } = request.params;
        const usuariosService = new UsuarioService();
        const deletarUsuario = await usuariosService.delete({ id });
        return response.json(deletarUsuario);
    }
}

export {
    UsuarioController
}