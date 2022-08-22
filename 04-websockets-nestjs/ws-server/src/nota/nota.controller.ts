import {BadRequestException, Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query} from "@nestjs/common";
import {UsuarioService} from "../usuario/usuario.service";
import {UsuarioCreateDto} from "../usuario/dto/usuario-create.dto";
import {validate} from "class-validator";
import {NotaService} from "./nota.service";
import {NotaCreateDto} from "./dto/nota-create.dto";
import {NotaUpdateDto} from "./dto/nota-update.dto";

@Controller('nota')
export class NotaController {
    // Inyectar las dependencias
    constructor(
        private readonly notaService: NotaService
    ) {}

    // 1 Informativo
    // 2 OK
    // 3 Redireccion
    // 4 Error cliente
    // 5 Error servidor

    // parametros:
    // 1 QueryParams ?id=1&consulta=Adrian
    // 2 BodyParams (viajan en el formulario)
    // 3 Parametros de ruta /usuario/:id/notas

    @Get("/") // GET /usuario/
    @HttpCode(200)
    find(
        @Query() queryParams,
        @Param() params
    ){
        return this.notaService.find({});
    }

    @Get("/:id") // GET /usuario/1
    @HttpCode(200)
    findOneById(
        @Query() queryParams,
        @Param() params
    ){
        return this.notaService.findOneById(+params.id); // +"1" = 1
    }

    @Post("/") // POST /usuario
    @HttpCode(201)
    async create(
        @Query() queryParams,
        @Param() params,
        @Body() bodyParams
    ){
        const nuevoRegistro = new NotaCreateDto(); // creamos dto
        nuevoRegistro.notaExamenFinal = bodyParams.notaExamenFinal;
        nuevoRegistro.notaPrimerBimestre = bodyParams.notaPrimerBimestre;
        nuevoRegistro.notaSegundoBimestre = bodyParams.notaSegundoBimestre;
        nuevoRegistro.usuario = +bodyParams.usuario;
        nuevoRegistro.comentario = bodyParams.comentario;

        const errores = await validate(nuevoRegistro); // validamos
        if(errores.length > 0){
            console.error({errores});
            throw new BadRequestException({mensaje:'Envio mal datos'});
        }
        // Creamos
        return this.notaService.create(nuevoRegistro);
    }

    @Put("/:id") // PUT /usuario/:id
    @HttpCode(200)
    async update(
        @Query() queryParams,
        @Param() params,
        @Body() bodyParams
    ){
        const registroEditar = new NotaUpdateDto(); // creamos dto
        registroEditar.notaExamenFinal = bodyParams.notaExamenFinal;
        registroEditar.notaPrimerBimestre = bodyParams.notaPrimerBimestre;
        registroEditar.notaSegundoBimestre = bodyParams.notaSegundoBimestre;
        registroEditar.usuario = bodyParams.usuario;
        registroEditar.comentario = bodyParams.comentario;

        const errores = await validate(registroEditar); // validamos
        if(errores.length > 0){
            console.error({errores});
            throw new BadRequestException({mensaje:'Envio mal datos'});
        }
        // Creamos
        return this.notaService.update(
            bodyParams,
            +params.id
        );
    }

    @Delete("/:id") // DELETE /usuario/:id
    @HttpCode(200)
    delete(
        @Query() queryParams,
        @Param() params,
        @Body() bodyParams
    ){
        return this.notaService.delete(+params.id);
    }

}