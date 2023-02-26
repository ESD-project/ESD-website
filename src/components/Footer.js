import logo from "../images/logo.png"
const Footer = () => {
    return ( 
        <div className="flex flex-col p-12 w-full bg-gray-300 mt-4 ">
            <div className="w-100% flex flex-row justify-between">
                <div className="w-30% flex flex-col space-y-2">
                    <div>
                        <img src={logo} className="w-16" alt="" />
                    </div>
                    <div className="text-black text-xs w-52">
                        Our vision is to provide convenience and help increase your sales business
                    </div>
                    {/* social media icons*/}
                    <div className="flex flex-row space-x-4">

                    </div>
                </div>
                <div className="flex flex-row space-x-32">

                    <div >
                        <ul className="flex flex-col space-y-4">
                            <li className="font-medium text-sm">About</li>
                            <li className="text-xs font-normal">How it Works</li>
                            <li className="text-xs font-normal">Featured</li>
                            <li className="text-xs font-normal">Partnership</li>
                            <li className="text-xs font-normal">Business Relation</li>
                        </ul>
                    </div>

                    <div >
                        <ul className="flex flex-col space-y-4">
                            <li className="font-medium text-sm">About</li>
                            <li className="text-xs font-normal">How it Works</li>
                            <li className="text-xs font-normal">Featured</li>
                            <li className="text-xs font-normal">Partnership</li>
                            <li className="text-xs font-normal">Business Relation</li>
                        </ul>
                    </div>

                    <div >
                        <ul className="flex flex-col space-y-4">
                            <li className="font-medium text-sm">About</li>
                            <li className="text-xs font-normal">How it Works</li>
                            <li className="text-xs font-normal">Featured</li>
                            <li className="text-xs font-normal">Partnership</li>
                            <li className="text-xs font-normal">Business Relation</li>
                        </ul>
                    </div>
                </div>
            </div>
            <section className="bg-gray-400 w-full h-1 my-4"></section>
            <div className="flex flex-row justify-between">
                <div className="w-48 text-xs">@2023 ESDAutomotive. All rights reserved</div>
                <div >
                    <ul className="flex flex-row space-x-6">
                        <li className="text-black text-xs">Privacy & Policy</li>
                        <li  className="text-black text-xs">Terms and Conditions</li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;