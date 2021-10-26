import React from "react";
import Swal from "sweetalert2";

// rafce
const Header = () => {
  const HandleButton = () => {
    Swal.fire({
      icon: "warning",
      title: "Regulamento",
      text: "Digite uma letra de adivinhe a palavra corretamente",
      confirmButtonColor: "#2563EB",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "info",
          title: "Informações",
          text: "Existem 29 palavras que são embaralhadas",
          confirmButtonColor: "#2563EB",
        });
      }
    });
  };

  return (
    <>
      <h1>React Jogo da Forca</h1>
      <p>Descubra a palavra secreta!</p>
      <p>Digite uma letra</p>
      <button onClick={HandleButton}>Regras</button>
    </>
  );
};

export default Header;
