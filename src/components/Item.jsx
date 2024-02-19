import { Link } from "react-router-dom";

const Item = ({produc}) => {
  return (
    <div className="col-md-3 text-center"> 
      <div className="card">
        <Link to={"/item/" + produc.id} className="text-decoration-none text-dark">
          <img src={produc.image} className="card-img-top" alt={produc.title} />
          <div className="card-body">
            <p className="card-text">{produc.title}</p>
            <p className="card-text fw-bold">${produc.precio}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Item;