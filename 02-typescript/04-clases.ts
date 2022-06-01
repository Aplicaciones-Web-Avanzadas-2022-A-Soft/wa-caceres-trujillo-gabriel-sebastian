class Persona {
    public nombre: string;
    public apellido: string;
    static nombreReferencial: string = "humano";
    protected nombreYApellido = "";

    constructor(
        nombreParam: string,
        apellidoParam: string
    ) {
        this.nombre = nombreParam
        this.apellido = apellidoParam
        this.nombreYApellido = nombreParam + " " + apellidoParam
    }

    private mostrarNombreApellido(): string {
        return this.nombreYApellido
    }

}

class Usuario extends Persona {
    constructor(
        nombreParam: string,
        apellidoParam: string,
        public cedula: string,
        public estadoCivil: string
    ) {
        super(nombreParam, apellidoParam);
    }
}

const adrian = new Usuario(
    "Adrian",
    "Eguez",
    "1723485114",
    "Soltero"
)

