const LoginHome=()=>{

    const propiedadesImagen={
        urlImagen:"https://i.pinimg.com/736x/cb/af/cc/cbafcc0bef183437e7a6e4dbf1698da4--alien-art-hetalia.jpg",
        width:200,
        height:400
    }


    return (
        <>
            <h1>Login Home</h1>
            <img src={propiedadesImagen.urlImagen}
                 width={propiedadesImagen.width}
                 height={propiedadesImagen.height}
                 alt=""/>
        </>
    )
}
export default LoginHome