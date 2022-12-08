import React, { useEffect } from 'react';
import './Home.css'
import Button from '../../Components/Button/Button.js'
import Panel from '../../Components/Panel/Panel';
import logo from '/Users/vipnumbers/nanonumbers/src/Assets/Nano Logo.jpg';
import vapeLady from '/Users/vipnumbers/nanonumbers/src/Assets/vape-lady.mp4';
import techSmash from '/Users/vipnumbers/nanonumbers/src/Assets/iPhone-Smash.mp4';
import NanoVapeHalf from '/Users/vipnumbers/nanonumbers/src/Assets/Nano-Vape-Half.png';
import NanoTechHalf from '/Users/vipnumbers/nanonumbers/src/Assets/Nano-Tech-Half.png';
import Footer from '../../Footer/Footer';

function Home() {


    return (
        <div className='set-page'>
            
                <div className='home-header-placement'>
                    <h1>NANO Numbers</h1>
                    <h2>Home to the largest collection of <br /><strong>VIP Mobile Numbers</strong> in the UK</h2>
                </div>
                <Panel link='browse' top='18rem' right='45rem' height='320px' width='300px' title='Find your new Special Number' description="Nano Numbers has the largest collection of VIP Mobile Numbers in the UK. Starting from £50, we have something for everyone. Our gold numbers are the most competitively priced so you won't find a better deal with anyone else we can guarentee that" instruction='Click me to Browse our full range' color1='#00153b' color2='#00266e' />
                <Panel link='create' top='30rem' right='25rem' height='320px' width='300px' title='Create Your Very Own Number' description="Have something special in mind? Perhaps a Birthday or you would like to match your landline number. We've got just the thing for you! With our create a number service you can customise the last 6 digits of your mobile number for the cheapest price in the market!" instruction='Start Creating' color1='#9b5fb3' color2='#d683f7' />
                <Button text='Browse' top='40rem' left='10rem' link='browse' />
                <Button text='Create' top='40rem' left='20rem' link='create' />
                <div className='home-body-placement'>
                    <h2>How it <span>works</span></h2>
                    <div className='order-steps'>
                        <div className='order-steps-1'>
                            <div className='magnifying-glass'>
                                <div className='magnifying-glass-frame'>
                                    <div className='magnifying-glass-lens'>
                                        <div className='magnifying-glass-reflection'></div>
                                    </div>
                                </div>
                                <div className='magnifying-glass-handle'></div>
                            </div>
                            <div className='how-it-works-text'>
                                <h3>Find Your Number</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type</p>
                            </div>
                        </div>

                        <div className='order-steps-2'>
                            <div className='wallet'>
                                <div className='back-wallet'></div>

                                <div className='cash'>
                                    <div className='cash-circle'></div>
                                </div>
                                <div className='front-wallet'>
                                    <div className='left-wallet'>
                                        <div className='id-wallet'></div>
                                    </div>
                                    <div className='wallet-crease'></div>
                                    <div className='right-wallet'>
                                        <div className='card1-wallet'>
                                            <div className='card-title'></div>
                                            <div className='card-chip'></div>
                                            <div className='card-number'></div>
                                        </div>
                                        <div className='slot1-wallet'></div>
                                        <div className='card2-wallet'>
                                            <div className='card-title2'></div>
                                            <div className='card-chip2'></div>
                                            <div className='card-number2'></div>
                                        </div>
                                        <div className='slot2-wallet'></div>
                                    </div>
                                </div>
                                <div className='bottom-wallet'></div>
                            </div>

                            <div className='how-it-works-text'>
                                <h3>Checkout</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type</p>
                            </div>
                        </div>

                        <div className='order-steps-3'>
                            <div className='mail'>
                                <div className='envelope-back'></div>
                                <div className='envelope'>
                                    <div className='mail-letter'>
                                        <div className='letter-stamp'></div>
                                    </div>

                                    <div className='envelope-left'></div>

                                    <div className='envelope-right'></div>
                                    <div className='envelope-bottom'></div>
                                </div>

                                <div className='envelope-flap'></div>
                            </div>
                            <div className='how-it-works-text'>
                                <h3>Receive Your Number</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type</p>
                            </div>
                        </div>
                    </div>


                    
                    <div className='home-features-section'>
                        <h2>Why get a <span>VIP Mobile Number</span>?</h2>

                    </div>




                    <h2>What is <span><strong>Nano</strong></span>?</h2>
                    <p className='set-para-width'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type</p>
                    <div className='who-we-are'>
                        {
                            //Check if component was added to the DOM Tree
                            useEffect(() => {
                                let vapeVideo = document.getElementById("vape-video");
                                let vapeWindow = document.getElementById('vape-window');

                                let techVideo = document.getElementById("tech-video");
                                let techWindow = document.getElementById("tech-window");
                                
                                techVideo.pause();
                                vapeVideo.pause();

                                vapeWindow.addEventListener("mouseover", () => {
                                    vapeVideo.play();
                                });
                                vapeWindow.addEventListener("mouseleave", () => {
                                    setTimeout(() => {
                                        vapeVideo.currentTime = 0;
                                        vapeVideo.pause();
                                    }, 200);
                                    
                                })

                                techWindow.addEventListener("mouseover", () => {
                                    techVideo.play();
                                })
                                techWindow.addEventListener("mouseleave", () => {
                                    setTimeout(() => {
                                        techVideo.currentTime = 0;
                                        techVideo.pause();
                                    }, 200);
                                })
                            })
                                
                            
                        }
                        <div id="vape-window">
                            <video id='vape-video' className='overlay-video' width='750px' height='500px' loop="true" autoPlay="true" muted={"true"}>
                                <source src={vapeLady} type='video/mp4' />
                                Vaping Video
                            </video>
                            <img src={NanoVapeHalf} alt='nano vape half of Logo'/>
                        </div>
                        <div id="tech-window">
                            <video id='tech-video' className='overlay-video' width='750px' height='500px' loop="true" autoplay="true" muted="true">
                                <source src={techSmash} type="video/mp4"/>
                                Tech Video
                            </video>
                            <img src={NanoTechHalf} alt='nano tech half of Logo'/>
                        </div>
                        

                    </div>
                    <Footer />
                </div>
                
            </div>
    )
}

export default Home;