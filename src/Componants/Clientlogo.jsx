// // import React from "react";
// // import styled, { keyframes, css } from "styled-components";

// // function App() {
// //   const row1 = [
// //     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
// //     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
// //     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
// //     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
// //     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
// //     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
// //     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
// //     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
// //   ];

// //   // const row2 = [
// //   //   "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
// //   //   "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png",
// //   //   "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png",
// //   //   "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
// //   //   "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
// //   //   "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
// //   // ];

// //   return (
// //     <AppContainer className="">
// //       <Wrapper>
// //         <Marquee>
// //           <MarqueeGroup>
// //             {row1.map((el) => (
// //               <ImageGroup key={el}>
// //                 <Image src={el} />
// //               </ImageGroup>
// //             ))}
// //           </MarqueeGroup>
// //           <MarqueeGroup>
// //             {row1.map((el) => (
// //               <ImageGroup key={el}>
// //                 <Image src={el} />
// //               </ImageGroup>
// //             ))}
// //           </MarqueeGroup>
// //         </Marquee>

// //         {/* Commented out row2 */}
// //         {/* <Marquee>
// //           <MarqueeGroupReverse>
// //             {row2.map((el) => (
// //               <ImageGroup key={el}>
// //                 <Image src={el} />
// //               </ImageGroup>
// //             ))}
// //           </MarqueeGroupReverse>
// //           <MarqueeGroupReverse>
// //             {row2.map((el) => (
// //               <ImageGroup key={el}>
// //                 <Image src={el} />
// //               </ImageGroup>
// //             ))}
// //           </MarqueeGroupReverse>
// //         </Marquee> */}
// //       </Wrapper>
// //     </AppContainer>
// //   );
// // }

// // export default App;

// // // const AppContainer = styled.div`
// // //   width: 100vw;
// // //   height: 25vh;
// // //   color: #000000;
// // //   overflow: hidden; /* Hide any overflow to avoid shaking */
// // //   display: flex;
// // //   align-items: center;
// // //   justify-content: center;

// // // `;

// // // const AppContainer = styled.div`
// // //   width: 100vw;
// // //   height: 20vh;
// // //   background-color: #a6c465;
// // //   overflow: hidden;
// // //   display: flex;
// // //   align-items: center;
// // //   justify-content: center;


// // // `;

// // // const AppContainer = styled.div`
// // //   width: 100vw;
// // //   height: 20vh; /* Default height for large screens (lg) */
// // //   background-color: #a6c465;
// // //   overflow: hidden;
// // //   display: flex;
// // //   align-items: center;
// // //   justify-content: center;

// // //   /* Large screens (lg) */
// // //   @media (min-width: 1024px) {
// // //     height: 20vh; /* Adjust height for large screens */
// // //   }

// // //   /* Medium screens (md) */
// // //   @media (max-width: 1023px) and (min-width: 768px) {
// // //     height: 20vh; /* Adjust height for medium screens */
// // //   }

// // //   /* Small screens (sm) */
// // //   @media (max-width: 767px) and (min-width: 480px) {
// // //     height: 20vh; /* Adjust height for small screens */
// // //   }

// // //   /* Mobile screens */
// // //   @media (max-width: 479px) {
// // //     height: 20vh; /* Adjust height for mobile screens */
// // //   }
// // // `;


// // const AppContainer = styled.div`
// //   width: 100vw;
// //   height: 20vh; /* Default height for large screens (lg) */
// //   background-color: #a6c465;
// //   overflow: hidden;
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;

// //   /* Extra small screens (mobile) */
// //   @media (max-width: 479px) {
// //     height: 20vh;
// //   }

// //   /* Small screens (sm) */
// //   @media (min-width: 480px) and (max-width: 767px) {
// //     height: 20vh;
// //   }

// //   /* Medium screens (md) */
// //   @media (min-width: 768px) and (max-width: 1023px) {
// //     height: 20vh;
// //   }

