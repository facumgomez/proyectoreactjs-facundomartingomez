import LogoOp1 from "./LogoOp1";
import NavBar from "./NavBar";
import CartWidget from "./CartWidget";

const Header = () => {
  const headerStyle = {
    backgroundColor: "#FF3131"};
  
  return(
    <div className="container-fluid" style={headerStyle}>
      <div className="row" >
        <div className="col-md-4">
          <LogoOp1 />
        </div>
        <div className="col-md-7 d-flex align-items-center">
          <NavBar />
        </div>
        <div className="col-md-1 d-flex align-items-center justify-content-end">
          <CartWidget />
        </div>
      </div>
    </div>
  );
}

export default Header;