import React, { useState } from 'react';
import './CreateNumbers.css';
import Input from '../../Components/Input/InputField';
import Accordion from '../../Components/Accordion/Accordion';
import { CreateNumberDATA } from '../../lib/CustomNumbersFAQData';
import Footer from '../../Footer/Footer';

function CreateNumbers() {

    const [numberDigits, setNumberDigits] = useState([]);

    return (
        <div className='set-page'>
            <h1 className='page-title'>Create your own Number</h1>
            <h2 className='page-subtitle'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type</h2>

            <div className='enter--numbers--field'>
                <h1>Enter Your Mobile Number</h1>
                <div className='break'></div>
                <Input numberDigits={numberDigits} setNumberDigits={setNumberDigits} />
                <div className='break'></div>
                <h1>Your Custom Mobile Number: 07xxx {numberDigits}</h1>
            </div>

            <div className='faq--section'>
                <h1 className='faq--title'>Custom Numbers FAQ</h1>
                <div className="accordion">
                    {CreateNumberDATA.map(({ title, content }) => (
                        <Accordion title={title} content={content} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CreateNumbers;