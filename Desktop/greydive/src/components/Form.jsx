import React from "react";
import "../styles/form.css";

export default function Form() {
  return (
    <>
      <div className="ctn-main">
        <div className="ctn">
          <div className="ctn-logo">
            <img
              className="logo"
              src="https://cdn.discordapp.com/attachments/1046455218155565076/1060589516919943238/greydiveImg.jpg"
              alt="greydive"
            />
          </div>
          <form className="formCity">
            <div className="ctn-body">
              <div className="ctn-none">
                <p className="tex-none">greydive</p>
              </div>
              <div className="ctn-input">
                <p>Nombre y Apellido</p>
                <input
                  type="text"
                  placeholder="Full_name"
                  className="form_input"
                  required="true"
                />
              </div>
              <div className="ctn-input">
                <p>Fecha de naciento</p>
                <input
                  type="text"
                  placeholder="birth_date"
                  className="form_input"
                  required="true"
                />
              </div>
              <div className="ctn-input">
                <p>Correo electrónico</p>
                <input
                  type="birth_date"
                  placeholder="email"
                  className="form_input"
                  required="true"
                />
              </div>
              <div className="ctn-input">
                <p>¿Cuál es tu país de origen?</p>
                <input
                  type="text"
                  placeholder="country_of_origin"
                  className="form_input"
                  required="true"
                />
              </div>
              <div className="ctn-input-check">
                <p className="check">¿Acepta los términos y condiciones?</p>
                <label>
                  <input
                    type="checkbox"
                    className="form_input_check"
                    required="true"
                  />
                  Sí
                </label>
              </div>
            </div>
          </form>
          <div className="submit">
            <button className="submit-button-one">submit</button>
            <button className="submit-button-two">Borrar Formulario</button>
          </div>
        </div>
      </div>
    </>
  );
}
