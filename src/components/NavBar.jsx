import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="nav">
      <li className="nav-item">
        <NavLink className="nav-link fs-5" style={{color: "#F0F4F2 "}} to={"/"}>Productos</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link fs-5" style={{color: "#F0F4F2 "}} to={"/category/living"}>Living</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link fs-5" style={{color: "#F0F4F2 "}} to={"/category/comedor"}>Comedor</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link fs-5" style={{color: "#F0F4F2 "}} to={"/category/dormitorio"}>Dormitorio</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link fs-5" style={{color: "#F0F4F2 "}} to={"/category/exterior"}>Exterior</NavLink>
      </li>
    </ul>
  )
}
export default NavBar;