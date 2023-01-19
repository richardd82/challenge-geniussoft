const Router = require('express');
const { Schedules } = require('../db.js');
const router = Router();
const scheduleObj = require('../services/schedules.json');


router.get("/", async (req, res) => {    
    // console.log(scheduleObj)
    try{
        scheduleObj.forEach(async (e) => {
            await Schedules.findOrCreate({ //Ingresa los datos a la tabla si no existen
                 where: {from: e.from, still: e.still} //donde el name sea cada una de las dietas del Array Local
             });
        });        
            const allSchedules = await Schedules.findAll();   
            // console.log(allSchedules)      
            res.status(200).json(allSchedules);
    
        }catch(e){
            res.status(400).json({message: e})
        }     

})
module.exports = router;