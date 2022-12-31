import React from 'react';
import HeroSection from '../HeroSection';
import { objOne, objThree} from '../Data';
import Pricing from '../Pricing';

function Services() {
  return (
    <>
      <Pricing />
      <HeroSection {...objOne} />
      <HeroSection {...objThree} />
    </>
  );
}

export default Services;
