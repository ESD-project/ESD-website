import ConfirmPayment from "./components/ConfirmPayment";
import BookingPage from "./components/BookingPage";
import Checkout from "./components/Checkout";
const ModalManager = ({ closeFn, modal = "" }) => {
  return (
    <>
      <BookingPage closeFn={closeFn} open={modal === "booking-page"} />
      <ConfirmPayment closeFn={closeFn} open={modal === "confirm-payment"} />

      <Checkout closeFn={closeFn} open={modal === "checkout"} />
    </>
  );
};

export default ModalManager;
