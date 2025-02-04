import React from 'react';
import { FootballerProvider } from './Footballer';
import Footballers from './Footballers';



const FootballerContainer = () => {
    return (
        <FootballerProvider>
            <Footballers />
        </FootballerProvider>
    );
};

export default FootballerContainer;