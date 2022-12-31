import React from 'react';
import HeroSection from '../HeroSection';
import {objOne, objThree, objTwo, objFour, objFive} from '../Data';
import Pricing from '../Pricing';

function Home() {
  return (
    <>
      <HeroSection {...objOne} id='section1'/>
      <HeroSection {...objTwo} id='section2'/>
      <HeroSection {...objThree} id='section3'/>
      <HeroSection {...objFour} id='section4'/>
      <HeroSection {...objFive} id='section5'/>
      <Pricing id='section6'/>

    </>
  );
}

export default Home;
