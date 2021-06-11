import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img 
                  className="home_image"
                  src="/images/bg-4.jpg" 
                />
                <div className="home_row">
                    {/* Product */}
                    <Product 
                       id="4902347"
                       title="Cloud Computing: Concepts, Technology & Architecture, 1e"
                       img ="/images/bk-1.jpg"
                       price={29.99}
                       rating={4}
                    />
                    {/* Product */}
                    <Product 
                       id="7463528"
                       title="Wonderchef Nutri-Blend Champagne with 3 Jar 400 W Mixer Grinder (Champagne, Black)"
                       img="/images/grinder.jpg"
                       price={61.9}
                       rating={5}
                    />
                </div>
                <div className="home_row">
                    <Product 
                       id="7463928"
                       title="Zebronics BT4440RUCF 4.1 Channel Multimedia Speakers"
                       img="/images/speaker.jpg"
                       price={121.9}
                       rating={3}      
                    />
                    <Product 
                       id="9863528"
                       title="HP Pavilion Gaming 10th Gen Intel Core i5 Processor 15.6-inch FHD Gaming Laptop (8GB/512GB SSD + 32GB Intel Optane/Windows 10/NVIDIA 1650Ti 4GB/Shadow"
                       img="/images/lap.jpg"
                       price={221.69}
                       rating={5}      
                    />
                    <Product 
                       id="6863528"
                       title="DHOLA sales Trimmer for women - 5 In 1 Bikini trimmer for hair removal women private part and underarms Eyebrows Eyebrow Razor, Household Painless Eyebrows Hair Removal Body"
                       img="/images/trim.jpg"
                       price={32}
                       rating={3}      
                    />
                </div>
                <div className="home_row">
                    <Product
                       id="4902227"
                       title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
                       img ="/images/moni.jpg"
                       price={2999.99}
                       rating={4}
                    />
                    
                </div>
            </div>
            
        </div>
    )
}

export default Home
