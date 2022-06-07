import Layout from "../components/Layout";

const MiPerfilPage = () =>{

    const arreglo= [1,2,3,4,5,6,7,8];

    const listaNumeros = arreglo
        .filter((a)=>a<5)
        .map((a)=>{
            return(
                <li>
                    {a}
                </li>
            )
        })

    return (
        <Layout>
            <p>hello {"hola".toUpperCase()}</p>
            Que tal
            <ul>
                {listaNumeros}
            </ul>
        </Layout>
    )
    
}

export default MiPerfilPage
