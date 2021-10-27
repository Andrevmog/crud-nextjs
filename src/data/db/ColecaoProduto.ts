import Produto from "../../core/Produto";
import ProdutoRepositorio from "../../core/ProdutoRepositorio";
import connectToDatabase from "../config";
import getProdutos from "../db/getProdutos"

export default class ColecaoProduto implements ProdutoRepositorio {
    

    async salvar(produto: Produto): Promise<Produto>{
        return null
    }

    async excluir(produto: Produto): Promise<void>{
        return null
    }

    async obterTodos(): Promise<Produto[]>{
        const data = await getProdutos();
        return JSON.parse(JSON.stringify(data));
    }

}