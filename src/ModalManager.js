import ConfirmPayment from "./components/ConfirmPayment";
import BookingPage from "./components/BookingPage";
import Checkout from "./components/Checkout";
import SuccessPage from "./components/Successpage";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
const ModalManager = ({ closeFn, modal = "" }) => {
  return (
    <>
      <LogIn closeFn={closeFn} open={modal === "login"} />
      <Register closeFn={closeFn} open={modal === "register"}/>
      <BookingPage closeFn={closeFn} open={modal === "booking-page"} />
      <ConfirmPayment closeFn={closeFn} open={modal === "confirm-payment"} />
      <SuccessPage closeFn={closeFn} open={modal === "success-page"} />
      <Checkout closeFn={closeFn} open={modal === "checkout"} />
    </>
  );
};

export default ModalManager;
