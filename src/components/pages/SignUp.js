import React from 'react';
import HeroSection from '../HeroSection';
import { objOne, objThree } from '../Data';

function SignUp() {
  return (
    <>
      <HeroSection {...objOne} />
      <HeroSection {...objThree} />
    </>
  );
}

export default SignUp;

  