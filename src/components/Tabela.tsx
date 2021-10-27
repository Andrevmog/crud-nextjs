import Produto from "../core/Produto";
import { IconeEdicao, IconeLixo } from "./Icons";

interface TabelaProps {
    produtos: Produto[]
    produtoSelecionado?: (produto: Produto) => void
    produtoExcluido?: (produto: Produto) => void
}


export default function Tabela(props: TabelaProps){
    
    const exibirAcoes = props.produtoExcluido || props.produtoSelecionado

    function renderizarCabecalho(){
        return(
            <tr>
                <th className={`text-left p-4`}>Id</th>
                <th className={`text-left p-4`}>Nome</th>
                <th className={`text-left p-4`}>Categoria</th>
                {exibirAcoes ? <th className={`p-4`}>Ações</th> : false}
            </tr>
        )
    }
    
    function renderizarAcoes(produto: Produto){
        return(
            <td className={`flex justify-center`}>
                {props.produtoSelecionado ? (
                    <button onClick={() => props.produtoSelecionado?.(produto)} className={`flex justify-center items-center
                    text-green-600 rounded-full p-2 m-1 hover:bg-purple-50`}>{IconeEdicao}</button>
                ) : false}
                {props.produtoExcluido ? (
                   <button onClick={() => props.produtoExcluido?.(produto)} className={`flex justify-center items-center
                   text-red-500 rounded-full p-2 m-1 hover:bg-purple-50`}>{IconeLixo}</button> 
                ) : false}
            </td>
        )
    }


    function renderizarDados(){
        return props.produtos?.map((produto, i) =>{
            return(
                <tr key={produto.id} className={`
                    ${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}
                `}>
                    <td className={`text-left p-4`}>{produto.id}</td>
                    <td className={`text-left p-4`}>{produto.name}</td>
                    <td className={`text-left p-4`}>{produto.categories}</td>
                    {exibirAcoes ? renderizarAcoes(produto) : false}
                </tr>
            )
        })
    }

    
    return(
        <table className={`
            w-full rounded-xl overflow-hidden
        `}>
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}