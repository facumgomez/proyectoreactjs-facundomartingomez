import Icono2 from "../assets/icono2.png";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#FF3131", textAlign: "center", padding: "5px", color: "#F0F4F2"};
  
  return(
    <div style={footerStyle}>
      <h5> <img src={Icono2} alt="Icono de Home Deco" /> ©2024 Home Deco. Todos los derechos reservados por copyright.</h5>
    </div>
  );
}

export default Footer;