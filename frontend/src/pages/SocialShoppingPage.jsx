// // // SocialShoppingPage.jsx

// // import React from "react";
// // import VideoCallInterface from "../components/VideoCallInterface";
// // // Import other necessary components for the social shopping feature

// // const SocialShoppingPage = ({ currentUser, roomId }) => {
// //   return (
// //     <div>
// //       <h1>Social Shopping Page</h1>
// //       {/* Render other components for the social shopping feature */}
// //       <VideoCallInterface currentUser={currentUser} roomId={roomId} />
// //     </div>
// //   );
// // };

// // export default SocialShoppingPage;

// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useSearchParams } from "react-router-dom";
// import Footer from "../components/Layout/Footer";
// import Header from "../components/Layout/Header";
// import Loader from "../components/Layout/Loader";
// import ProductCard from "../components/Route/ProductCard/ProductCard";
// import VideoCallInterface from "../components/VideoCallInterface/VideoCallInterface"; // Import the VideoCallInterface component
// import { useParams } from "react-router-dom"; // Import useParams to get roomId from URL parameters

// const SocialShoppingPage = ({ currentUser }) => { // Receive the currentUser prop from App.jsx
//   const [searchParams] = useSearchParams();
//   const categoryData = searchParams.get("category");
//   const { allProducts, isLoading } = useSelector((state) => state.products);
//   const [data, setData] = useState([]);
//   const { roomId } = useParams(); // Get roomId from URL parameters

//   useEffect(() => {
//     if (categoryData === null) {
//       const d = allProducts;
//       setData(d);
//     } else {
//       const d =
//         allProducts && allProducts.filter((i) => i.category === categoryData);
//       setData(d);
//     }
//     //    window.scrollTo(0,0);
//   }, [allProducts]);

//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <div>
//           <Header activeHeading={3} />
//           <br />
//           <br />
//           <div className="flex justify-center items-center">
//             {/* Render the VideoCallInterface component */}
//             <VideoCallInterface currentUser={currentUser} roomId={roomId} />
//           </div>
//           <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
//             {data &&
//               data.map((i, index) => <ProductCard data={i} key={index} />)}
//           </div>
//           {data && data.length === 0 ? (
//             <h1 className="text-center w-full pb-[100px] text-[20px]">
//               No products Found!
//             </h1>
//           ) : null}
//           <Footer />
//         </div>
//       )}
//     </>
//   );
// };

// export default SocialShoppingPage;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";

const SocialShoppingPage = ({ currentUser }) => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const { allProducts, isLoading } = useSelector((state) => state.products);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (categoryData === null) {
      const d = allProducts;
      setData(d);
    } else {
      const d =
        allProducts && allProducts.filter((i) => i.category === categoryData);
      setData(d);
    }
  }, [allProducts, categoryData]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={3} />
          <br />
          <br />
          <div className={`${styles.section}`}>
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
              {data &&
                data.map((i, index) => (
                  <ProductCard data={i} key={index} currentUser={currentUser} />
                ))}
            </div>
            {data && data.length === 0 ? (
              <h1 className="text-center w-full pb-[100px] text-[20px]">
                No products Found!
              </h1>
            ) : null}
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default SocialShoppingPage;
