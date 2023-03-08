import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./components/HomeScreen";
import BookingComponent from "./components/BookingComponent";
import HowItWorks from "./components/HowItWorks";
import Cars from "./components/Cars";
import WhyChooseUs from "./components/WhyChooseUs";
import CarGallery from "./components/CarGallery";
import Testimonies from "./components/Testimonies";
import LogIn from "./components/LogIn";
import BookingPage from "./components/BookingPage";
import ConfirmPayment from "./components/ConfirmPayment";
import ModalManager from "./ModalManager";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [modalOpen, setModal] = useState(false);

  const openModal = (event) => {
    event.preventDefault();
    const {
      target: {
        dataset: { modal },
      },
    } = event;
    if (modal) setModal(modal);
  };

  const closeModal = () => {
    setModal("");
  };
  return (
    <BrowserRouter>
      <div onClick={openModal}>
        <Header />
        <HomeScreen />
        <BookingComponent />
        <HowItWorks />
        <Cars />
        <WhyChooseUs />
        <CarGallery />
        <Testimonies />
        <ModalManager closeFn={closeModal} modal={modalOpen} />
        {/* <LogIn/> */}
        {/* <BookingPage/>
    <ConfirmPayment/> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
