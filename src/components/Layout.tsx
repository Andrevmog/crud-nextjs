import Link from 'next/link'
import Header from './Header'

interface LayoutProps{
    titulo: string
    children: any
}

export default function Layout(props: LayoutProps){
    return (
        
        <div className={`
            flex flex-col w-2/3
            bg-white text-gray-800 rounded-md
        `}>
            <Header>{props.titulo}</Header>
            <div className={`p-6`}>
                {props.children}
            </div>
        </div>
    )
}