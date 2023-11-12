import { useState } from 'react';
import PropTypes from 'prop-types';

const YouTubeEmbebido = ({ IdVideo }) => {
    const [iframeVisible, setIframeVisible] = useState(true);
    const iframeID = 'YouTube_Embebido';

    const crearIframe = () => {
        const iframeContainer = document.querySelector('.ratio-16x9');
        const newIframe = document.createElement('iframe');
        newIframe.id = iframeID;
        newIframe.src = `https://www.youtube.com/embed/${IdVideo}`;
        newIframe.allowFullscreen = true;
        iframeContainer.appendChild(newIframe);
        setIframeVisible(true);
    };

    const eliminarIframe = () => {
        document.getElementById(iframeID)?.remove();
        setIframeVisible(false);
    };

    const visualizarIframe = () => {
        eliminarIframe();
        crearIframe();
    };

    YouTubeEmbebido.visualizarIframe = visualizarIframe;

    return (
        <>
            {iframeVisible && <iframe id={iframeID} src={`https://www.youtube.com/embed/${IdVideo}`} allowFullScreen></iframe>}
        </>
    );
};

YouTubeEmbebido.propTypes = {
    IdVideo: PropTypes.string.isRequired,
};

export default YouTubeEmbebido;