// //   /* Large screens (lg) */
// //   @media (min-width: 1024px) and (max-width: 1279px) {
// //     height: 17vh;
// //   }

// //   /* Extra large screens (xl) */
// //   @media (min-width: 1280px) and (max-width: 1535px) {
// //     height: 20vh;
// //   }

// //   /* 2XL screens */
// //   @media (min-width: 1536px) and (max-width: 1919px) {
// //     height: 16vh;
// //   }

// //   /* 3XL screens and beyond */
// //   @media (min-width: 1920px) {
// //     height: 18vh;
// //   }
// // `;


// // const Wrapper = styled.div`
// //   width: 100%;
// //   height: fit-content;
// //   background-color: red; 
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   flex-direction: column;

 
// // `;

// // // const Wrapper = styled.div`
// // //   width: 100%;
// // //   height: fit-content;
// // //   display: flex;
// // //   align-items: center;
// // //   justify-content: center;
// // //   flex-direction: column;
// // // `;

// // const Marquee = styled.div`
// //   display: flex;
// //   width: 1200px;
// //   overflow: hidden; /* Ensure no extra content causes shaking */
// //   user-select: none;
// //   mask-image: linear-gradient(
// //     to right,
// //     rgba(255, 255, 255, 0) 0%,
// //     rgba(255, 255, 255, 1) 10%,
// //     rgba(255, 255, 255, 1) 90%,
// //     rgba(255, 255, 255, 0) 100%
// //   );
// // `;

// // const scrollX = keyframes`
// //   0% {
// //     transform: translateX(0);
// //   }
// //   100% {
// //     transform: translateX(-100%);
// //   }
// // `;

// // const MarqueeGroup = styled.div`
// //   display: flex;
// //   flex-shrink: 0;
// //   width: 100%;
// //   animation: ${scrollX} 30s linear infinite;
// // `;

// // // const MarqueeGroupReverse = styled(MarqueeGroup)`
// // //   animation-direction: reverse;
// // //   animation-delay: -2s; /* Reverse scroll delay to sync */
// // // `;

// // const ImageGroup = styled.div`
// //   display: grid;
// //   place-items: center;
// //   width: clamp(10rem, 1rem + 40vmin, 30rem);
// //   padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
// // `;

// // const Image = styled.img`
// //   object-fit: contain;
// //   width: 100%;
// //   height: 100%;
// //   border-radius: 0.5rem;
// //   aspect-ratio: 16/9;
// //   padding: 5px 20px;
// //   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
// // `;

// // // import { motion } from "framer-motion";

// // // import logo from '../../public/Images/logo1.jpg';
// // // import logo2 from '../../public/Images/logo2.jpg';

// // // const HomeThird = () => {
// // //   return (
// // //     <div className="w-full   ">

