"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const typeorm_1 = require("typeorm");
const user_model_1 = require("../models/user.model");
const pet_model_1 = require("../models/pet.model");
exports.connection = typeorm_1.createConnection({
    type: "mariadb",
    host: "localhost",
    port: 3306,
    username: "juany",
    password: "440036Cu",
    database: "petfinder",
    entities: [
        user_model_1.User,
        pet_model_1.Pet
    ],
});
