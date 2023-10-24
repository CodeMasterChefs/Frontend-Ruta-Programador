import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import ArrowIconButton from '../../Components/IconButtons/ArrowIconButton';
import { useAuth } from "../../context/AuthContext";

const ConfirmarCodigoPage = () => {

    const { verificarCodigo, isAuthenticated, verificationError } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/mis_playlists");
        }
    }, [isAuthenticated, navigate]);

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
            <ArrowIconButton />
            {isAuthenticated ? (
                <div>
                    <h1><b>¡Registro exitoso!</b></h1>
                    <p>
                        Bienvenido a la Ruta del Programador, empieza creando tus playlists
                        y continúa aprendiendo
                    </p>
                    <button>Continuar</button>
                </div>
            ) : (
                <div>
                    <h1><b>Verifica tu correo electrónico</b></h1>
                    <p>
                        Te enviamos un código de verificación al correo con el que te
                        registraste, revisa tu bandeja
                    </p>
                    <p><b>Ingresa el código de verificación:</b></p>
                    <div className="verification-code-inputs">
                        {verificationCode.map((code, index) => (
                            <input
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
                    {verificationError && <p>{verificationError}</p>}
                    <button onClick={handleEnviarClick}>Enviar</button>
                </div>
            )}
        </div>
    );
};

export default ConfirmarCodigoPage;
