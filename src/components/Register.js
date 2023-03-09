import Modal from "./Modal";
const Register = ({ closeFn = () => null, open = false }) => {
    return ( 
<Modal open={open}>
<div className="flex flex-col w-2/5 bg-white z-10 m-auto fixed top-32  left-0 right-0 space-y-8 py-12  border-2 rounded-md justify-center   border-green-500">
<form action="" className="flex flex-col w-84 m-auto space-y-4">
                    {/* <div className="flex flex-row space-x-8"> */}
                    <div className="text-xl text-center font-medium text-green-500">Sign Up</div>
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
                    {/* </div> */}
                    {/* <div className="flex flex-row space-x-8"> */}
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
                    {/* </div> */}
                    {/* <div className="flex flex-row space-x-8"> */}
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

                    <div className="text-white bg-black rounded-sm w-32 ml-32   p-1  text-center  text-sm " onClick={closeFn} >Register</div>
                    
                    {/* </div> */}
                </form>
</div>
</Modal>
     );
}
 
export default Register;