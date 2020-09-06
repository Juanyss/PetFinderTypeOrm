import {Router} from 'express'
import { Pet } from '../models/pet.model';
import { connection } from '../db/dbConnection';

const router = Router();

router.get('/api/pet',(req,res) => {

    connection.then(async cnn => {
        let pets = await cnn.manager.find(Pet)
        res.status(200).json({
            ok:true,
            pets
        })
    })
    
})

router.post('/api/pet', async(req,res) => {
    let body = req.body

    let pet = new Pet()

    pet.name = body.name
    pet.specimen = body.specimen
    pet.race = body.race

    ;(await connection).manager.save(pet);

    res.status(400).json({
        ok:true,
        pet
    })
})

export default router;