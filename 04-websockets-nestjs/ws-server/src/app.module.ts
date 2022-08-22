import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {EventosModule} from "./eventos/eventos.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario/usuario.entity";
import {UsuarioModule} from "./usuario/usuario.module";
import {NotaModule} from "./nota/nota.module";
import {NotaEntity} from "./nota/nota.entity";

// Modulo principal
@Module({
    imports: [
        EventosModule,
        TypeOrmModule.forRoot({
            name: 'default', // nombre de la conexion
            type: 'sqlite',
            database: './bdd/bdd.sqlite',
            entities: [
                // app.module.ts
                UsuarioEntity, NotaEntity
            ], // entidades de TOODOO el aplicativo
            synchronize: true,
            dropSchema: false,
        }),
        UsuarioModule,
        NotaModule
    ], //  Otros modulos - Agrupador
    controllers: [AppController], // Controladores - HTTP Validaciones
    providers: [AppService], // Servicios - Logica de negocio
})
export class AppModule {
}
