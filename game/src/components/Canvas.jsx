import React from 'react';

const Canvas = () => {
    const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
    
    return (
        <div 
            id="title-screen"
            preserveAspectRatio="xMaxYMax none" 
            viewBox={viewBox}
        >
            <circle cx={0} cy={0} r={20} />
            <img src="../../images/title.png"/>
        </div>
    );
};

export default Canvas;