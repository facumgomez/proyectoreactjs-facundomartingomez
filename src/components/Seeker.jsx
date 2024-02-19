import React, { useState } from "react";

const Seeker = ({ onSearch }) => {
  const [filteredProduct, setProduct ] = useState("");
  const buttonFilter= () => {
    onSearch(filteredProduct);
  };
  
  return (
  <div className="container-fluid mt-4">
    <div className="container">
      <div className="row justify-content-center">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Buscar productos..." aria-label="Buscar" value={filteredProduct} onChange={(e) => setProduct(e.target.value)} />
          <button className="btn  btn-outline-danger" type="button" onClick={buttonFilter}>Buscar</button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Seeker;