// // //       <div className="flex lg:gap-28 md:gap-20 gap-10  font-bold items-center overflow-hidden whitespace-nowrap  p-4
// // //        bg-black">
// // //         <motion.img
// // //           src={logo}
// // //           initial={{ x: 0 }}
// // //           animate={{ x: "-100%" }}
// // //           transition={{ ease: "linear", repeat: Infinity, duration: 3 }}
// // //           className="mt-1 ml-5 h-10 "
// // //         />
// // //         <motion.img
// // //           src={logo}
// // //           initial={{ x: 0 }}
// // //           animate={{ x: "-100%" }}
// // //           transition={{ ease: "linear", repeat: Infinity, duration: 3 }}
// // //           className="mt-1 ml-5 h-10"
// // //         />
// // //         <motion.img
// // //           src={logo2}
// // //           initial={{ x: 0 }}
// // //           animate={{ x: "-100%" }}
// // //           transition={{ ease: "linear", repeat: Infinity, duration: 3 }}
// // //           className="mt-1 ml-5 h-10"
// // //         />
// // //         <motion.img
// // //           src={logo}
// // //           initial={{ x: 0 }}
// // //           animate={{ x: "-100%" }}
// // //           transition={{ ease: "linear", repeat: Infinity, duration: 3 }}
// // //           className="mt-1 ml-5 h-10"
// // //         />
// // //         <motion.img
// // //           src={logo2}
// // //           initial={{ x: 0 }}
// // //           animate={{ x: "-100%" }}
// // //           transition={{ ease: "linear", repeat: Infinity, duration: 3 }}
// // //           className="mt-1 ml-5 h-10"
// // //         />
// // //         <motion.img
// // //           src={logo}
// // //           initial={{ x: 0 }}
// // //           animate={{ x: "-100%" }}
// // //           transition={{ ease: "linear", repeat: Infinity, duration: 3 }}
// // //           className="mt-1 ml-5 h-10"
// // //         />
// // //         <motion.img
// // //           src={logo}
// // //           initial={{ x: 0 }}
// // //           animate={{ x: "-100%" }}
// // //           transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
// // //           className="mt-1 ml-5 h-10"
// // //         />
// // //         <motion.img
// // //           src={logo2}
// // //           initial={{ x: 0 }}
// // //           animate={{ x: "-100%" }}
// // //           transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
// // //           className="mt-1 ml-5 h-10"
// // //         />
// // //       </div>

// // //     </div>
// // //   );
// // // };

// // // export default HomeThird;






































// // // import React from "react";
// // // import styled, { keyframes } from "styled-components";

// // // function App() {
// // //   const row1 = [
// // //     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
// // //     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
// // //     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
// // //     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
// // //     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
// // //     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
// // //     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
// // //     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
// // //   ];

// // //   return (
// // //     <AppContainer>
// // //       <Wrapper>
// // //         <Marquee>
// // //           <MarqueeGroup>
// // //             {row1.map((el) => (
// // //               <ImageGroup key={el}>
// // //                 <Image src={el} />
// // //               </ImageGroup>
// // //             ))}
// // //           </MarqueeGroup>
// // //           <MarqueeGroup>
// // //             {row1.map((el) => (
// // //               <ImageGroup key={el}>
// // //                 <Image src={el} />
// // //               </ImageGroup>
// // //             ))}
// // //           </MarqueeGroup>
// // //         </Marquee>
// // //       </Wrapper>
// // //     </AppContainer>
// // //   );
// // // }

// // // export default App;

// // // const AppContainer = styled.div`
// // //   width: 100vw;
// // //   height: 20vh;
// // //   background-color: #a6c465;
// // //   overflow: hidden;
// // //   display: flex;
// // //   align-items: center;
// // //   justify-content: center;

// // //   /* Responsive for mobile screens */
// // //   @media (max-width: 768px) {
// // //     height: 25vh;
// // //   }
// // // `;

// // // const Wrapper = styled.div`
// // //   width: 100%;
// // //   height: fit-content;
// // //   background-color: white;
// // //   display: flex;
// // //   align-items: center;
// // //   justify-content: center;
// // //   flex-direction: column;
// // // `;

// // // const Marquee = styled.div`
// // //   display: flex;
// // //   width: 100%; /* Change to 100% to fit the screen width */
// // //   overflow: hidden;
// // //   user-select: none;
// // //   mask-image: linear-gradient(
// // //     to right,
// // //     rgba(255, 255, 255, 0) 0%,
// // //     rgba(255, 255, 255, 1) 10%,
// // //     rgba(255, 255, 255, 1) 90%,
// // //     rgba(255, 255, 255, 0) 100%
// // //   );

// // //   @media (max-width: 768px) {
// // //     width: 600%; /* On mobile, take the full width */
// // //       height: 15vh;
// // //   }
// // // `;

// // // const scrollX = keyframes`
// // //   0% {
// // //     transform: translateX(0);
// // //   }
// // //   100% {
// // //     transform: translateX(-100%);
// // //   }
// // // `;

