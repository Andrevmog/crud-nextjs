interface BotaoProps{
    cor?: 'green' | 'blue' | 'gray'
    children: any
    className?: string
    onClick?: () => void
}

export default function Botao(props: BotaoProps){
    const cor = props.cor ?? 'blue'
    return(
        <button onClick={props.onClick} className={`
            text-white px-4 py-2 rounded-md
            bg-gradient-to-r from-${cor}-400 to-${cor}-700
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}