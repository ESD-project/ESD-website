import Modal from "./Modal";
const SuccessPage = ({ closeFn = () => null, open = false }) => {
    return ( 
<Modal open={open}>
    <div className="flex flex-col w-2/5 bg-white z-10 m-auto fixed top-64  left-0 right-0 space-y-8 py-12  border-2 rounded-md justify-center   border-green-500">
     <div className="w-16 h-16 m-auto rounded-full bg-green-500"></div>
     <div className="text-md font-bold text-center">THANK YOU</div>
     <div className="text-md font-bold text-center">YOUR RESERVATION WAS SUCCESSFUL</div>
     <div className="flex justify-center">
        <button className="text-white bg-black rounded-sm w-32 m-auto   p-1  text-center  text-sm " onClick={closeFn}>DONE</button>
     </div>
    </div>
</Modal>
     );
}
 
export default SuccessPage;