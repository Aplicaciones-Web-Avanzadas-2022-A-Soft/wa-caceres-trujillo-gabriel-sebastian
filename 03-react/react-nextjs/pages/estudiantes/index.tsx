import Layout from "../../components/Layout";
import {useEffect, useState} from "react";

export interface EstudianteInterface {
    id: number;
    nombre: string;
}

export default function Estudiantes() {
    const [arregloEstudiantes, setArregloEstudiantes] = useState([] as EstudianteInterface[])
    useEffect( // Iniciar el componente
        () => {
            // consulta API ...
            const arregloConsultado = [
                {id: 1, nombre: 'Adrian'},
                {id: 2, nombre: 'Vicente'},
            ] as EstudianteInterface[];
            setArregloEstudiantes([...arregloEstudiantes, ...arregloConsultado])
        },
        []
    )

    return (
        <Layout title={'Estudiantes'}>
            <ul>
                {arregloEstudiantes.map(
                    (estudiante) => {
                        return (<li key={estudiante.id}>{estudiante.nombre}</li>)
                    }
                )}
            </ul>
        </Layout>
    )
}