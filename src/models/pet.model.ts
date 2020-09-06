import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Pet{
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name!: string;
    
    @Column()
    specimen!:string;

    @Column()
    race!: string;
}