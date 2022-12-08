import './Panel.css';
import React from 'react';
import {Link} from 'react-router-dom';

function Panel({link, top, right, height, width, title, description, instruction, color1, color2}) {

    return (
        <Link to={`/${link}`}>
            <div className='panel' data-panelparent style={{top: top, right: right, height: height, width: width}}>
                <div className='panel-box inherit-panel' data-panel='1'>
                    <h1>{title}</h1>
                    <h3>{description}</h3>
                    <p>{instruction}</p>
                </div>
                <div className='panel-design1 inherit-panel' style={{backgroundColor: color1}}></div>
                <div className='panel-design2 inherit-panel' data-panel='-1' style={{backgroundColor: color2}}></div>
            </div>
        </Link>
        
    )
}

export default Panel;
