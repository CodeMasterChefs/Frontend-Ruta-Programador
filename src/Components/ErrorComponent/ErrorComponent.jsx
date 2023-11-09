import PropTypes from 'prop-types';
import AstronautaPerdido from '../../assets/Astronauta_perdido.png';
import './ErrorComponent.css';

const ErrorComponent = ({ ErrorCode, children }) => {
    return (
        <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
            <div className="row">
                <div className="col-md-6 d-flex align-items-center justify-content-center animate-fadeIn">
                    <img
                        src={AstronautaPerdido}
                        alt="Astronauta perdido"
                        className="animate-shakeX w-75"
                    />
                </div>
                <div className="col-md-6 text-center">
                    <h2 className="mt-3 ">Error: {ErrorCode}</h2>
                    <p className="mt-3">{children}</p>
                    <button className='btn btn-primary mt-3'>Hola mundo</button>
                </div>
            </div>
        </div>
    );
};

ErrorComponent.propTypes = {
    ErrorCode: PropTypes.number.isRequired,
    children: PropTypes.node
};

export default ErrorComponent;