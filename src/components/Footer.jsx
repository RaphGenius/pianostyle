import React, { useState } from "react";

const Footer = () => {
  const [showNumber, setShowNumber] = useState(false);
  const alert = () => {
    window.alert(
      "Bonjour! Merci d'avoir cliqué ici mais il n'y a rien à voir, vous pouvez tout de même vous balader sur les autres pages du site ! :). Sur ce, il vous reste plus qu'à cliquer sur OK ! "
    );
  };

  return (
    <footer className="footer">
      <div className="footer_container footer_info ">
        <h3>PianoStyle</h3>
        <p>
          Du mardi au vendredi de 15h00 à 18h30 et le samedi de 9h00 à 12h00.{" "}
          <br />
          Besoin d’informations ? Contactez-nous pour prendre rendez-vous !{" "}
        </p>
      </div>
      <div className="footer_container footer_action">
        <h3>Plan du site</h3>
        <ul>
          <li onClick={() => alert()}>A propos</li>
          <li onClick={() => alert()}>Atelier de réparation</li>
          <li onClick={() => alert()}>Location dePiano</li>
        </ul>
      </div>
      <div className="footer_container footer_contact">
        <h3>Informations pratiques</h3>
        <ul>
          <li>
            <a href="https://goo.gl/maps/zaxr2p4e3q6p4ckLA">
              5 Rue François sympas <br />
              21 000 Dijon
            </a>
          </li>
          <li onClick={() => setShowNumber(!showNumber)}>
            {showNumber ? "03 55 55 55 55" : "Appellez-nous"}
          </li>
          <li>
            <a href="mailto:pianostyle.cestcool@cool.com">
              Envoyez-nous un e-mail
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
