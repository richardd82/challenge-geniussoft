const Router = require('express');
const { Subjects } = require('../db.js');
const router = Router();
const subjectObj = require('../services/subjects.json');


router.get("/", async (req, res) => {    
    // console.log(subjectObj)
    try{
        subjectObj.forEach(async (e) => {
            await Subjects.findOrCreate({ //Ingresa los datos a la tabla si no existen
                 where: {subject: e.subject} //donde el name sea cada una de las dietas del Array Local
             });
        });        
            const allSubject = await Subjects.findAll();   
            // console.log(allSubject)      
            res.status(200).json(allSubject);
    
        }catch(e){
            // console.log(subjectObj) 
            res.status(400).json({message: e})
        }     

})
module.exports = router;