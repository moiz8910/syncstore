// import React from "react";
// import { Link } from "react-router-dom";
// import styles from "../../../styles/styles";

// const Hero = () => {
//   return (
//     <div
//       className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
//       style={{
//         backgroundImage:
//           "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
//       }}
//     >
//       <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
//         <h1
//           className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
//         >
//           Best Collection for <br /> your style.
//         </h1>
//         <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
//         Wrap Yourself in Style: Where Comfort Meets Expression - {" "}
//           <br /> Discover Our Collection of Hoodies, Sweatshirts, and T-shirts!
//         </p>
//         <Link to="/products" className="inline-block">
//             <div className={`${styles.button} mt-5`}>
//                  <span className="text-[#fff] font-[Poppins] text-[18px]">
//                     Shop Now
//                  </span>
//             </div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";


const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://github.com/moiz8910/images-eshop/blob/main/banner.jpg?raw=true)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#2c2222] font-[600] capitalize`}
        >
          Best Curated Courses for <br /> Your Learning.
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#aeddd8ba]">
        Unleash Your Potential: Elevate Learning with AI-Driven Courses! - {" "}
          <br /> Explore a Spectrum of Knowledge: AI-Curated Courses Tailored to Your Growth!
        </p>
        <Link to="https://learning-journey.reluvate.tech/create" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Make Your Course Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
