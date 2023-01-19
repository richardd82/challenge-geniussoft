import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  register,
  getAllSchedules,
  getAllSubjects,
  getAllUsers,
  getAllPrices,
  getAllDays
} from "../../redux/actions/index";
import Swal from "sweetalert2";
import alertImg from "../../assets/register/Alert.png";
import "./register.css";

function validate(input, allUsers) {
  let errors = {};
  let urlValidator = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|png)/;
  let phoneValidator = /^([0-9])*$/;

  if (!input.photo || urlValidator.test(input.photo) === false)
    errors.photo =
      "El link de dirigir a una imagen jpg o png e iniciar con http";
  else if (!input.phone || phoneValidator.test(input.phone) === false)
    errors.phone = "El telefono debe contener  solo numeros";

  return errors;
}

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const allUsers = useSelector((state) => state.users);
  const allSubjects = useSelector((state) => state.subjects);
  const allSchedules = useSelector((state) => state.schedules);
  const allPrices = useSelector((state) => state.prices);
  const allDays = useSelector((state) => state.days);
  const [input, setInput] = useState({
    name: "",
    comment: "",
    photo: "",
    phone: "",
    scheduleId: "",
    subjectId: "",
    priceId: "",
    dayId: ""
  });
  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllSchedules());
    dispatch(getAllSubjects());
    dispatch(getAllPrices());
    dispatch(getAllDays());
  }, [dispatch]);
  // console.log(allUsers, allSubjects, allSchedules);
  // console.log(allPrices);
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    console.log(input)
  };
  const usersNames = allUsers.map((n) => {
    return n.phone;
  });
  // console.log(input.phone)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (usersNames.includes(input.phone)) {
      Swal.fire({
        title: `El usuario ${input.name} ya se encuentra registrado`,
        showDenyButton: false,
        showCancelButton: false,
        confirmButtonText: "Yes",
        icon: "info",
      }).then((result) => {
        // console.log(result)
      });
      setInput({
        name: "",
        comment: "",
        photo: "",
        phone: "",
        scheduleId: "",
        subjectId: "",
        priceId: "",
        dayId: ""
      });
    } else {
      dispatch( register(input))
        .then((e) => {
          Swal.fire({
            title: "El usuario se creó correctamente",
            showDenyButton: false,
            showCancelButton: false,
            confirmButtonText: "Yes",
            icon: "success",
          }).then((result) => {
            console.log(result);
            if (result.isConfirmed) {
              navigate("/");
            }
          });
        })
        .catch((e) =>
          Swal.fire({
            title: e.response.data,
            showDenyButton: false,
            showCancelButton: false,
            confirmButtonText: "Ok",
            icon: "error",
          }).then((result) => {
            console.log(result);
          })
        );
    }
  };

  return (
    <>
      <div className="proffsContainer registerContainer">
        <div className="proffsTitle registerTitle">
          ¡Que increible que quieras enseñar.
          <p>
            <span className="primerPasoRegister">
              El primer paso es rellenar este formulario de inscripción
            </span>
          </p>
        </div>
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className="formRegister">
        <div className="proffsContainerCards containerRegister">
          <div className="formContainer">
            <div className="dataRegister">
              <h2>Tus Datos</h2>
              <hr />
              <input
                name="name"
                type="text"
                value={input.name}
                onChange={(e) => handleChange(e)}
                placeholder="Nombre completo"
                required
              />
              <input
                name="photo"
                type="text"
                value={input.photo}
                onChange={(e) => handleChange(e)}
                placeholder="Link de tu foto (Comience con http)"
                required
              />
              {errors.photo && <p className="errorRegister">{errors.photo}</p>}
              <input
                name="phone"
                type="text"
                value={input.phone}
                onChange={(e) => handleChange(e)}
                placeholder="Whatsapp (Solamente números)"
              />
              {errors.phone && <p className="errorRegister">{errors.phone}</p>}
              <textarea
                name="comment"
                id=""
                cols="30"
                rows="10"
                placeholder="Biografía"
                value={input.comment}
                onChange={(e) => handleChange(e)}
                required
              ></textarea>
            </div>
            <div className="aboutClass">
              <h2>Sobre la clase</h2>
              <hr />
              <select
                name="subjectId"
                className="classSelect"
                value={input.subjectId}
                onChange={(e) => handleChange(e)}
                placeholder="Selecciona la materia que deeseas enseñar"
                required
              >
                {allSubjects?.map((e) => {
                  return (
                    <option value={`${e.id}`} key={e.id}>
                      {e.subject}
                    </option>
                  );
                })}
              </select>
              <select
                name="priceId"
                className="classSelect"
                type="text"
                value={input.priceId}
                onChange={(e) => handleChange(e)}
                placeholder="Costo de tu hora por lección (en $ MXN)"
                required
              >
                {allPrices?.map((e) => {
                  return (
                    <option value={`${e.id}`} key={e.id}>
                      {e.price}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="horariosRegister">
              <div className="titleHorarios">
                <h2>Horarios Disponibles</h2>
                <span>+ Nuevo horario</span>
                <hr />
              </div>
              <div className="selectDate">
                <select
                  name="dayId"
                  id=""
                  required
                  value={input.dayId}
                  onChange={(e) => handleChange(e)}
                >
                  {allDays?.map((e) => {
                  return (
                    <option value={`${e.id}`} key={e.id}>
                      {e.day}
                    </option>
                  );
                })}
                </select>
                <select
                  name="scheduleId"
                  id="selectFrom"
                  required
                  value={input.scheduleId}
                  onChange={(e) => handleChange(e)}
                >
                  {allSchedules?.map((e) => {
                  return (
                    <option value={`${e.id}`} key={e.id}>
                      {e.from}
                    </option>
                  );
                })}
                </select>
                <select
                  name="scheduleId"
                  id="selectStill"
                  required
                  value={input.scheduleId}
                  onChange={(e) => handleChange(e)}
                >
                  {allSchedules?.map((e) => {                    
                  return (
                    <option value={`${e.id}`} key={e.id}>
                      {e.still}
                    </option>
                  );
                })}<option value="14:00">14:00</option>
                </select>
              </div>
            </div>
          </div>
          <div className="buttomFormRegister">
            <div className="contentButtom">
              <img src={alertImg} alt="alert" className="imgAlert" />
              <button type="submit" className="btnSaveRegister">
                Guardar Registro
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Register;
