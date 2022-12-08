import React, {useState, useEffect} from 'react';
import commerce from '../lib/commerce';

function IntialiseCart() {

    const [cart, setCart] = useState({});

    //fetches current cart information from commerce api
    const fetchCart = () => {
        commerce.cart.retrieve().then((cart) => {
            setCart(cart);
        })
    }

    useEffect(() => {
        fetchCart();
    }, []);

    const handleAddToCart = async (productId) => {
        await commerce.cart.add(productId).then(() => {
            fetchCart();
        }).catch((error) => {
            console.log('Response Error::  ', error);
        });
    }

    


    return (
        <div>

        </div>
    )
}

export default IntialiseCart;