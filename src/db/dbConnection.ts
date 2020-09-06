import {createConnection} from "typeorm"
import { User } from '../models/user.model';
import { Pet } from '../models/pet.model';

export const connection = createConnection({
    type: "mariadb",
    host: "localhost",
    port: 3306,
    username: "juany",
    password: "440036Cu",
    database: "petfinder",
    entities: [
        User,
        Pet
    ],
});