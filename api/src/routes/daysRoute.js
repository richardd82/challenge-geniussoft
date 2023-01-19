const Router = require('express');
const { Days } = require('../db.js');
const router = Router();
const dayObj = require('../services/days.json');


router.get("/", async (req, res) => {    
    // console.log(scheduleObj)
    try{
        dayObj.forEach(async (e) => {
            await Days.findOrCreate({ //Ingresa los datos a la tabla si no existen
                 where: {day: e.day} //donde el name sea cada una de las dietas del Array Local
             });
        });        
            const allDays = await Days.findAll();   
            // console.log(allSchedules)      
            res.status(200).json(allDays);
    
        }catch(e){
            res.status(400).json({message: e})
        }     

})
module.exports = router;