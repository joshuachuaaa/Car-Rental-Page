import React from 'react'
import Image from 'next/image';
import { buttonInfo } from '@/types';

const MenuButton = ({ width, height, source, alt } : buttonInfo) => {
    return (
      <div>
        <Image src={source} alt={alt} width={width} height={height} />
      </div>
    );
  };
  
  export default MenuButton;