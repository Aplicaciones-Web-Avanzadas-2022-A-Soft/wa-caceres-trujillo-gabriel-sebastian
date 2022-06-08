import Layout from "../components/Layout";
import LoginHome from "../components/home/LoginHome";
import BienvenidaHome from "../components/home/BienvenidaHome";

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
    const estaLoggeado = true


    const desplegarMensaje=()=>{
        if(estaLoggeado){
            return LoginHome()

        }else {
            return BienvenidaHome()
        }
    }

    return (
        <Layout>
            <ul>
                {(arreglo.length>0) &&
                    listaNumeros
                }
            </ul>
            <p>hello {"hola".toUpperCase()}</p>
            Que tal
            <p>{estaLoggeado ? "Bienvenido": "Ingresa al login" }</p>
            <p>{desplegarMensaje()}</p>

            <div>{estaLoggeado ?
                <LoginHome></LoginHome>:
                <BienvenidaHome></BienvenidaHome>
            }
            </div>


        </Layout>
    )

}

export default MiPerfilPage
