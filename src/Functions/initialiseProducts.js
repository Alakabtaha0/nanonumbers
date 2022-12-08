import React, { useState, useEffect } from 'react';
import commerce from '../lib/commerce.js';
import FilterSlider from '../Components/Filter Slider/FilterSlider.js';
import ProductsList from '../Products/ProductsList.js';

function InitialiseProducts({searchQuery, minVal, maxVal}) {

    const [products, setProducts] = useState([]); //Fetching Products from API
    


    //fetches product information from cart api
    const fetchProducts = () => {
        commerce.products.list().then((products) => {
            setProducts(products.data);
        }).catch((error) => {
            console.log("Couldn't fetch data:: ", error);
        })
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <ProductsList 
                products={products}
                min={minVal}
                max={maxVal}
                searchQuery={searchQuery}
            />
        </div>
    )

}

export default InitialiseProducts;