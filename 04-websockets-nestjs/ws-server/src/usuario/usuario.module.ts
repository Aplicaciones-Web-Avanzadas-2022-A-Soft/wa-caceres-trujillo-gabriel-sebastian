import {Module} from "@nestjs/common";
import {UsuarioService} from "./usuario.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario.entity";
import {UsuarioController} from "./usuario.controller";

// Modulo Usuario
@Module({
    imports: [
        TypeOrmModule.forFeature(
            [UsuarioEntity], // Entidad en este modulo
            'default' //  nombre de la conexion
        ),
    ],
    providers: [UsuarioService],
    exports: [UsuarioService],
    controllers:[
        UsuarioController
    ]
})
export class UsuarioModule {
}