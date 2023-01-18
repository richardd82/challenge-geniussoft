const Router = require("express");
const { Users, Prices, Schedules, Subjects } = require("../db.js");
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
        { model: Schedules, attributes: ["day", "from", "still"] },
        { model: Subjects, attributes: ["subject"] },
      ],
    });
    // console.log(allUsers)
    res.status(200).json(allUsers);
  } catch (e) {
    res.status(400).json({ message: e });
  }
});
router.post("/", async (req, res) => {
  const { name, comment, photo, phone } = req.body;
  // console.log(name, comment, photo, phone);
  try {
    const getAllUsers = await Users.findAll();
    const phoneWhatsapp = getAllUsers?.map((e) => e.phone);

    if (!phoneWhatsapp?.find((e) => e === phone)) {
      const newUser = await Users.findOrCreate({
        name,
        comment,
        photo,
        phone,
      });
      // await newUser.setSubject(subjectId);
      await newUser.setPrice(priceId);
      await newUser.setSchedule(scheduleId);
      await newUser.setSubject(subjectId);
      return res.status(200).json(newUser);
    } else {
      return res.json({ message: "El usuario ya existe" });
    }
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;
