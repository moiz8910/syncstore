import React from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";
import hotelImage from '../Assests/images/hotel-image.jpg'

const HotelBookingContentPage = () => {
  return (
    <div>
      <Header activeHeading={0} />
      <HotelBookingContent />
      <Footer />
    </div>
  );
};

const HotelBookingContent = () => {
  return (
    <div className={`${styles.section} my-8`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Hotel Booking Content</h2>
      <div className="flex justify-center">
        <div className="w-3/4">
          <img
            src={hotelImage}
            alt="Hotel Booking"
            className="w-full"
          />
        </div>
      </div>
      <p className="mt-4 text-gray-700">
        This is the content related to hotel booking.
        You can display information about booking hotels, room availability, pricing, etc.
      </p>
    </div>
  );
};

export default HotelBookingContentPage;
