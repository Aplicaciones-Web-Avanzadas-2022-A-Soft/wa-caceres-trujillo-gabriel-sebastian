export interface MensajeChatProps {
    nombre: string;
    mensaje: string;
    posicion: 'D' | 'I'
}

export default function MensajeChat(props: MensajeChatProps) {
    const {nombre, mensaje, posicion} = props
    return (
        <>
            {
                posicion === 'D' ?
                    <p className='text-right'>
                        {mensaje}<strong>:{nombre}</strong>
                    </p> :
                    <p className='text-left'>
                        <strong>{nombre}:</strong>{mensaje}
                    </p>
            }
        </>
    )
}