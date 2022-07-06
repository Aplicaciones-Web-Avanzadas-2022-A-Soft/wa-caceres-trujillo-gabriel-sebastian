import {EstudianteInterface} from "../../pages/estudiantes";

export async function TodosHttp(id?:string) : Promise<EstudianteInterface[]>{
    const url = `https://jsonplaceholder.typicode.com/todos${id ? '/' + id : ''}`;
    const respuesta = await fetch(url);
    return await respuesta.json();
}