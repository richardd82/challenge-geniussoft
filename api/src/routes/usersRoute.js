const Router = require('express');
const { Users } = require('../db.js');
const router = Router();
const usersObj = require('../services/users.json');


router.get("/", async (req, res) => {    
    // console.log(usersObj)
    try{
        usersObj.forEach(async (e) => {
            await Users.findOrCreate({ //Ingresa los datos a la tabla si no existen
                 where: {name: e.name, comment: e.comment} //donde el name sea cada una de las dietas del Array Local
             });
        });        
            const allUsers = await Users.findAll();   
            // console.log(allUsers)      
            res.status(200).json(allUsers);
    
        }catch(e){ 
            res.status(400).json({message: e})
        }     

})
module.exports = router;