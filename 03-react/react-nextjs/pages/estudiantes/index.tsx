import Layout from "../../components/Layout";
import {useEffect, useState} from "react";
import {TodosHttp} from "../../functions/http/todos.http";

export interface EstudianteInterface {
    id?: number;
    nombre?: string;
    userID?: number;
    title?: string;
    completed?: boolean;
}

export default function Estudiantes() {
    const [arregloEstudiantes, setArregloEstudiantes] = useState([] as EstudianteInterface[])
    useEffect( // Iniciar el componente
        () => {
            // consulta API ...
            consultarTodos();
        },
        []
    )

    const consultarTodos = async () =>{
        const resultado = await TodosHttp();
        setArregloEstudiantes([...arregloEstudiantes,...resultado])
    }

    return (
        <Layout title={'Estudiantes'}>
            <ul>
                {arregloEstudiantes.map(
                    (estudiante) => {
                        return (<li key={estudiante.id}>
                            {estudiante.id}-
                            <a href={'/estudiantes/' + estudiante.id}>
                                {estudiante.title}
                            </a>
                        </li>)
                    }
                )}
            </ul>
        </Layout>
    )
}