import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {NotaEntity} from "../../nota/nota.entity";

@Entity({name: 'user_usuario'})
export class UsuarioEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column(
        {
            name: 'user_nombres',
            type: 'varchar',
            length: 60,
            nullable: false,
        }
    )
    nombres: string;

    @Column(
        {
            name: 'user_apellidos',
            type: 'varchar',
            length: 60,
            nullable: false,
        }
    )
    apellidos: string;

    @Column(
        {
            name: 'user_rol',
            type: 'varchar',
            length: 1,
            nullable: false,
            default: 'u',
            comment: 'U = usuario; A = administrador'
        }
    )
    rol: string

    @OneToMany(
        () => NotaEntity, //Entidad Relacionada
        (nota) => nota.usuario //Campo relacionado
    )
    notas: NotaEntity[]
}

