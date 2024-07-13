"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const landingCars = {
  tesla: "/tesla_3_side.png",
  ferrari: "/ferrari_side.png",
  audi: "/audi_side.png",
  porsche: "/porsche_side.png",
  bmw: "/bmw_side.png"
};

const Hero = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>(landingCars.tesla);

  const handleSelectBrand = (brand: keyof typeof landingCars) => {
    setSelectedBrand(landingCars[brand]);
    console.log(selectedBrand);
  };

  return (
    <div className="page-wrapper">
      <div className="home">
        <div className="intro">
          <div className="intro-header">
            <span className="intro-header-text">Premium </span>
            <span className="intro-header-text">Car Rental </span>
            <span className="intro-header-text">at Next Ride </span>
          </div>
          <div className="intro-p">
            Experience unparalleled comfort and luxury with
            an exclusive selection of world-class vehicles.
          </div>
          <div className="hero-buttons">
            <button className="hero-button-1">Explore</button>
          </div>
        </div>
        <div className="graphic">
          <div className="sub-hero-wrapper">
            <div className="hero-car-wrapper">
              <div className="hero-car overflow-visible">
                <img
                  className="hero-car-image"
                  src={selectedBrand}
                  alt="selected car"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-car-choice">
        {Object.entries(landingCars).map(([brand, imageURL]) => (
          <div
            key={brand}
            className="logo-image-wrapper"
            onClick={() => handleSelectBrand(brand as keyof typeof landingCars)}
          >
            <Image src={`/${brand}.svg`} alt={`${brand}_logo`} width={25} height={25} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;