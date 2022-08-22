import Layout from "../components/Layout";
import BienvenidaHome from "../components/home/BienvenidaHome";
import LoginHome from "../components/home/LoginHome";


// function mostrarLogin(){
//     return (
//         <>
//             <h1> login </h1>
//             <p>Campos login</p>
//         </>
//     )
// }
//
// function mostraMensajeBienvenida(){
//     return (
//         <>
//             <h1> Bienvenido </h1>
//             <p>Registrate por favor</p>
//         </>
//     )
// }

const MiPerfilPage = () => {

    const arreglo = [1, 2, 3, 4, 5, 6, 7, 8];

    const listaNumeros = arreglo
        .filter((a)=> a < 5)
        .map((a)=> {
            return (
                <li>
                    {a}
                </li>
            )
        });

    const estaLogeado = true;

    const desplegarMensaje = ()=>{
        if(estaLogeado){
            return LoginHome({
                color:'black',
                backgroundColor: 'orange',
                propiedadesImagen: {
                    width: 400,
                    height: 200,
                    urlImagen: 'https://i.blogs.es/e1feab/google-fotos/450_1000.jpg'
                }
            })
        }else{
            return BienvenidaHome()
        }
    }

    // @ts-ignore
    return (
        <Layout>
            <p>hello {'Adrian'.toUpperCase()}</p>
            <ul>
                { listaNumeros}
            </ul>
            { /* <p>{CONDICION ? VERDADERA : FALSA}</p> */ }
            {/*<p>{estaLogeado ? 'Bienvenido' : 'Login'}</p>*/}
            {/*<p>{estaLogeado ? mostrarLogin() : mostraMensajeBienvenida()}</p>*/}
            <p>{desplegarMensaje()}</p>

            <ul>
                { (arreglo.length > 0) &&
                    <>
                        <li>Hola amigos</li>
                    </>
                }
            </ul>

            <ul>
                { (arreglo.length > 10) &&
                    listaNumeros
                }
            </ul>


            <div>{ estaLogeado ?
                <LoginHome propiedadesImagen={
                    {
                    width: 300,
                    height: 150,
                    urlImagen: 'https://media.istockphoto.com/photos/plaza-de-san-francisco-in-old-town-quito-picture-id975466144?k=20&m=975466144&s=612x612&w=0&h=fgPROePmDD29FV8Bx2z-X7ISUfytIplCjvuda-0euII='
                    }
                } color={'green'} backgroundColor={'black'}>

                </LoginHome> :
                <BienvenidaHome></BienvenidaHome>
            }</div>

        </Layout>
    )
}

export default MiPerfilPage