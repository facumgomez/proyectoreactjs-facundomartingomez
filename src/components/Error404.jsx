import Logo3 from "../assets/logo3.png";

const Error404 = () => {
  return(
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <img src={Logo3} alt="Logo de Home Deco" />
          <h1 className="display-2 fw-bold">ERROR 404</h1>
          <h4 className="display-5">Lo Sentimos! No se encontró esa pagina.</h4>
          <p className="fs-4">No se encontró nada en este lugar.</p>
        </div>
      </div>
    </div>
  );
}

export default Error404;