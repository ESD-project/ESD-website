import Modal from "./Modal";
const ConfirmPayment = ({ closeFn = () => null, open = false }) => {
    
    return ( 
        <Modal open={open}>
        <div className="flex flex-col w-3/5 bg-white z-10 m-auto fixed top-64 left-0 right-0  space-y-4 p-12  border-2 rounded-md justify-center   border-green-500">
            <div className="font-medium text-sm ">PAYMENT METHOD</div>
            <section className="border mt-2 mb-6 border-gray-400"></section>
            <div className="text-xs font-medium">How do you want to pay for your reservation?</div>
            <div className="text-xs font-light w-2/3">Kindly take note that you will be charged a security of 50% of the intial base rate. This will be refunded 
                only when the vehicle is returned without any breach of Terms and Conditions. Thank you.
            </div>
            <div className="flex flex-col space-y-4">
                <div className="flex flex-row space-x-2">
                    <div className="w-4 h-4 rounded-full bg-gray-500 border-none"></div>
                    <div className="font-medium -mt-1">Pay Cash on Pick-up or delivery</div>
                </div>
                <div className="flex flex-row space-x-2">
                    <div className="w-4 h-4 rounded-full bg-gray-500 border-none"></div>
                    <div className="font-medium -mt-1">Mobile Money</div>
                </div>
            </div>
            <section className="border mt-2 mb-6 border-gray-400"></section>
            <div className="flex flex-row space-x-2">
                <div className="w-4 h-4 rounded-sm border border-gray-500"></div>
                <div className="font-normal -mt-1">I HAVE READ AND ACCEPTED THE
                 <span className="text-red-500"> RENTAL TERMS AND CONDITIONS.</span> </div>
            </div>
        </div>
        </Modal>
     );
}
 
export default ConfirmPayment;