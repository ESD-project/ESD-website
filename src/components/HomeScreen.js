import BookingPage from "./BookingPage";
import { useState } from "react";
import Checkout from "./Checkout";
const HomeScreen = ({}) => {
  // const [showCheckoutModal,setShowCheckoutModal] = useState(false);
  // const [showBookingForm,setShowBookingForm] = useState(false);
  return (
    <div className="bg-my-image w-full flex flex-col   bg-cover  h-screen ">
      <div className="absolute p-8 flex flex-col space-y-8">
        <div className="text-white text-sm font-light ">
          100% Trusted Car rental platform in Accra
        </div>
        <div className="font-bold text-3xl w-96">
          FAST AND EASY WAY TO RENT A CAR
        </div>
        <div className="ml-8 w-96">
          Need a car? Oh, you've come to the right place. Book cars on demand by
          the hour or day. Join instantly , drive in minutes.{" "}
        </div>
        <div className="flex flex-row space-x-2">
          <button
            className="w-32 rounded text-white bg-black p-2 text-center"
            type="button"
            data-modal="booking-page"
          >
            Booking now
          </button>
          <div className="w-32 rounded text-white bg-black p-2 text-center">
            See all cars
          </div>
        </div>
      </div>
      {/* <Checkout visible={showCheckoutModal} onClose={()=>setShowCheckoutModal(false)  }></Checkout>
           <BookingPage visible={showBookingForm} onClose={() => setShowBookingForm(false)}></BookingPage> */}
    </div>
  );
};

export default HomeScreen;
