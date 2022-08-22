import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario.entity";
import {Repository} from "typeorm";
import {FindManyOptions} from "typeorm/find-options/FindManyOptions";
import {UsuarioCreateDto} from "./dto/usuario-create.dto";
import {UsuarioUpdateDto} from "./dto/usuario-update.dto";

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(UsuarioEntity, 'default')
        public usuarioRepository: Repository<UsuarioEntity>
    ) {
    }

    find(opciones: FindManyOptions<UsuarioEntity>) {
        return this.usuarioRepository.find(opciones)
    }

    findOneById(id: number) {
        return this.usuarioRepository.findOne({
            where: {
                id: id
            },
        })
    }

    create(datosCrear: UsuarioCreateDto) {
        return this.usuarioRepository.save(datosCrear);
    }

    update(datosActualizar: UsuarioUpdateDto, id: number) {
        return this.usuarioRepository.save(
            {...datosActualizar, id}
        );
    }

    delete(id: number) {
        return this.usuarioRepository.delete(id);
    }

}