// // // const MarqueeGroup = styled.div`
// // //   display: flex;
// // //   flex-shrink: 0;
// // //   width: 100%;
// // //   animation: ${scrollX} 30s linear infinite;

// // //   @media (max-width: 768px) {
// // //     animation-duration: 40s; /* Slower animation on mobile for better readability */
// // //   }
// // // `;

// // // const ImageGroup = styled.div`
// // //   display: grid;
// // //   place-items: center;
// // //   width: clamp(8rem, 1rem + 20vmin, 18rem); /* Adjust size for responsiveness */
// // //   padding: calc(clamp(8rem, 1rem + 20vmin, 18rem) / 10);

// // //   @media (max-width: 768px) {
// // //     width: clamp(6rem, 1rem + 15vmin, 12rem); /* Smaller images on mobile */
// // //     padding: calc(clamp(6rem, 1rem + 15vmin, 12rem) / 12);
// // //   }
// // // `;

// // // const Image = styled.img`
// // //   object-fit: contain;
// // //   width: 100%;
// // //   height: 100%;
// // //   border-radius: 0.5rem;
// // //   aspect-ratio: 16/9;
// // //   padding: 5px 20px;
// // //   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
// // // `;



// import React from "react";
// import styled, { keyframes } from "styled-components";

// function App() {
//   const row1 = [
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
//   ];

//   return (
//     <AppContainer>
//       <Wrapper>
//         <Marquee>
//           <MarqueeGroup>
//             {row1.map((el) => (
//               <ImageGroup key={el}>
//                 <Image src={el} />
//               </ImageGroup>
//             ))}
//           </MarqueeGroup>
//           <MarqueeGroup>
//             {row1.map((el) => (
//               <ImageGroup key={el}>
//                 <Image src={el} />
//               </ImageGroup>
//             ))}
//           </MarqueeGroup>
//         </Marquee>
//       </Wrapper>
//     </AppContainer>
//   );
// }

// export default App;

// const AppContainer = styled.div`
//   width: 100vw;
//   height: 20vh; /* Default height for large screens (lg) */
//   // background-color: #a6c465;
//   color: white;
//   overflow: hidden;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   /* Extra small screens (mobile) */
//   @media (max-width: 479px) {
//     height: 20vh;
//   }

//   /* Small screens (sm) */
//   @media (min-width: 480px) and (max-width: 767px) {
//     height: 20vh;
//   }

//   /* Medium screens (md) */
//   @media (min-width: 768px) and (max-width: 1023px) {
//     height: 20vh;
//   }

//   /* Large screens (lg) */
//   @media (min-width: 1024px) and (max-width: 1279px) {
//     height: 17vh;
//   }

//   /* Extra large screens (xl) */
//   @media (min-width: 1280px) and (max-width: 1535px) {
//     height: 20vh;
//   }

//   /* 2XL screens */
//   @media (min-width: 1536px) and (max-width: 1919px) {
//     height: 16vh;
//   }

//   /* 3XL screens and beyond */
//   @media (min-width: 1920px) {
//     height: 18vh;
//   }
// `;

// const Wrapper = styled.div`
//   width: 100%;
//   height: fit-content;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
// `;

// const Marquee = styled.div`
//   display: flex;
//   width: 1200px;
//   overflow: hidden;

//   user-select: none;
//   mask-image: linear-gradient(
//     to right,
//     rgba(255, 255, 255, 0) 0%,
//     rgba(255, 255, 255, 1) 10%,
//     rgba(255, 255, 255, 1) 90%,
//     rgba(255, 255, 255, 0) 100%
//   );
// `;

// const scrollX = keyframes`
//   0% {
//     transform: translateX(0);
//   }
//   100% {
//     transform: translateX(-100%);
//   }
// `;

// const MarqueeGroup = styled.div`
//   display: flex;
//   flex-shrink: 0;
//   width: 100%;
//   animation: ${scrollX} 30s linear infinite;
// `;

