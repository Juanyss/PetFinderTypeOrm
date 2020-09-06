import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import { Pet } from "./pet.model";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    firstName!: string;

    @Column()
    lastName!: string;

    @Column()
    email!: string;

    @ManyToMany(type => Pet)
    @JoinTable()
    pets?: Pet[];

}