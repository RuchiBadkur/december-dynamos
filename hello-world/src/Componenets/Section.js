import React from 'react';

const Section = ({title, des}) => {
    // multiple instances of one component
    return (
        <div className='section'>
            <hr />
            <h2>{title}</h2>
            <p>{des}</p>
        </div>
    )
}

export default Section;