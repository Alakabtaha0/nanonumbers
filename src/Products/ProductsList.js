import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import './ProductsList.css';


function ProductsList({ products, min, max, searchQuery }) {

    const [filteredProducts, setFilteredProducts] = useState([]);

    //Handle the search bar after every searchQuery
    useEffect(() => {
        console.log(searchQuery)
        const newFilter = products.filter((value) => {
            return value.name.includes(searchQuery)
        });
        setFilteredProducts(newFilter)
    }, [searchQuery]);

    //Set the initial list of products before Search Bar
    useEffect(() => {
        setTimeout(() => {
            setFilteredProducts(products);
        }, 100)
    }, [products])
    return (
        <div className='products' id='products'>
            <table>
                <thead>
                    <tr>
                        <th>Mobile Number</th>
                        <th>Price (£)</th>
                        <th>WhatsApp</th>
                        <th>Add To Cart</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredProducts.map((filteredProduct) => {
                            //This is to handle the Slider for price matching
                            if (filteredProduct.price.raw >= min &&
                                filteredProduct.price.raw <= max) {
                                return <ProductItem
                                    key={filteredProduct.id}
                                    product={filteredProduct}
                                />
                            }

                            //At this price point the customer doesn't care about the price they just want to view the best numbers
                            if (min >= 4000 && max >= 4000) {
                                if (filteredProduct.price.raw >= 5000) {
                                    return <ProductItem
                                        key={filteredProduct.id}
                                        product={filteredProduct}
                                    />
                                }
                            }
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

ProductsList.propTypes = {
    products: PropTypes.array,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
}

export default ProductsList;

