import React from "react";

export default function Footer() {
  return (
    <>
      <p className="ftr">
        Nunca envíes contraseñas a través de Formularios de Google.
      </p>
      <div className="ctn-ftr">
        <img
          src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_dark_clr_74x24px.svg"
          alt="Google"
          height="24px"
          width="74px"
        />
        <p className="ctn-ftr">Formularios</p>
      </div>
    </>
  );
}
