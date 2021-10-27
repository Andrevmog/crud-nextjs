import Header from '../components/Header'
import Layout from '../components/Layout'
import Link from 'next/link'
import Tabela from '../components/Tabela'
import Produto from '../core/Produto'
import Botao from '../components/Botao'
import { useEffect, useState } from 'react'
import Form from '../components/Form'
import ProdutoRepositorio from '../core/ProdutoRepositorio'
import ColecaoProduto from '../data/db/ColecaoProduto'

export default function Inicio() {
    
    const repo: ProdutoRepositorio = new ColecaoProduto()
    
    const [produto,SetProduto] = useState<Produto>(Produto.vazio())
    const [produtos,SetProdutos] = useState<Produto[]>([])

    useEffect(obterTodos, [])

    
    
    function produtoSelecionado(produto: Produto){
        SetProduto(produto)
        setVisivel('form')
    }

    async function produtoExcluido(produto: Produto){
        await repo.excluir(produto)
        setVisivel('tabela')  
    }

    function obterTodos(){
        repo.obterTodos().then(produtos => {
            SetProdutos(produtos)
            setVisivel('tabela')
        })
    }

    function novoProduto(){
        SetProduto(Produto.vazio())
        setVisivel('form')
    }

    async function salvarProduto(produto: Produto){
        await repo.salvar(produto)
        setVisivel('tabela')
    }

    const [visivel,setVisivel] = useState<'tabela' | 'form'>('tabela')

    return (
        <div className={`
            flex justify-center items-center h-screen
            bg-gradient-to-r from-blue-500 to-purple-500
            text-white
        `}>
            <Layout titulo="Cadastro">
                {visivel === 'tabela' ? (
                    <>
                    <div className={`flex justify-end`}>
                        <Botao className="mb-4" onClick={novoProduto}>Novo Produto</Botao>
                    </div>
                    <Tabela produtos={produtos} produtoSelecionado={produtoSelecionado} produtoExcluido={produtoExcluido}></Tabela>
                </>

                ): (
                    <Form produto={produto}
                    cancelado={() => setVisivel('tabela')}
                    produtoMudou={salvarProduto}></Form>
                )}
            </Layout>
        </div>
    )
}