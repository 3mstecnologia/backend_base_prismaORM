import { Router } from "express";
import { CategoriaController } from "./controllers/categoriaController";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

const criarCategoria = new CategoriaController();

router.post("/categoriaCriar", criarCategoria.criar);
router.post("/categoriaListar", criarCategoria.listar);
router.post("/categoriaListarUma", criarCategoria.ListarUma);

export { router };
