import React from 'react';
import '../styles/Subscribe.css';

const Subscribe = () => {
    return (
        <div className='subscribe'>
            <div className='subscribe__container'>
                <h2>Subscribe to our Newsletter</h2>
            </div>
            <div className='subscribe__wrapper'>
                <input type="email" placeholder='Email Address' />
                <button className='subscribe__btn' type='submit'>Subscribe</button>
            </div>
        </div>
    );
}

export default Subscribe;