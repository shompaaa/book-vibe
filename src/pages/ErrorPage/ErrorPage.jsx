import React from 'react';
import errorImage from '../../assets/images/404.png'

const ErrorPage = () => {
    return (
        <div>
            <img className='absolute top-20 left-130' height={600} width={600} src={errorImage} alt="Page Not Found" />
        </div>
    );
};

export default ErrorPage;