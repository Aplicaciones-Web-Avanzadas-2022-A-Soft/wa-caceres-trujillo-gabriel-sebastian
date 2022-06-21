import Layout from '../components/Layout'
import styled from '@emotion/styled'
import CryptoFormulario from "../components/cripto/CryptoFormulario";

const ImagenPrincipal = styled.img`
  width: 300px;
  height: 200px;
`


const Cripto = () => (
    <Layout title="Cripto | Next.js + TypeScript Example">
        <div className="text-center">
            <h1>Cripto Exchange Calculator</h1>
            <ImagenPrincipal
                className="rounded"
                src={'https://media.ambito.com/p/e2e0836c4f57f5ae2890d784df8de512/adjuntos/239/imagenes/038/723/0038723804/criptomonedasjpg.jpg'}
                alt={'Texto Alternativo Criptomoneda'}
            >
            </ImagenPrincipal>
        </div>
        <h2>Seleccion</h2>
        <p>Selecciona tu moneda y criptomoneda</p>
        <CryptoFormulario></CryptoFormulario>


    </Layout>
)

export default Cripto
