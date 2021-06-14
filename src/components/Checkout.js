import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProducts from './CheckoutProducts'
import { useStateValue } from '../StateProvider'

function Checkout() {
    const[{basket, user}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="/images/bannerad.png"/>
                <div>
                    <h3>Hello {user?.email}</h3>
                    <h2 className="checkout_title">Your Shopping Basket </h2>

                    {basket.map(item => (
                        <CheckoutProducts
                           id={item.id}
                           title={item.title}
                           img={item.img}
                           price={item.price}
                           rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
            
        </div>
    )
}

export default Checkout
