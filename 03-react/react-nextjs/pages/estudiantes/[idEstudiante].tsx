// [idEstudiante.tsx]
import Layout from "../../components/Layout";
import {GetStaticPaths, GetStaticProps} from "next";
import {sampleUserData} from "../../utils/sample-data";
import {EstudianteInterface} from "./index";

export default function IdEstudiante(props:
{ estudiante: EstudianteInterface }) {
    console.log('Estudiante en cliente', props.estudiante)
    console.log('propiedades', props);
    return (
        <Layout title={'Id estudiante'}>
            Hola id estudiante
        </Layout>
    )
}
// Definir las rutas permitidas
export const getStaticPaths: GetStaticPaths = async () => {
    const paths = [
        {
            params: {idEstudiante: '1'},
        },

        {
            params: {idEstudiante: '2'},
        }
    ];
    return {paths, fallback: false}
}

// Codigo para cargar informacion EN EL SERVIDOR y enviar al CLIENTE
export const getStaticProps: GetStaticProps = async (
    {params}
) => {
    try {
        // fetch
        const id = params?.idEstudiante
        console.log('Este id encontramos', id);
        const estudiante = {id: id, nombre: 'Adrian'}
        console.log('Consultamos ese estudiante', estudiante);
        return {props: {estudiante, estaActivo:true}}
    } catch (err: any) {
        return {props: {errors: err.message}}
    }
}