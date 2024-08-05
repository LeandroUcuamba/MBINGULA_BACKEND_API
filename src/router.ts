import { Router } from "express";
import { createAccess, deleteAccess, getAllAccessess } from "./controller/AccessController";
import { createUser, deleteManyUser, deleteUser, getAllUser, getUser, getUserByName, getUserIsLogged, updateUser, updateUserIsLogged } from "./controller/UserController";
import { signIn } from "./controller/SessionController";
import { authMiddleware } from "./middleware/AuthMiddleware";
import { createSector, deleteSector, getAllSectores, updateSector } from "./controller/SectorController";
import { createFuncionario, deleteFuncionario, deleteManyFuncionario, getAllFuncionarios, getFuncionario, getFuncionarioByName, updateFuncionario } from "./controller/FuncionarioController";
import { createItemCardapio, deleteItemCardapio, getItemByAvailable, getItemCardapio, getItemCardapioByPriceInterval, updateItemCardapio } from "./controller/ItemCardapioController";
import { createAvaliacao, deleteAllAvaliacao, deleteAvaliacao, getAllAvaliacao, updateAvaliacao } from "./controller/AvaliacaoController";
import { createServico, deleteAllServico, deleteServico, getAllServico, updateServico } from "./controller/ServicoRestauranteController";
import { createFornecedor, deleteFornecedor, getAllFornecedor, getFornecedor, getFornecedorByName, getFornecedorByTelefone, updateFornecedor } from "./controller/FornecedorController";
import { createProduto, deleteProduto, getAllProdutos, getProduto, getProdutoByName, updateProduto } from "./controller/ProdutoController";
import { createEstoque, deleteEstoque, getAllEstoques, getEstoque, getEstoqueByProdutoName, updateEstoque } from "./controller/EstoqueController";
import { createMesa, deleteMesa, getAllMesas, getMesaByLugares, getMesaByNumero, updateMesa } from "./controller/MesaController";
import { createAtividadeCasa, deleteAtividadeCasa, getAllAtividadesCasa, updateAtividadeCasa } from "./controller/AtividadecasaController";
import { createReservaMesa, getAllMesasDisponiveis, getAllMesasJaReservadas } from "./controller/ReservaMesaController";

import uploadConfigs from './config/multer'
import multer from "multer";
const upload = multer(uploadConfigs);

export const router = Router();

//Utilizador
router.post("/user", createUser);
router.delete("/delete-users", deleteManyUser);
router.delete("/delete-user/:id", deleteUser);
router.get("/getAllUsers", getAllUser);
router.get("/getLoginUser", authMiddleware(["adm"]), getUserIsLogged);
router.get("/get-user/:id", getUser);
router.get("/getUserByName/:name", getUserByName);
router.put("/update-user/:id", updateUser);
router.put("/update-user", authMiddleware(["adm", "normal"]), updateUserIsLogged);

//Acesso - roles
router.post("/create-access", createAccess);
router.get("/accessess", getAllAccessess);
router.delete("/delete-access/:id", deleteAccess);

//Login
router.post("/sign-in", signIn);

//Sector
router.post("/create-sector", createSector);
router.get("/sectores", getAllSectores);
router.delete("/delete-sector/:id", deleteSector);
router.put("/update-sector/:id", updateSector);

//Funcionario
router.post("/create-funcionario", createFuncionario);
router.delete("/delete-funcionario/:id", deleteFuncionario);
router.delete("/delete-funcionarios", deleteManyFuncionario);
router.get("/getAllFuncionarios", getAllFuncionarios);
router.get("/get-funcionario/:id", getFuncionario);
router.get("/getFuncionarioByName/:name", getFuncionarioByName);
router.put("/update-funcionario/:id", updateFuncionario);

//Item Cardapio

router.post("/create-ItemCardapio", upload.array("Image"), createItemCardapio);
router.get("/getItemsCardapio", getItemCardapio);
router.get("/getItemByAvailable/:disponivel", getItemByAvailable);
router.get("/getItemsCardapioByInterval/:price_min/:price_max", getItemCardapioByPriceInterval); //////////////////////////////
router.delete("/delete-itemCardapio/:id", deleteItemCardapio);
router.put("/update-itemCardapio/:id", updateItemCardapio);

//Avaliacao
router.post("/create-avaliacao", createAvaliacao);
router.get("/getAvaliacoes", getAllAvaliacao);
router.delete("/delete-avaliacao/:id", deleteAvaliacao);
router.delete("/deleteAllAvaliacao", deleteAllAvaliacao);
router.put("/update-avaliacao/:id", updateAvaliacao);

//servico restaurante
router.post("/create-servico", createServico);
router.get("/getServico", getAllServico);
router.delete("/delete-servico/:id", deleteServico);
router.delete("/deleteAllservico", deleteAllServico);
router.put("/update-servico/:id", updateServico);

//fornecedor
router.post("/create-fornecedor", createFornecedor);
router.get("/getFornecedor/:id", getFornecedor);
router.get("/getAllFornecedor", getAllFornecedor);
router.get("/getFornecedorByName/:nome", getFornecedorByName);
router.get("/getFornecedorByPhone/:telefone", getFornecedorByTelefone);
router.delete("/delete-fornecedor/:id", deleteFornecedor);
router.put("/update-fornecedor/:id", updateFornecedor);

//Produto
router.post("/create-produto", createProduto);
router.get("/getProduto/:id", getProduto);
router.get("/getAllProduto", getAllProdutos);
router.get("/getProdutoByName/:nome", getProdutoByName);
router.delete("/delete-produto/:id", deleteProduto);
router.put("/update-produto/:id", updateProduto);

//Estoque
router.post("/create-estoque", createEstoque);
router.get("/getAllEstoques", getAllEstoques);
router.get("/getEstoque/:id", getEstoque);
router.get("/getEstoqueByProdutoName/:nome", getEstoqueByProdutoName);
router.delete("/delete-estoque/:id", deleteEstoque);
router.put("/update-estoque/:id", updateEstoque);

//Mesa
router.post("/create-mesa", createMesa);
router.get("/getAllMesas", getAllMesas);
router.get("/getMesaByNumero/:numero", getMesaByNumero);
router.get("/getMesaByLugares/:lugares", getMesaByLugares)
router.delete("/delete-mesa/:id", deleteMesa);
router.put("/update-mesa/:id", updateMesa);

//Atividades de casa
router.post("/create-atividade", createAtividadeCasa);
router.get("/getAllAtividades", getAllAtividadesCasa);
router.delete("/delete-atividade/:id", deleteAtividadeCasa);
router.put("/update-atividade/:id", updateAtividadeCasa);

//Reservar Mesa
router.patch("/create-reserva/:numero", createReservaMesa);
router.get("/getAllAvailableTable", getAllMesasDisponiveis);
router.get("/getAllNotAvailableTable", getAllMesasJaReservadas);