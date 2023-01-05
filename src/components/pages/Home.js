import React from 'react';
import HeroSection from '../HeroSection';
import {objOne, objThree, objTwo, objFour, objFive, pricing, form} from '../Data';
import Pricing from './Pricing/Pricing';
import SignupForm from './Form/Form';

function Home() {
  return (
    <>
      <HeroSection {...objOne}/>
      <HeroSection {...objTwo}/>
      <HeroSection {...objThree}/>
      <HeroSection {...objFour}/>
      <HeroSection {...objFive}/>
      <Pricing {...pricing}/>
      <SignupForm {...form}/>

    </>
  );
}

export default Home;
