import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navBarStyle = {
    color: "#F0F4F2"};
  
  return (
    <ul className="nav">
      <li className="nav-item">
        <NavLink className="nav-link fs-5" style={navBarStyle} to={"/"}>Productos</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link fs-5" style={navBarStyle} to={"/category/living"}>Living</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link fs-5" style={navBarStyle} to={"/category/comedor"}>Comedor</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link fs-5" style={navBarStyle} to={"/category/dormitorio"}>Dormitorio</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link fs-5" style={navBarStyle} to={"/category/exterior"}>Exterior</NavLink>
      </li>
    </ul>
  );
}

export default NavBar;