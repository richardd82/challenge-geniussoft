const Router = require('express');
const { Prices } = require('../db.js');
const router = Router();
const priceObj = require('../services/prices.json');


router.get("/", async (req, res) => {    
    // console.log(scheduleObj)
    try{
        priceObj.forEach(async (e) => {
            await Prices.findOrCreate({ //Ingresa los datos a la tabla si no existen
                 where: {price: e.price} //donde el name sea cada una de las dietas del Array Local
             });
        });        
            const allPrices = await Prices.findAll();   
            // console.log(allPrices)      
            res.status(200).json(allPrices);
    
        }catch(e){
            res.status(400).json({message: e})
        }     

})
module.exports = router;