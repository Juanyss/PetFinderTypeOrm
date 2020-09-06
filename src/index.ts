import Server from './server/server';
import { connection } from './db/dbConnection';
import router from './routes/pet.route';



const server = Server.init(3000);

server.app.use(router)

server.start(() => {
    console.log('Server running on port 3000');
    try {
        connection.then(async() => {
            console.log('DB connected');
            (await connection).synchronize()
        })
    } catch (error) {
        console.log(error);
        
    }    
})