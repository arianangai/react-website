import React from 'react';
import HeroSection from '../HeroSection';
import { objOne, objTwo } from '../Data';

function Products() {
  return (
    <>
      <HeroSection {...objOne} />
      <HeroSection {...objTwo} />
    </>
  );
}

export default Products;
