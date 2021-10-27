import Layout from '../../components/Layout'
import { useRouter } from 'next/dist/client/router'

export default function CodigodoProduto(){
    const router = useRouter()

    return(
        <Layout>
            <div> Teste do produto</div>
            <div>{router.query.produto}</div>
        </Layout>
    )
}