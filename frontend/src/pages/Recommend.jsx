import React from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";
import hairstyle from '../Assests/images/hairstyle.png'

const RecommendationsPage = () => {
  return (
    <div>
      <Header activeHeading={0} />
      <Recommendations />
      <Footer />
    </div>
  );
};

const Recommendations = () => {
  return (
    <div className={`${styles.section} my-8`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Recommendations</h2>
      <div className="flex justify-between">
        <div className="w-1/2">
          <a href="http://localhost:8501/">
            <img
              src={hairstyle}
              alt="Hairstyle Recommendation System"
              className="w-full"
            />
          </a>
        </div>
        <div className="w-1/2">
          <a href="http://localhost:8501/">
            <img
              src="/path/to/image2.jpg"
              alt="Recommendation 2"
              className="w-full"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecommendationsPage;
