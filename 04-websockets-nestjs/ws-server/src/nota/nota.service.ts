import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";
import {UsuarioCreateDto} from "../usuario/dto/usuario-create.dto";
import {UsuarioUpdateDto} from "../usuario/dto/usuario-update.dto";
import {Repository} from "typeorm";
import {FindManyOptions} from "typeorm/find-options/FindManyOptions";
import {NotaEntity} from "./nota.entity";
import {NotaCreateDto} from "./dto/nota-create.dto";
import {NotaUpdateDto} from "./dto/nota-update.dto";

@Injectable()
export class NotaService{

    constructor(
        @InjectRepository(NotaEntity, 'default')
        public notaRepository: Repository<NotaEntity>
    ) {
    }

    find(opciones: FindManyOptions<NotaEntity>) {
        return this.notaRepository.find(opciones)
    }

    findOneById(id: number) {
        return this.notaRepository.findOne({
            where: {
                id: id
            },
        })
    }

    create(datosCrear: NotaCreateDto) {
        return this.notaRepository.save(datosCrear);
    }

    update(datosActualizar: NotaUpdateDto, id: number) {
        return this.notaRepository.save(
            {...datosActualizar, id}
        );
    }

    delete(id: number) {
        return this.notaRepository.delete(id);
    }
}