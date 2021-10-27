import { useState } from "react";
import Produto from "../core/Produto";
import Botao from "./Botao";
import Input from "./Input";

interface FormProps {
    produto: Produto
    produtoMudou?: (produto: Produto) => void
    cancelado?: () => void
}

export default function Form(props: FormProps){
    const Id = props.produto?.id ?? null
    const [nome,SetNome] = useState(props.produto?.name ?? '')
    const [id,SetId] = useState(props.produto?.id ?? 0)
    const [image,SetImage] = useState(props.produto?.image ?? '')
    const [categories,SetCategories] = useState(props.produto?.categories ?? '')
    const [price,SetPrice] = useState(props.produto?.price ?? 0)
    const [brand,SetBrand] = useState(props.produto?.brand ?? '')
    return(
        <div>
            <Input texto="Nome" valor={nome} valorMudou={SetNome} className="mb-2"/>
            <Input texto="Id" tipo="number" valor={id} valorMudou={SetId} className="mb-2" />
            <Input texto="Imagem" valor={image} valorMudou={SetImage} className="mb-2"/>
            <Input texto="Categoria" valor={categories} valorMudou={SetCategories} className="mb-2"/>
            <Input texto="Preço" tipo="number" valor={price} valorMudou={SetPrice} className="mb-2"/>
            <Input texto="Marca" valor={brand} valorMudou={SetBrand} />
            <div className={`mt-3 flex justify-end`}>
                <Botao cor="blue" className="mr-2" onClick={() => props.produtoMudou?.(new Produto(+id,image,nome,categories,+price,brand))}>Salvar</Botao>
                <Botao onClick={props.cancelado} cor="gray">Cancelar</Botao>
            </div>
        </div>
    )
}