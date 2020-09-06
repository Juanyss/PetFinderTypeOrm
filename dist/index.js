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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server/server"));
const dbConnection_1 = require("./db/dbConnection");
const pet_route_1 = __importDefault(require("./routes/pet.route"));
const server = server_1.default.init(3000);
server.app.use(pet_route_1.default);
server.start(() => {
    console.log('Server running on port 3000');
    try {
        dbConnection_1.connection.then(() => __awaiter(void 0, void 0, void 0, function* () {
            console.log('DB connected');
            (yield dbConnection_1.connection).synchronize();
        }));
    }
    catch (error) {
        console.log(error);
    }
});
