import blackcar from "../images/blacksaloncar.png"
const Checkout = ({visible,onClose}) => {
    if (!visible) return null;
    const handleOnBackDropClick = (e) => {
        if (e.target.id === "backdrop") onClose && onClose();
      };
    return ( 
        <div className="flex flex-col w-3/5 bg-white z-10 m-auto space-y-8 py-12  border-2 rounded-md justify-center   border-green-500">
            <div>
            <div className="flex flex-row space-x-12 justify-center ">
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
                

            </div>
           
        </div>
            </div>
            <div className="flex flex-col justify-center p-8 space-y-8">
            <div className="font-medium text-sm ">YOUR INFORMATION</div>
            <section className="border border-spacing 5"></section>
            <div>
                <form action="" className="flex flex-col space-y-4">
                    <div className="flex flex-row space-x-8">
                    <div className="flex flex-col space-y-1">
                        <div><label htmlFor="firstname">First Name</label></div>
                        <div><input type="text" className="border  p-1 w-64 rounded-sm border-gray-500"  />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <div><label htmlFor="firstname">Last Name</label></div>
                        <div><input type="text" className="border  p-1 w-64 rounded-sm border-gray-500"  />
                        </div>
                    </div>
                    </div>
                    <div className="flex flex-row space-x-8">
                    <div className="flex flex-col space-y-1">
                        <div><label htmlFor="firstname">Email</label></div>
                        <div><input type="email" className="border  p-1 w-64 rounded-sm border-gray-500"  />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <div><label htmlFor="firstname">Phone</label></div>
                        <div><input type="phone" className="border  p-1 w-64 rounded-sm border-gray-500"  />
                        </div>
                    </div>
                    </div>
                    <div className="flex flex-row space-x-8">
                    <div className="flex flex-col space-y-1">
                    <div><label htmlFor="firstname">Type of identification</label></div>
                        <div><select name="identification" id="" placeholder="" className="w-64 border p-1 rounded-sm  border-gray-500">
                            <option value="Ghana Card"></option>
                        </select>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <div><label htmlFor="firstname">Enter identification Number</label></div>
                        <div><input type="text" className="border  p-1 w-64 rounded-sm border-gray-500"  />
                        </div>
                    </div>
                    
                    </div>
                </form>
            </div>
            </div>
            <div className="">
            <div className="text-white bg-black rounded-sm m-auto w-32 p-1 flex float-right mx-8 text-sm">Proceed to reserve</div>
        </div>
        </div>
     );
}
 
export default Checkout;