// const ImageGroup = styled.div`
//   display: grid;
//   place-items: center;
//   width: clamp(10rem, 1rem + 40vmin, 30rem);
//   padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
// `;

// const Image = styled.img`
//   object-fit: contain;
//   width: 100%;
//   height: 100%;
//   border-radius: 0.5rem;
//   aspect-ratio: 16/9;
//   padding: 5px 20px;
//   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
// `;


















import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

const LogoSlider = () => {
  const logos = [
    // { src: 'https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg', alt: 'Logo 1' },
    
    // { src: 'https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg', alt: 'Logo 2' },
    // { src: 'https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg', alt: 'Logo 3' },
    // { src: 'https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg', alt: 'Logo 4' },
    // { src: 'https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg', alt: 'Logo 5' },
    // { src: 'https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg', alt: 'Logo 6' },
    // { src: 'https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg', alt: 'Logo 7' },
    // { src: 'https://img.freepik.com/premium-vector/letter-mt-monogram-logo-design-stylish-minimalist_1293835-3363.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid', alt: 'Logo 7' },
    { src: 'https://img.freepik.com/premium-vector/cart-shop-thumb-logo-design-modern-simple-vector-your-online-store_579306-40636.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid', alt: 'Logo 7' },
    { src: 'https://img.freepik.com/premium-photo/3d-render-netflix-logo-sculpted-from-black-translucent-plastic-floating-slightly-eye-level-n_1020495-782333.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid', alt: 'Logo 7' },
    { src: 'https://img.freepik.com/premium-photo/3d-render-netflix-logo-carved-from-translucent-black-onyx-floating-dramatic-angle-neon-red-gl_1020495-783676.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid', alt: 'Logo 7' },


    // { src: 'https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg', alt: 'Logo 7' },
    { src: 'data:image/jpeg;base64,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', alt: 'Logo 8' },
    { src: 'data:image/jpeg;base64,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', alt: 'Logo 8' },
    { src: 'https://img.freepik.com/premium-photo/3d-render-amazon-logo-extruded-translucent-amber-floating-upward-angle-neon-orange-bl_1020495-782615.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid', alt: 'Logo 7' },

    { src: 'data:image/jpeg;base64,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', alt: 'Logo 8' },
    { src: 'data:image/jpeg;base64,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', alt: 'Logo 9' },
    // { src: 'https://img.freepik.com/premium-photo/google-logo-is-shown-white-background_1315971-722.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid', alt: 'Logo 7' },
    // { src: 'https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg', alt: 'Logo 7' },
    { src: 'data:image/jpeg;base64,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', alt: 'Logo 8' },
    { src: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMHBhUIBxIWFhIWGBcYFhgWGRgbHRkbGxkZIBkaHhweICogHR8xHRYdIT0hJSs3MjAuGiAzODMsOCktLzcBCgoKDg0OGxAQGy0lICUtKy0tLysuMDAtLS0tLjAtLS4tMS8tLi0vLSstLS0rLSsuLS0tKy0tLS0tLS0tLy0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAwADAQEAAAAAAAAAAAAABQYHAwQIAgH/xABAEAACAQMDAgMGAgYHCQEAAAAAAQIDBBEFBiESMQcTQSIyUWFxgRSRCCM3UnKzFRZCoaKy8DNDc5KxtMHR8ST/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAgEDBAX/xAAsEQEBAAEDAgQFAwUAAAAAAAAAAQIDERIhMUFRYXETIjKRoRSB8ARSYtHh/9oADAMBAAIRAxEAPwDGwAfWcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfUY9TwjswrRtl+qWZfF+hWOO/dNu3Z80rKdRZawvmcqtqUP9tV/5V/9OrVrSrPNR5/6fkcZfLCdpv7p45Xvfsk4K1XE3U/19jmhbWdZ4VacP4lx/l/8kMC/jz+zH7f9TdG+GV/n7LB/Vaden5mmVadVfBPD/wCrX5shry0qWNbyryEoS+EljP0+P2OOlUdGp5lFuMl2cW0190WbTt2+ZS/B7ipqvRfrhdcfn8/7n8yLcMu02/Mcsr/UafWfPPtl/q/hVgWnW9rKNl/S23p+dbPlrvKn8c+rS/NevxKsc7NnXR18NbHlhffzl8rPCgAMdgAAAAAAAAAAAAAAAAAAAdjT7X8bf07RSjHzJxh1TeIx6ml1SfolnJo91oWgbbvPwGt1rutWSXU4dKhyu66PT7snLOY9GybswBqtPSNsaq/Ltbyvbzfbr6kvu5wcf8R1tW8HbhW343a9xSvKTWV0uMZNfJ5cJf8AMiPjY+PT3bxrND8Oe9tKlhdStb6nKnUj70Zpxa+zPihRlcVlRt4ylOTSjGKbcm+ySXLfyOu6XGDQaPg5qlXT3dOFGMsZ8qVT238uE4J/WRRr6yqaddys7+nKnUg8SjNYa+305z6k4545dq2yx1wAUwAAEnoGuVdCvfxFo8xfvwb9ma+fwfwfp+aJvc+jU7vTluTQV+ol/tYLvSl68eiy8NenDXDKiWvw812OlayrPUcO1uP1dWMvdXVwp/34fyb+CN36PJraFmc1tP6vH/KeV9Z4X9uyqAn98bcltbclTTJZ6OJ0m/7VOWen8sOL+cWQBku83esAAAAAAAAAAAAAAAAAAAJY7AlttaHLXr926q06NOEXUq1arxCnBNJt/F5kkl6ti3ab0NqaStd3Jb6VNtRq1Ixk1jKj3k1njPSmd69qXWw91V7LSbidOVKo49UXxOPeDlF+zL2WnhpmjeHul6JYbooUtOvKtze5l0PolGnlU5OTS6cY6c95MkN5T27U3TXobljON1mHmTXn4y6cenDg2vd6fTB5rq/Nttdtl8eiK0fdll4k28dD3rTjSu37NG4h7OZPsk3npk/3XmMn88I62yNqT2l4lvSNWeJVaFZWlxGKxnCbnFSylNQUlh5w/ipJuJ31sO1sNv8A9ZdpXXnWymozi5KTi5NJdMkk+G0ulrKznJafxT3z4K1L2+b/ABVn5jVVcNyox6m898ypSw/i+SbZJ8va9PZs9Xf39Scumle6nSs9MgliFCpKdxcPvJv1bbz6y/eefTHt67g/rPuKepRg4QajCnFvMlCCxHqfrJ939fU1Cl4U2b3TSt6uVSVnTqSpRnidaqnKM8NviPEW8NcyXKJW60e102i4U9s1ZxXr/wDnnJ/lVlIzDPHD1LLXn0+pQcYqUk0nym13SeG18eU19jVtobKtN83t7eRoTs6MOmlSp9bbhVeeqUupd0+ldHb2mvgznjt53PhXeaLqsErrS6tSUGv3OKrw+/TKMp/4X6Ha6032TxZAD0Hp209MtNt0dUnotxOpU70WpVKse/MlKailxn095cLlFXt9H03V9ara/Qsq1G1sl0VbaaivOuerFOlGCcuW8Rcc8twWOWZNeXwODJA+Vg2iw8MbO2p06G7KklfXsp+VSovEaL6XJ4SzlR9W/Z7JfF0Lanh/d7qhVlpbpYoz8ufXNxy/liL4KmtjdzjXY3PVv9f2fa65qsaTt6ObeFSOfMfp+s5eeaffjv8AMphvNl4dXsPC6vtq4dHz5V41aTU5dKjmm2m+nKfsz9PUzvcvhjfba0eeq6i6LpwcVLonJv2pKK4cV6yXqTp6mPb16FlUoAHdIAAAAAAAAAAAAAAAASOg6vLRdQ/FUoxnFpwqU5rMalOXvQkvg8d/RpP0OCtp1ahYQv61Kao1G1TqOL6ZOLaaUu2cxfHyOqZdrNhr/htoVle7xt9d2xcqMYObq2ld/rafVTnH2Jf7yOZLn4d3ngjfFXaF9f77uL2wtK1SlPy3GUI9SeKUE+3ziyh7f1eega3S1azSc6UupKXZ5TTTxzhptFnvfFjVK2oTurW48qM3lU4wpyjHCSwuuMn6Z+rZx4ZzPedfde82SFlszXdw2FLRryEqVpS91VuinCOPVxiuub5fLT7vnkn97ahb7A2A9l6TVVW5qqSrSWOFPmpKSXutr2VHvjn0y6BqXiHqmp0vKu76r0vv5fRSz96cYsrDeXl93yxNPK/V28ozlPBvPiBqtlHctjX1CdJwna1VTqSgq0KU5SpOnVlTz7UeJL759CwWk6H9GRuLy/sYKLUnVtMUXJRaeMqq1h4w00003wjzJxE/cLuZ+n6d2824a1vK1utpateaNVUak7mk6XKjObUbaKqRi+cZpyf0i2/U5rrxFsNV2TVuLqSp3tzSjbV4JPq56oua9OhKpOSl8OO6wYSDf0+LOb1VufT/AMXCOovVKlpaRprPlShFS7vrdSWfTCWF6euSA8IKdGpp15O3lOtbK9nVp163Eqj8uHVOWcZaaz1NeueGuPOsqrlBQlJtR7JttL6L0Ny3DWW1fAmjZ2/E7mFOD+brZqVf8PUvyOWWlxkx37qmW7n3zrlptbVK2uwrq51OpB07eCacLaD4zhP2e+ct5k28JJswaMnH3W/ny+T8Sx2B6NPTmERbu0jQq3R4Hag5S9qVzSS554lbP69smcym5LEm39Wz5xzkFY47bloACmAAAAAAAAAAAAAAAANphTVT9GzM1nHU18mr18/6+JkMNLr1Lb8VToVXTxnrVObjj49WMHoHw7qUKHgxSuNaipUKarVJprOfLuak1x6+1FcepVIeO9VX+ZWUFb591TfmKP1x05x6Y+/qeXDLKXKYzfrXSyeLHk89g+O5sXjftyhPTKO7dHioqq4qp0rCmpxcoVMfHjD+PUvgcnhptW00Laz3tutJ8ddKMkmoRziMlH+1OT7fVfE6fGnHknj1ZLR0q4r0PxFC3rSh36o05uP5pYOn64NguPHet+MzaWVPyU+FKcutr05S6Yv5YePmTGs6TZ+K21Ja7odPyr6nnK46nKKy6c8cSTXuz78rtzEfFyn1TaHGeCB/R7s6d3qV2runCaUKWOuKlj2p5xlGbbjp+XuC5jFYXn1kuMLCqS4Rsf6O+sOtptfRujinJVevPfzOOnGOMdHfPqV/de5F4g70tdu3lFUqdK6nTlJTcnOPUovjpXS2ofF+8RMrNW9G7dGaW2n1rum6lpRqTiu7hCUkvq0sI6z7YR6K35vifh9f2+nWFlH8H0rMuYru06cMeypJLPPfPb1M88Sdxadeblttw7YfXVhNTrx6J01N05RlBtyill4cW1n0+BeGrll4dGXGLN4kafTpeD9nWoUoKo1a5lGCUnmk85aWTMNW3Xcarty30O96XTtm+iWGpNYxGMvT2VlfTHwPQe6N8S0HZFDcaoKbq+Tmn14UfMg5e90vOO3YoPhptm31aVzv3c0Yqj5tapTpz5hHEnKdSXHtJNuKTXeLeOxx089sd7PH8qsZRb6XXuaPn21CrOH70ac2vzSwdRRbeEnld1h8Gxaj461I3nTpFnDyE8LzJPqkvR4jxD6cl98Pdes93znrthSVK7UVTuI8Zw3mLbSXWvZeJYz3R0urnjN7izjK8wJNvCTyclK3nW6vJhKXSnKXTFvpS7t4XCx6s1Tw4/bddf8AEvf5rLF4p78oaDG52xp9up1a9KarzTUVB1oNZfDc54aeHjhrn4VdW8uMjOM2YIADskAAAAAAAAAAAAAAABtlB4/RrePhP/vWYmadT3faR8FHtl1X+LxL2OieObp1Pex0+5z3MxOWlLN/eqybjvn9g1n/AAWf+RHJvOjLVvAq1raZzGlTtp1FH92nDomvtLl/wsrm6d5Weo+FFtoFpVbuacbZSh0TSThFKXtNdL/MjvDPxHe04S03U4OrZzbeFhypt+84p8OL9Y/deueMwy47ydqrebs+Nu/R4tZ21heanX9mhJ04pvhN01Nzf0Smln/0fNSltO7qPUZTUecumvxEFn4eWln7R4IbfvibSu9Fe3Nn0vKtcdEp9Kh1Q9YQgvdi/Vvl5fHJWeV1JxkZJt1SvgDWVxuLUK9H3ZdMo/R1KjX9zM3ubG41De1ejosJSrq4rTgoe8nCpJ9S+mMlh8Gt20Nra5VWsNxpVoRj14bUZRbaylzh5fPpwQFruKWh77lr2m4n03FWaWcKcJyllZ+cZd/ThlTGzPLbyN+jTdO8W56dWeieIFm1OPTGpKKT4aTTnSfHZpvpf0j6EH42bOttGpUdc0KKhSrPolCPEMuLlGUF/ZTSeUuO3zLHqGt7c3fWjrGty6K0YrqjPzYyaXaMlD2Z/D2c/Apfi1vunuyrT0/R4tWtHLUmunrk1hNR7qKWUs88vhHPTl5zabefk29ly8Tv2L2X0tP5TP3TaL1T9Hp22lL24059UY924V3KosL1cU388la3XvO213wot9KpTxdUpUIzptNPFOEoucX2cXw++VnkhfDXxAnsu6lSrRdS1qPM4LHVGWMdcM8Zwkmn3wuVgTDLh6ym83Uk2L9HSzqPULq/WfJ6IU/k556vzS/zI7dzLautVnqVeSpyfM4Lz6eX6+xFYz/ASWi+Kmlabd/0XYRdCypw9iSpz9ubku0YpySxl9UuW3+e6mpc8dpKyTaq14cftuuv+Je/zWVTxb/aNefxQ/lUyR2dui20nxOuNevJtW85XTjJRk21Um3D2UsrK+P3KxvHWluLdFfV6UXCNWeYxeMqKiorOOM4jn7l4Y3nv6Mt6IYAHdIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/2Q==', alt: 'Logo 8' },
    { src: 'data:image/jpeg;base64,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', alt: 'Logo 9' },
    { src: 'data:image/jpeg;base64,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', alt: 'Logo 8' },

    { src: 'data:image/jpeg;base64,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', alt: 'Logo 8' },

    // { src: 'https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg', alt: 'Logo 7' },
    // { src: 'https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg', alt: 'Logo 7' },

  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,               
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,      
    arrows: false,
    pauseOnHover: true,       
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 py-8">
      {/* <h2 className="text-center text-2xl font-bold mb-8">Our Partners</h2> */}
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center">
            <img src={logo.src} alt={logo.alt} className="h-24 w-24 object-contain" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoSlider;
