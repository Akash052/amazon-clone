import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckOutProduct from './CheckOutProduct';

function Checkout() {
  const[{basket,user},dispatch]=useStateValue();


  return (
    <div className="checkout">
        <div className="checkout__left">
            <img  className="checkout__ad" src="https://image.shutterstock.com/image-photo/online-ecommerce-shopping-checkout-on-600w-1977696398.jpg" alt=""/>
            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className="checkout__title"></h2>
                   {basket.map(item=>(
                     <CheckOutProduct
                     id={item.id}
                     title={item.title}
                     image={item.image}
                     price={item.price}
                     rating={item.rating}
                     />
                   ))}
            </div>
        </div>

        <div className="checkout__right">
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout;