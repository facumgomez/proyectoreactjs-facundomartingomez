import { useState } from 'react';
import Swal from 'sweetalert2';

const CheckoutForm = ({ setName, setEmail, setPhone, generateOrder }) => {
  const [errors, setErrors] = useState({});

  const checkoutFormStyle = {
    color: "#F0F4F2",
    backgroundColor: "#FF3131"
  };

  const validateInputs = () => {
    const nameValue = document.getElementById('name').value;
    const emailValue = document.getElementById('email').value;
    const phoneValue = document.getElementById('phone').value;
    const emailAlert = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneAlert = /^[0-9]{10}$/;
    const nameAlert = /^[a-zA-Z]+\s[a-zA-Z]+$/;

    const newErrors = {};

    if (!nameValue) {
      newErrors.name = 'Por favor, complete este campo.';
    } else if (!nameAlert.test(nameValue)) {
      newErrors.name = 'Por favor, ingrese un nombre y un apellido válido.';
    };

    if (!emailValue) {
      newErrors.email = 'Por favor, complete este campo.';
    } else if (!emailAlert.test(emailValue)) {
      newErrors.email = 'Por favor, ingrese un email válido.';
    };

    if (!phoneValue) {
      newErrors.phone = 'Por favor, complete este campo.';
    } else if (!phoneAlert.test(phoneValue)) {
      newErrors.phone = 'Por favor, ingrese un número de teléfono válido.';
    };

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const showValidationErrorAlert = (fieldName) => {
    let errorMessage = '';
    switch (fieldName) {
      case 'name':
        errorMessage = 'Por favor, ingrese un nombre y un apellido válido.';
        break;
      case 'email':
        errorMessage = 'Por favor, ingrese un email válido.';
        break;
      case 'phone':
        errorMessage = 'Por favor, ingrese un número de teléfono válido.';
        break;
      default:
        break;
    };

    Swal.fire({
      icon: 'error',
      title: 'Error de validación',
      text: errorMessage
    });
  };

  const handleGenerateOrder = () => {
    if (validateInputs()) {
      generateOrder();
    };
  };

  return (
    <form>
      <div className="mb-3">
        <label className="form-label">Nombre y Apellido:</label>
        <input id="name" type="text" className="form-control" onInput={(e) => { setName(e.target.value); setErrors({ ...errors, name: '' }) }} />
        {errors.name && (
          <div className="text-danger">
            <span onClick={() => showValidationErrorAlert('name')} style={{ cursor: 'pointer' }}>
              <i className="bi bi-exclamation-triangle-fill"></i>
            </span>
            {errors.name}
          </div>
        )}
      </div>
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input id="email" type="text" className="form-control" onInput={(e) => { setEmail(e.target.value); setErrors({ ...errors, email: '' }) }} />
        {errors.email && (
          <div className="text-danger">
            <span onClick={() => showValidationErrorAlert('email')} style={{ cursor: 'pointer' }}>
              <i className="bi bi-exclamation-triangle-fill"></i>
            </span>
            {errors.email}
          </div>
        )}
      </div>
      <div className="mb-3">
        <label className="form-label">Teléfono:</label>
        <input id="phone" type="text" className="form-control" onInput={(e) => { setPhone(e.target.value); setErrors({ ...errors, phone: '' }) }} />
        {errors.phone && (
          <div className="text-danger">
            <span onClick={() => showValidationErrorAlert('phone')} style={{ cursor: 'pointer' }}>
              <i className="bi bi-exclamation-triangle-fill"></i>
            </span>
            {errors.phone}
          </div>
        )}
      </div>
      <div>
        <button type="button" className="btn btn" style={checkoutFormStyle} onClick={handleGenerateOrder}>
          Generar Pedido
        </button>
      </div>
    </form>
  );
}

export default CheckoutForm;