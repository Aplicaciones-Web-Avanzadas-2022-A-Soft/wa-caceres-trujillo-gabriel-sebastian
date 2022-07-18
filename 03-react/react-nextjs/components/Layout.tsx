import React, {ReactNode} from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({children, title = 'This is the default title'}: Props) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
                  integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
                  crossOrigin="anonymous"
            />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />


        </Head>
        <header>
            <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>{' '}
                |{' '}
                <Link href="/about">
                    <a>About</a>
                </Link>{' '}
                |{' '}
                <Link href="/mi-perfil">
                    <a>Mi perfil</a>
                </Link>{' '}
                |{' '}
                <Link href="/cripto">
                    <a>Cripto Transformador</a>
                </Link>{' '}
                |{' '}
                <Link href="/users">
                    <a>Users List</a>
                </Link>{' '}
                | <a href="/api/users">Users API</a>
                | {' '} <Link href="/estudiantes">
                    <a>Estudiantes</a>
                </Link>{' '}
                |{' '} <Link href="/formulario">
                <a>Formulario</a>
            </Link>{' '}
            </nav>
        </header>
        <div className="container">
            {children}
        </div>
        <footer>
            <hr/>
            <span>I'm here to stay (Footer)</span>
        </footer>
    </div>
)

export default Layout
