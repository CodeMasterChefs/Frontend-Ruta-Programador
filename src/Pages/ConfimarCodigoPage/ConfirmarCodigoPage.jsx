import { useState } from 'react';
import ArrowIconButton from '../../Components/IconButtons/ArrowIconButton';

const ConfirmarCodigoPage = () => {
    const [verificationCode, setVerificationCode] = useState(['', '', '', '', '']);

    const handleCodeChange = (index, value) => {
        if (value.length <= 1) {
            const newVerificationCode = [...verificationCode];
            newVerificationCode[index] = value;
            setVerificationCode(newVerificationCode);
        }
    };

    return (
        <div>
            <ArrowIconButton />
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
                        maxLength="1"
                    />
                ))}
            </div>
            <button onClick={() => { console.log(verificationCode) }}>Enviar</button>
        </div>
    );
};

export default ConfirmarCodigoPage;
