import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./components/HomeScreen";
import BookingComponent from "./components/BookingComponent";
import HowItWorks from "./components/HowItWorks";

function App() {
  return (
    <div
    //  className="text-center text-3xl font-medium m-auto w-50% mt-64"
     >
     {/* <div>Coming soon</div> */}
     <Header/>
     <HomeScreen/>
     <BookingComponent/>
     <HowItWorks/>
     <Footer/>
    </div>
  );
}

export default App;
