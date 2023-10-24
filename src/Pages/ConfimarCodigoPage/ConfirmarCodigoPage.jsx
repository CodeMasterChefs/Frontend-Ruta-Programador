import { useState } from 'react';
//import ArrowIconButton from '../../Components/IconButtons/ArrowIconButton';
import "./ConfirmarCodigoPage.css"
const ConfirmarCodigoPage = () => {
    const [verificationCode, setVerificationCode] = useState(['', '', '', '', '']);
    const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState(false);
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

    const handleEnviarClick = () => {
        const expectedCode = '12345'; // Cambia esto por tu código esperado
        const enteredCode = verificationCode.join('');
        if (enteredCode === expectedCode) {
            setIsRegistrationSuccessful(true);
        } else {
            setError('El código de verificación ingresado es incorrecto.');
        }
    };

    return (
        <div>
          {/* <ArrowIconButton /> */}
            {isRegistrationSuccessful ? (
                <div>
                    <div className="text-center">
                    <h1><b>¡Registro exitoso!</b></h1>
                    <p>
                        Bienvenido a la Ruta del Programador, empieza creando tus playlists
                        y continúa aprendiendo
                    </p>
                    </div>
                    <div className="container1">
                    <button  type="button" className="btn btn-primary" onClick={() => { console.log(verificationCode) }}>Continuar</button>
                    </div>
                  
                </div>
            ) : (
                <div>
                    <div className="text-center">
                    <h1><b>Verifica tu correo electrónico </b></h1>
                    <p>
                        Te enviamos un código de verificación al correo con el que te
                        registraste, revisa tu bandeja
                    </p>
                    <p><b>Ingresa el código de verificación:</b></p>
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
                    {error && <p>{error}</p>}
                    <div className="container1">
                      <button type="button" className="btn btn-primary" onClick={handleEnviarClick}>Enviar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ConfirmarCodigoPage;
