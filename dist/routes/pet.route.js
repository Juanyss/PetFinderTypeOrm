"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pet_model_1 = require("../models/pet.model");
const dbConnection_1 = require("../db/dbConnection");
const router = express_1.Router();
router.get('/api/pet', (req, res) => {
    dbConnection_1.connection.then((cnn) => __awaiter(void 0, void 0, void 0, function* () {
        let pets = yield cnn.manager.find(pet_model_1.Pet);
        res.status(200).json({
            ok: true,
            pets
        });
    }));
});
router.post('/api/pet', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let body = req.body;
    let pet = new pet_model_1.Pet();
    pet.name = body.name;
    pet.specimen = body.specimen;
    pet.race = body.race;
    (yield dbConnection_1.connection).manager.save(pet);
    res.status(400).json({
        ok: true,
        pet
    });
}));
exports.default = router;
