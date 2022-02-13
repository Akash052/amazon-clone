import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
        <div className="home_container">
            <img 
            className="home_image"
            src="https://m.media-amazon.com/images/I/6138dCMwqPL._SX3000_.jpg"
            alt=""
            />
            <div className="home_row">
                <Product 
                id="1343"
                title='The lean Start' 
                price={29.45}
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg"
                rating={2}
                />
                <Product 
                id="7369"
                title='The lean Start' 
                price={29.34}
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg"
                rating={5}
                />
                {/*product*/}
            </div>
            <div className="home_row">
                {/*product*/}
                <Product 
                id="7683"
                title='The lean Start' 
                price={100}
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg"
                rating={1}
                />
                {/*product*/}
                <Product 
                id="8922"
                title='The lean Start' 
                price={90.45}
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg"
                rating={3}
                />
                {/*product*/}
                <Product 
                id="2739"
                title='The lean Start' 
                price={29.45}
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg"
                rating={4}
                />

            </div>
            <div className="home_row">
                {/*product*/}
                <Product 
                id="1093"
                title='The lean Start' 
                price={29.45}
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg"
                rating={3}
                />
            </div>
        </div>
    </div>
  );
}

export default Home;