import PropTypes from 'prop-types';
import AstronautaPerdido from '../../assets/Astronauta_perdido.png';
import './ErrorComponent.css';

const ErrorComponent = ({ children }) => {
    return (
  <div className="container-fluid height-error_component d-flex">
    <div className="row d-flex align-items-center justify-content-center">
      <div className="col-md-6 text-center animate-fadeIn">
        <img
          src={AstronautaPerdido}
          alt="Astronauta perdido"
          className="animate-shakeX w-75 mx-auto" // Agrega la clase mx-auto
        />
      </div>
      <div className="col-md-6 text-center">
        <h4 className="mt-3">{children}</h4>
      </div>
    </div>
  </div>
);
};

ErrorComponent.propTypes = {
    children: PropTypes.node
};

export default ErrorComponent;