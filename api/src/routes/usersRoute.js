const Router = require("express");
const { Users, Prices, Schedules, Subjects, Days } = require("../db.js");
const { Op } = require("sequelize");
const router = Router();
const usersObj = require("../services/users.json");

router.get("/", async (req, res) => {
  // console.log(usersObj)
  try {
    usersObj.forEach(async (e) => {
      await Users.findOrCreate({
        //Ingresa los datos a la tabla si no existen
        where: {
          name: e.name,
          comment: e.comment,
          photo: e.photo,
          phone: e.phone,
        },
      });
    });
    const allUsers = await Users.findAll({
      include: [
        { model: Prices, attributes: ["price"] },
        { model: Schedules, attributes: ["from", "still"] },
        { model: Subjects, attributes: ["subject"] },
        { model: Days, attributes: ["day"] },
      ],
    });
    // console.log(allUsers)
    res.status(200).json(allUsers);
  } catch (e) {
    res.status(400).json({ message: e });
  }
});
router.post("/", async (req, res) => {
  let { name, comment, photo, phone, priceId, scheduleId, subjectId, dayId } =
    req.body;
  // console.log(name, comment, photo, phone);
  try {
    const getAllUsers = await Users.findAll();
    // console.log(getAllUsers);
    const phoneWhatsapp = getAllUsers?.map((e) => e.phone);
    console.log(phoneWhatsapp);
    if (!phoneWhatsapp?.find((e) => e === phone)) {
      const newUser = await Users.findOrCreate({
        where: {
          name: name,
          comment: comment,
          photo: photo,
          phone: phone,
          priceId: priceId,
          scheduleId: scheduleId,
          subjectId:subjectId,
          dayId:dayId
        },
      });
      // await newUser.setSubject(subjectId);
      console.log(newUser);
      await newUser.setPrice(priceId);
      await newUser.setSchedule(scheduleId);
      await newUser.setSubject(subjectId);
      await newUser.setDay(dayId);
      return res.status(200).json(newUser);
    } else {
      return res.json({ message: "El usuario ya existe" });
    }
  } catch (e) {
    return res.status(400).json(e);
  }
});
module.exports = router;
