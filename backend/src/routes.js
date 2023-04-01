import { Router } from "express";
import { UsuarioController } from "../controllers/UsuarioController.js";

const router = Router();

const usuarioController = new UsuarioController();

router.get("/usuarios", usuarioController.index);
router.post("/usuarios", usuarioController.create);
router.put("/usuarios/:id", usuarioController.update);
router.delete("/usuarios/:id", usuarioController.delete);

export {
    router
}