import React from "react";
import alertImg from "../../assets/register/Alert.png";
import "./register.css";
const Register = () => {
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
      <form className="formRegister">
        <div className="proffsContainerCards containerRegister">
          <div className="formContainer">
            <div className="dataRegister">
              <h1>Tus Datos</h1>
              <hr />
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
            </div>
            <div className="aboutClass">
              <h2>Sobre la clase</h2>
              <hr />
              <input
                type="text"
                placeholder="Selecciona la materia que deeseas enseñar"
              />
              <input
                type="text"
                placeholder="Costo de tu hora por lección (en $ MXN)"
              />
            </div>
            <div className="horariosRegister">
              <div className="titleHorarios">
                <h2>Horarios Disponibles</h2>
                <span>+ Nuevo horario</span>
                <hr />
              </div>
              <div className="selectDate">
                <select name="" id="">
                  <option value="Seleccióna un día" defaultValue>
                    Selecciona un día
                  </option>
                </select>
                <select name="" id="selectFrom">
                  <option value="Desde" defaultValue>
                    Desde
                  </option>
                </select>
                <select name="" id="selectStill">
                  <option value="Hasta" defaultValue>
                    Hasta
                  </option>
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
