import logo from "../assets/logo.png"
import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <nav>
        <img src={logo} alt="Home Deco" />
        <div>
            <button>Living</button>
            <button>Comedor</button>
            <button>Dormitorio</button>
        </div>
        <CartWidget />
    </nav>
  )
}

export default NavBar