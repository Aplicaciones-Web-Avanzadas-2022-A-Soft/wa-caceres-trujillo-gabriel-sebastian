import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {NotaService} from "./nota.service";
import {NotaEntity} from "./nota.entity";
import {NotaController} from "./nota.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [NotaEntity], // Entidad en este modulo
            'default' //  nombre de la conexion
        )
    ],
    providers: [NotaService],
    controllers: [NotaController],
    exports: [NotaService],
})
export class NotaModule {
}