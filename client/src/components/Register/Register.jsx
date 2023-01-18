import React from "react";
import alertImg from '../../assets/register/Alert.png'
import "./register.css";
const Register = () => {
  return (
    <div className="proffsContainer">
      <div className="proffsTitle">
        ¡Que increible que quieras enseñar.
        <p>
          <span className="primerPasoRegister">
            El primer paso es rellenar este formulario de inscripción
          </span>
        </p>
      </div>
      <form className="formRegister">
        <div className="proffsContainerCards containerRegister">
          <div className="formContainer">
            <input type="text" placeholder="Nombre completo" />
            <input
              type="text"
              placeholder="Link de tu foto (Comience con http)"
            />
            <input type="text" placeholder="Whatsapp (Solamente números)" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              defaultValue={"Biografía"}
            ></textarea>
            <h1>Sobre la clase</h1>
            <hr />
            <input
              type="text"
              placeholder="Selecciona la materia que deeseas enseñar"
            />
            <input
              type="text"
              placeholder="Costo de tu hora por lección (en $ MXN)"
            />
            <h1>Horarios Disponibles</h1>
            <span>+ Nuevo horario</span>
            <hr />
            <select name="" id="">
              <option value="Seleccióna un día" defaultValue>
                Selecciona un día
              </option>
            </select>
            <select name="" id="">
              <option value="Desde" defaultValue>
                Desde
              </option>
            </select>
            <select name="" id="">
              <option value="Hasta" defaultValue>
                Hasta
              </option>
            </select>
          </div>
          <div className="buttomFormRegister">
            <img src={alertImg} alt="alert" />
            <button type="submit" className="btnSaveRegister">Guardar Registro</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
