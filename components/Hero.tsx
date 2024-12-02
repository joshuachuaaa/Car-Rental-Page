"use client"
import React, { useState } from 'react'
import Image from 'next/image'


const landingCars = {
  tesla : "/tesla_3_side.png",
  ferrari : "/ferrari_side.png",
  audi : "/audi_side.png",
  porsche : "/porsche_side.png",
  bmw : "/bmw_side.png"
}

const Hero = () => {

  const [selectedBrand, setSelectedBrand] = useState<string>(landingCars.ferrari);
  const [animationKey, setAnimationKey] = useState(0);  // Initialize animationKey state


  const handleSelectBrand = (brand: keyof typeof landingCars) => {
    setSelectedBrand(landingCars[brand]);
    setAnimationKey(animationKey + 1);
    console.log(selectedBrand)
  }
  
  return (
    <div>

      <div className="home">
          <div className="intro">
            <div className="intro-header">
              <text className="intro-header-text">Premium Cars</text>
              <text className="intro-header-text">@ Next Ride </text>
            </div>
            <div className="intro-p">
              Experience unparalleled comfort and luxury with
              an exclusive selection of world-class vehicles.
            </div>
            <div className="hero-buttons">
            <button className="hero-button-1">
              Explore
            </button>            
            </div>
          </div>
          <div className="graphic">
            <div className="sub-hero-wrapper">
              <div className="hero-car-wrapper">
                <div className="hero-car overflow-visible">
                  <img  className="hero-car-image" 
                        key={animationKey}
                        src={selectedBrand} 
                        alt="selected car"/>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className="hero-car-choice">
        {Object.entries(landingCars).map(([brand,imageURL])=>(
          <div className='logo-image-wrapper' onClick={()=>(handleSelectBrand(brand as keyof typeof landingCars))}>
            <Image src={`${brand}.svg`} alt={`${brand}_logo`} width={25} height={25}></Image>
          </div>
        ))}
      </div>



    </div>
  )
}

export default Hero