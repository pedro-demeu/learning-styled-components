import React from 'react';
import alimentacao from '../assets/images/alimentacao.svg';
import outros from '../assets/images/outros.svg';
import saude from '../assets/images/saude.svg';
import transporte from '../assets/images/transporte.svg';
import utilidades from '../assets/images/utilidades.svg';
import { IconeTema } from '../Components/UI/';

export default (type) => {
    const Images = {
        Restaurante: <IconeTema src={alimentacao} alt="restaurante" />,
        Utilizades: <IconeTema src={utilidades} alt="restaurante" />,
        Saude: <IconeTema src={saude} alt="restaurante" />,
        Transporte: <IconeTema src={transporte} alt="restaurante" />,
        default: <IconeTema src={outros} alt="restaurante" />,
    };

    return Images[type] || Images.default;
}