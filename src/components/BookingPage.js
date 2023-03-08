import blackcar from "../images/blacksaloncar.png"
import Checkout from "./Checkout";
import { useState } from "react";
import Modal from "./Modal";
const BookingPage = ({ closeFn = () => null, open = false }) => {
    // const [showCheckoutModal,setShowCheckoutModal] = useState(false);
    // const [showBookingForm,setShowBookingForm] = useState(true);
    // if (!visible) return null;
    // const handleOnBackDropClick = (e) => {
    //     if (e.target.id === "backdrop")  onClose();
    //   };
    //   const handleClick = event => {
    //     // 👇️ toggle shown state
    //     // setShowBookingForm(current => !current);
    //     setShowBookingForm(false);
    //     // setShowCheckoutModal(true);
        
        
    //   };

     
    return  ( 
        <Modal open={open}>
        <div className="flex flex-row w-3/5 bg-white z-10 m-auto fixed top-64 left-0 right-0  space-x-4 py-12  border-2 rounded-md justify-center   border-green-500">
            <div className="flex flex-col space-y-4">
                <div className="flex flex-row space-x-4 ">
                    <div className="flex flex-col space-y-1">
                        <div className="text-sm font-medium">Pick-Up</div>
                        <div className="font-light text-sm">Haatso,Atomic, Legon</div>
                        <div  className="text-sm font-medium">Thu,Feb 05,12:00PM</div>
                    </div>
                    <section className="border bg-slate-400"></section>
                    <div className="flex flex-col space-y-1">
                        <div className="text-sm font-medium">Pick-Up</div>
                        <div className="font-light text-sm">Haatso,Atomic, Legon</div>
                        <div  className="text-sm font-medium">Thu,Feb 05,12:00PM</div>
                    </div>
                </div>

                <section className="border bg-slate-400" ></section>
                <div className="flex flex-row space-x-8">
                    <div>
                        <img src={blackcar} className="rounded-lg border border-black w-48 h-32" alt="" />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <div className="text-md font-medium">KIA Optima</div>
                        <div className="text-sm font-medium">5</div>
                        <div className="text-sm font-medium">Auto</div>
                        <div className="text-sm font-medium">3</div>

                    </div>
                </div>

            </div>

            <section className="border border-gray-400"></section>
            <div className="flex flex-col space-x-4">
                <div className="flex flex-row justify-between space-x-24">
                <div className="flex flex-col space-y-2">
                        <div className="text-md font-medium">Base Rate</div>
                        <div className="text-sm font-medium">Taxes & Fees</div>
                        <div className="text-sm font-medium">Estimated Total</div>
                       

                    </div>
                    <div className="flex flex-col space-y-2">
                        <div className="text-md font-medium">$500.00/day</div>
                        <div className="text-sm font-medium">$50.00</div>
                        <div className="text-sm font-medium">$550.00</div>
                        

                    </div>   

                </div>
                <section className="border mt-2 mb-6 border-gray-400"></section>
                {}
                <button className="bg-black text-white rounded py-1 w-48  mt-14   float-left text-center text-sm" type="button" data-modal="checkout" >
                    PROCEED TO CHECKOUT
                </button>
               

            </div>
            
{/* <Checkout visible={showCheckoutModal}  ></Checkout> */}
        </div>
        </Modal>
     );
}
 
export default BookingPage;