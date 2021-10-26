import React from "react";
import Swal from "sweetalert2";

// rafce
const Header = () => {
  const HandleButton = () => {
    Swal.fire({
      icon: "warning",
      title: "Peraturan",
      text: "Anda harus menebak kata dengan benar!",
      confirmButtonColor: "#2563EB",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "info",
          title: "Informasi",
          text: "Terdapat 45 kata baku yang diacak",
          confirmButtonColor: "#2563EB",
        });
      }
    });
  };

  return (
    <>
      <h1>React Jogo da Forca</h1>
      <p>Descubra a palavra secreta!</p>
      <button onClick={HandleButton}>Regras</button>
    </>
  );
};

export default Header;
