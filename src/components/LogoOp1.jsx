import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const LogoOp1 = () => {
  return(
    <Link to={"/"}>
      <img src={Logo} alt="Logo de Home Deco"/>
    </Link>
  )
}
export default LogoOp1;