import React from 'react';
import alimentacao from '../assets/images/alimentacao.svg';
import outros from '../assets/images/outros.svg';
import saude from '../assets/images/saude.svg';
import transporte from '../assets/images/transporte.svg';
import utilidades from '../assets/images/utilidades.svg';
import { Icone } from '../Components/UI/';

export default (type) => {
    const Images = {
        Restaurante: <Icone src={alimentacao} alt="restaurante" />,
        Utilizades: <Icone src={utilidades} alt="restaurante" />,
        Saude: <Icone src={saude} alt="restaurante" />,
        Transporte: <Icone src={transporte} alt="restaurante" />,
        default: <Icone src={outros} alt="restaurante" />,
    };

    return Images[type] || Images.default;
}