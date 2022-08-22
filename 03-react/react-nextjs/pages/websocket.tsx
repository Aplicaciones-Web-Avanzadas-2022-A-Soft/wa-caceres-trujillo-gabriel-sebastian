import Layout from "../components/Layout";
import io from "socket.io-client"
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import MensajeChat, {MensajeChatProps} from "../components/MensajeChat";

const servidorWebsocket = 'http://localhost:8080';
const socket = io(servidorWebsocket);

export default function Websocket() {
    const [isConnected, setIsConnected] = useState(socket.connected)
    const [mensajes, setMensajes] = useState([] as MensajeChatProps[]);

    const {control, register, handleSubmit, formState: {errors, isValid}} = useForm({
        defaultValues: {
            salaId: '',
            nombre: '',
            mensaje: '',
        },
        mode: 'all'
    })
    useEffect(
        () => {
            socket.on('connect', () => {
                setIsConnected(true);
                console.log('Si esta conectado');
            });
            socket.on('disconnect', () => {
                setIsConnected(false);
                console.log('No esta conectado');
            });
            socket.on('escucharEventoHola', (data: { mensaje: string }) => {
                const nuevoMensaje: MensajeChatProps = {
                    mensaje: data.mensaje,
                    nombre: 'Sistema',
                    posicion: 'I'
                };
                setMensajes((mensajesAnteriores) => [...mensajesAnteriores, nuevoMensaje]);
            });
            // useEffect
            socket.on('escucharEventoUnirseSala', (data: { mensaje: string }) => {
                const nuevoMensaje: MensajeChatProps = {
                    mensaje: data.mensaje,
                    nombre: 'Sistema',
                    posicion: 'I'
                };
                setMensajes((mensajesAnteriores) => [...mensajesAnteriores, nuevoMensaje]);
            });
            socket.on('escucharEventoMensajeSala', (data: { mensaje: string, nombre:string, salaId: string }) => {
                console.log('data cliente', data);
                const nuevoMensaje: MensajeChatProps = {
                    mensaje: data.salaId + ' - ' + data.mensaje,
                    nombre: data.nombre,
                    posicion: 'I'
                };
                setMensajes((mensajesAnteriores) => [...mensajesAnteriores, nuevoMensaje]);
            });
        },
        []
    )
    const enviarEventoHola = () => {
        const nuevoMensaje: MensajeChatProps = {
            mensaje: 'Adrian',
            nombre: 'Sistema',
            posicion: 'I'
        };
        socket.emit(
            'hola', // Nombre Evento
            nuevoMensaje, //  Datos evento
            (datosEventoHola) => { // Callback o respuesta del evefnto
                setMensajes((mensajesAnteriores) => [...mensajesAnteriores, nuevoMensaje]);
            }
        )
    }
    const unirseSala = (data) => {
        if (data.mensaje === '') {
            const dataEventoUnirseSala = {
                salaId: data.salaId,
                nombre: data.nombre,
            };
            socket.emit(
                'unirseSala', // Nombre Evento
                dataEventoUnirseSala, //  Datos evento
                () => { // Callback o respuesta del evefnto
                    const nuevoMensaje: MensajeChatProps = {
                        mensaje: 'Bienvenido a la sala ' + dataEventoUnirseSala.salaId,
                        nombre: 'Sistema',
                        posicion: 'I'
                    };
                    setMensajes((mensajesAnteriores) => [...mensajesAnteriores, nuevoMensaje]);
                }
            )
        } else {
            const dataEventoEnviarMensajeSala = {
                salaId: data.salaId,
                nombre: data.nombre,
                mensaje: data.mensaje
            };
            socket.emit(
                    'enviarMensaje', // Nombre Evento
                    dataEventoEnviarMensajeSala, //  Datos evento
                () => { // Callback o respuesta del evefnto
                    const nuevoMensaje: MensajeChatProps = {
                        mensaje: data.salaId + ' - ' + data.mensaje,
                        nombre: data.nombre,
                        posicion: 'D'
                    };
                    setMensajes((mensajesAnteriores) => [...mensajesAnteriores, nuevoMensaje]);
                }
            )
        }

    }
    return (
        <>
            <Layout title="Formulario">
                <h1>Websockets</h1>
                <button className={'btn btn-success'} onClick={() => enviarEventoHola()}>Enviar evento hola</button>

                <div className="row">
                    <div className="col-sm-6">
                        <form onSubmit={handleSubmit(unirseSala)}>
                            <div className="mb-3">
                                <label htmlFor="salaId" className="form-label">Sala ID</label>
                                <input type="text"
                                       className="form-control"
                                       placeholder="EJ: 1234"
                                       id="salaId"
                                       {...register('salaId')}
                                       aria-describedby="salaIdHelp"/>
                                <div id="salaIdHelp" className="form-text">
                                    Ingresa tu idSala.
                                </div>
                                {errors.salaId &&
                                    <div className="alert alert-warning" role="alert">
                                        Tiene errores {errors.salaId.message}
                                    </div>
                                }
                            </div>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <input type="text"
                                       className="form-control"
                                       placeholder="EJ: Adrian"
                                       id="nombre"
                                       {...register('nombre')}
                                       aria-describedby="nombreHelp"/>
                                <div id="nombreHelp" className="form-text">
                                    Ingresa tu nombre.
                                </div>
                                {errors.nombre &&
                                    <div className="alert alert-warning" role="alert">
                                        Tiene errores {errors.nombre.message}
                                    </div>
                                }
                            </div>
                            <div className="mb-3">
                                <label htmlFor="mensaje" className="form-label">Mensaje</label>
                                <input type="text"
                                       className="form-control"
                                       placeholder="EJ: Mensaje"
                                       id="mensaje"
                                       {...register('mensaje')}
                                       aria-describedby="mensajeHelp"/>
                                <div id="mensajeHelp" className="form-text">
                                    Ingresa tu mensaje.
                                </div>
                                {errors.mensaje &&
                                    <div className="alert alert-warning" role="alert">
                                        Tiene errores {errors.mensaje.message}
                                    </div>
                                }
                            </div>
                            <button type="submit"
                                    disabled={!isValid}
                                    className="btn btn-warning">
                                Unirse sala
                            </button>
                            <button type="reset"
                                    className="btn btn-danger">
                                Reset
                            </button>
                        </form>
                    </div>
                    <div className="col-sm-6">

                        {mensajes.map((mensaje, indice) =>
                            <MensajeChat key={indice}
                                         mensaje={mensaje.mensaje}
                                         nombre={mensaje.nombre}
                                         posicion={mensaje.posicion}
                            />)
                        }
                    </div>
                </div>
            </Layout>
        </>
    )
}














