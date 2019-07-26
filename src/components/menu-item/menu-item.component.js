import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({ title, ImageUrl }) => (
    <div 
        style={{
            backgroundImage: `url(${ImageUrl})`
        }} 
        className='menu-item'
    >
        <div className='content'>
            <h1 className='title'>{ title }</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem;
