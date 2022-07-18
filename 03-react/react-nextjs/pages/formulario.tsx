import Layout from "../components/Layout";
import {useState} from "react";

import {useForm, Controller} from "react-hook-form";

import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {List, ListInput} from "konsta/react";
import {Accessibility} from "@mui/icons-material";

type FormularioEjemplo = {
    nombre: string;
    estadoCivil: string;
    TvShow:string;
}

export default function Formulario() {

    const [nombre, setNombre] = useState('');

    const {control, register, handleSubmit, formState: {errors, isValid}} = useForm<FormularioEjemplo>({
        defaultValues: {
            nombre: 'A',
            estadoCivil: ""
        },
        mode: "onTouched"
    })

    const controlarSubmit = (eventoSubmit) => {
        eventoSubmit.preventDefault()
        console.log('Submit', eventoSubmit);
        console.log('nombre', nombre)
    }

    const controlarSubmitRHF = (data) => {
        console.log("data", data)
    }

    return (
        <>
            <Layout title="Formulario">

                <h1>Form con Material UI</h1>

                <h1>React con Hook Form</h1>
                <form onSubmit={handleSubmit(controlarSubmitRHF)}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text"
                               className="form-control"
                               placeholder="EJ: Adrian"
                               id="nombre"
                               {...register("nombre", {
                                   required: {value: true, message: "Requerido"},
                                   maxLength: {value: 20, message: "Longitud Maxima 20"},
                                   minLength: {value: 5, message: "Longitud Minima 5"},
                                   validate: {
                                       soloNumeros: (valorActual) => {
                                           if (Number.isNaN(+valorActual)) {
                                               return "Ingrese solo números";
                                           } else {
                                               return true;
                                           }
                                       }
                                   }
                               })}
                               aria-describedby="nombreHelp"/>
                        <div id="nombreHelp" className="form-text">
                            Ingresa tu nombre.
                        </div>
                        {errors.nombre &&
                            <div className="alert alert-warning" role="alert">
                                Tiene Errores: {errors.nombre.message}
                            </div>
                        }
                        <FormControl fullWidth/>

                        <InputLabel id="estadoCivilLabelId">Estado Civil</InputLabel>

                        <Controller
                            control={control}
                            rules={
                                {
                                    required: {value: true, message: "Requerido"}
                                }
                            }
                            name="estadoCivil"
                            render={({field: {onChange,onBlur, value}}) => {
                                return <Select
                                    labelId="estadoCivilLabelId"
                                    id="estadoCivilId"
                                    value={value}
                                    label="Estado Civil"
                                    onChange={onChange}
                                    onBlur={onBlur}
                                >
                                    <MenuItem value={""}>-Seleccione Uno-</MenuItem>
                                    <MenuItem value={"casado"}>Casado</MenuItem>
                                    <MenuItem value={"soltero"}>Soltero</MenuItem>
                                    <MenuItem value={"divorciado"}>Divorciado</MenuItem>

                                </Select>
                            }}></Controller>
                        {errors.estadoCivil &&
                            <div className="alert alert-warning" role="alert">
                                Tiene Errores: {errors.estadoCivil.message}
                            </div>
                        }
                    </div>

                    <div className={"mb-3"}>
                        <FormControl fullWidth>
                            <br/>
                            <h1>KONSTA UI</h1>
                            <Controller
                                control={control}
                                rules={{required: {value: true, message: 'TvShow requerido'}}}
                                name="TvShow"
                                render={({field: {onChange, onBlur, value}}) => {
                                    return <List>
                                        <ListInput
                                            onChange={onChange}
                                            onBlur={onBlur}
                                            label="TV Show"
                                            type="text"
                                            placeholder="Your favorite Tv Show"
                                            info="Type somehing to see"
                                            media={<Accessibility/>}
                                        />
                                    </List>
                                }}
                            />
                            {errors.TvShow &&
                                <div className={"alert alert-warning"} role={"alert"}>
                                    Tiene errores {errors.TvShow.message}
                                </div>
                            }
                        </FormControl>
                    </div>

                    <button type="submit"
                            className="btn btn-primary"
                            disabled={!isValid}>
                        Submit
                    </button>

                </form>

                <br/>

                <h1>Formulario con React</h1>
                <form onSubmit={controlarSubmit}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text"
                               className="form-control"
                               onChange={(e) => setNombre(e.target.value)}
                               placeholder="EJ: Adrian"
                               value={nombre}
                               id="nombre"
                               aria-describedby="nombreHelp"/>
                        <div id="nombreHelp" className="form-text">
                            Ingresa tu nombre.
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>



            </Layout>
        </>
    )
}