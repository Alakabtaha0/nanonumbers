import React from 'react';
import PropTypes from 'prop-types';
import './ProductItem.css';
import WhatsApp from '/Users/vipnumbers/nanonumbers/src/Assets/Whatsapp.png';
import Cart from '/Users/vipnumbers/nanonumbers/src/Assets/Shopping Cart Icon.png';


class ProductItem extends React.Component {

    render() {
        return (
            <tr>
                <td className='product-name'>{this.props.product.name}</td>
                <td className='product-price'>{this.props.product.price.formatted_with_symbol}</td>
                <td className='product--logo--dh'>
                    <div className='flexbox--center cursor--pointer product--logo--dp'>
                        <div className='button-logo-background'>
                            <img src={WhatsApp} alt='VIP Mobile Numbers WhatsApp Button'/>
                        </div>
                        <div className='button-logo-border'></div>
                    </div>
                    
                </td>
                <td className='product--logo--dh'>
                    <div className='flexbox--center cursor--pointer product--logo--dp'>
                        <div className='button-logo-background'>
                            <img src={Cart} alt='Gold Mobile Numbers Add To Cart'/>
                        </div>
                        <div className='button-logo-border'></div>
                    </div>
                    

                </td>
            </tr>
        )
    }
}

ProductItem.propTypes = {
    product: PropTypes.object
}

export default ProductItem;