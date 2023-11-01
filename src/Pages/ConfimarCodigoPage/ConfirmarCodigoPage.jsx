import { useState } from 'react';
import { useNavigate } from 'react-router';
//import ArrowIconButton from '../../Components/IconButtons/ArrowIconButton';
import { useAuth } from "../../context/AuthContext";
import "./ConfirmarCodigoPage.css"
const ConfirmarCodigoPage = () => {

    const { verificarCodigo, isAuthenticated, verificationError } = useAuth();
    const navigate = useNavigate();

    const [verificationCode, setVerificationCode] = useState(['', '', '', '', '']);

    const [error, setError] = useState('');

    const handleCodeChange = (index, value) => {
        setError('');
        if (value.length <= 1) {
            const newVerificationCode = [...verificationCode];
            newVerificationCode[index] = value;
            setVerificationCode(newVerificationCode);
        }
    };

    const handlePaste = (e) => {
        const clipboardData = e.clipboardData.getData('text');
        const clipboardChars = clipboardData.replace(/\s+/g, ''); // Elimina espacios y saltos de línea
        if (clipboardChars.length === 5) {
            const newVerificationCode = clipboardChars.split('');
            setVerificationCode(newVerificationCode);
        } else {
            setError('El contenido pegado no tiene la longitud correcta.');
        }
    };

    const handleEnviarClick = async () => {
        verificarCodigo(verificationCode);
    };

    return (
        <div>
            {/* <ArrowIconButton /> */}
            {isAuthenticated ? (
                <div>
                    <div className="text-center">
                        <h1><b>¡Registro exitoso!</b></h1>
                        <p>
                            Bienvenido a la Ruta del Programador, empieza creando tus <br></br> playlists
                            y continúa aprendiendo
                        </p>
                    </div>
                    <div className="container1">
                        <button type="button" className="btn btn-primary my-2" onClick={() => {
                            if (isAuthenticated) {
                                navigate("/mis_playlists");
                            }
                        }}>Continuar</button>
                    </div>

                </div>
            ) : (
                <div>
                    <div className="text-center">
                        <h1><b>Verifica tu correo electrónico </b></h1>
                        <p className='my-3'>
                            Te enviamos un código de verificación al correo con el que te <br></br>
                            registraste, revisa tu bandeja
                        </p>
                            <p className="text-center custom-margin"><b>Ingresa el código de verificación:</b></p>
                 </div>
                    

                    <div className="verification-code-inputs text-center">
                        {verificationCode.map((code, index) => (
                            <input className='code-inp text-center'
                                key={index}
                                type="text"
                                value={code}
                                onChange={(e) => handleCodeChange(index, e.target.value)}
                                onPaste={handlePaste}
                                maxLength="1"
                            />
                        ))}
                    </div>
                    <div className="text-center code-Error">
                    {error && <p>{error}</p>}
                    {verificationError && <p className='d-flex justify-content-center'>{verificationError}</p>}
                    </div>
                    <div className="container1">
                        <button type="button" className="btn btn-primary" onClick={handleEnviarClick}>Enviar</button>
                    </div>
                    <div className="text-center">
                        <h7><b>¿Aun no recibiste tu código?</b></h7>
                        <br></br>
                        <a href=""><u>Volver a enviar código</u></a>
                   </div>
                </div>
            )}
        </div>
    );
};

export default ConfirmarCodigoPage;
