import { Route, Router, Routes } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import HowItWorks from './HowItWorks';
import Cars from './Cars';
import WhyChooseUs from './WhyChooseUs';
import Testimonies from './Testimonies';
const ScreenSwitchManager = () => {
    return ( 
        <Router>
            <Routes>
            <Route exact path='/' element={<HomeScreen/>}>
            <Route index element={<HomeScreen/>}/>  
            
            <Route path='/how-it-works'/>
             
            <Route path='/cars'/>
              
            <Route path='/why-choose-us'/>
              
            <Route path='/testimonies'/>
                
            </Route>
            </Routes>
        </Router>
     );
}
 
export default ScreenSwitchManager;