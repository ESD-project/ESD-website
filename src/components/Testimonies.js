import TestimonyCard from "../components/TestimonyCard";
const Testimonies = () => {
    return ( 
        
        <div className="flex flex-col space-y-4 p-8 bg-white">
            <div className="text-3xl font-medium w-96 m-auto text-center">Trusted by thousands of Happy Customers</div>
            <div className="text-sm font-light text-center m-auto w-72">A high performing web-based rental system for any rent-a-car company and website </div>
            <div className="flex flex-row space-x-12 justify-center">
                <TestimonyCard/>
                <TestimonyCard/>
                <TestimonyCard/>
            </div>
        </div>
     );
}
 
export default Testimonies;