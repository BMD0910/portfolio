import React from "react";
// import {  } from '@lottiefiles/react-lottie-player';


const LottieAnimation = () => {
  return (
    <div class="container-svg-about">
      <div class="container-svg">
        <lottie-player
          src="https://assets8.lottiefiles.com/packages/lf20_sg18igu8.json"
          background="transparent"
          speed="1"

          style={{ width: '380px', height: '380px', position: 'relative' }}
          loop
          autoplay></lottie-player>
      </div>
    </div>
  );
};

export default LottieAnimation;
