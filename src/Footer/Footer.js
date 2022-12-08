import React from "react";
import "./Footer.css";
import WhatsApp from "/Users/vipnumbers/nanonumbers/src/Assets/Whatsapp.png";
import Instagram from "/Users/vipnumbers/nanonumbers/src/Assets/Instagram icon.png";
import PayPal from "/Users/vipnumbers/nanonumbers/src/Assets/paypal icon.png";
import Visa from "/Users/vipnumbers/nanonumbers/src/Assets/Visa icon.png";
import Stripe from "/Users/vipnumbers/nanonumbers/src/Assets/Stripe icon.png";
import MasterCard from "/Users/vipnumbers/nanonumbers/src/Assets/Mastercard icon.png";
import Bitcoin from "/Users/vipnumbers/nanonumbers/src/Assets/Bitcoin icon.png";
import ApplePay from "/Users/vipnumbers/nanonumbers/src/Assets/Apple Pay.png";
import Amex from "/Users/vipnumbers/nanonumbers/src/Assets/Amex.png";
import Logo from "/Users/vipnumbers/nanonumbers/src/Assets/Nano Logo.jpg";

const Footer = () => {

    return (
        <footer className="page-footer">
            <div className='footer--main'>

                <div className="footer--link--container">
                    <div className='footer--links'>
                        <h3>Nano Numbers</h3>
                        <ul>
                            <li>Home</li>
                            <li>Browse</li>
                            <li>Create</li>
                            <li>Order Sim</li>
                            <li>About Us</li>
                            <li>Privacy Policy</li>
                            <li>Terms and conditions</li>
                        </ul>
                    </div>
                    <div className="footer--links">
                        <h3>Brands</h3>
                        <ul>
                            <li>Nano Tech</li>
                            <li>Nano Vapes</li>
                        </ul>
                    </div>
                    <div className="footer--links">
                        <h3>Have any questions?</h3>
                        <ul>
                            <li>FAQ</li>
                            <li>Help Desk</li>
                            <li>Email Us</li>
                            <li>info@vipnumbersuk.com</li>
                            <li>+447770 660777</li>
                        </ul>
                    </div>
                    <div className="footer--links">
                        <h3>My account</h3>
                        <ul>
                            <li>Log in</li>
                            <li>Wholesale</li>
                        </ul>
                    </div>
                </div>

                <div className="footer--sign-up">
                    <p>Sign up now and get a 20% discount code!</p>
                    <div className="footer--inputs">
                        <input type="text" name="sign up now" placeholder="Input your email"/>
                        <button>Submit</button>
                    </div>
                </div>

                <div className="footer--icons">
                    <div className="footer--socialmedia">
                        <p>Get Connected!</p>
                        <ul>
                            <li><img src={WhatsApp} alt="whatsapp-link"/></li>
                            <li><img src={Instagram} alt="instagram-link"/></li>
                        </ul>
                    </div>
                    <div className="footer--payments">
                        <p>What we accept</p>
                        <ul>
                            <li><img src={Visa} alt="Visa"/></li>
                            <li><img src={MasterCard} alt="MasterCard"/></li>
                            <li><img src={Amex} alt="Amex"/></li>
                            <li><img src={PayPal} alt="Paypal"/></li>
                            <li><img src={Bitcoin} alt="Bitcoin"/></li>
                            <li><img src={ApplePay} alt="ApplePay"/></li>
                            <li><img src={Stripe} alt="Stripe"/></li>
                        </ul>
                    </div>
                    <div className="footer--logo">
                        <img src={Logo} alt="logo--footer"/>
                    </div>
                </div>


                <div className="footer--copyright">
                    <p>2022 © Nano Kensington LTD All Rights Reserved</p>
                </div>

            </div>
        </footer>

    )
}

export default Footer;