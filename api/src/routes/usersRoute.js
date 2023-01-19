const Router = require("express");
const { Users, Prices, Schedules, Subjects, Days } = require("../db.js");
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
    const price = await Prices.findByPk(priceId);
    console.log("price")
    const schedule = await Schedules.findByPk(scheduleId);
    console.log("schedule")
    const subject = await Subjects.findByPk(subjectId);
    console.log("subject")
    const day = await Days.findByPk(dayId);
    console.log("day")

    const phoneWhatsapp = getAllUsers?.map((e) => e.phone);
    console.log(phoneWhatsapp);
    if (!phoneWhatsapp?.find((e) => e === phone)) {
      const newUser = await Users.create({
        // where: {},
          name: name,
          comment: comment,
          photo: photo,
          phone: phone,
          // priceId: priceId,
          // scheduleId: scheduleId,
          // subjectId: subjectId,
          // dayId: dayId,
        
      });
      console.log(newUser);
      // await price.setUser(newUser);
      // await schedule.setUser(newUser);
      // await subject.setUser(newUser);
      // await day.setUser(newUser);
      await newUser.setPrice(price);
      await newUser.setSchedule(schedule);
      await newUser.setSubject(subject);
      await newUser.setDay(day);
      return res.status(200).json(newUser);
    } else {
      return res.json({ message: "El usuario ya existe" });
    }
  } catch (e) {
    return res.status(400).json(e);
  }
});
module.exports = router;
