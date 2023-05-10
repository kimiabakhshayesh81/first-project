import Body from '../body/body'
import SingleCountry from'../SingleCountry/SingleCountry'
import {Routes, Route} from 'react-router-dom';

const WebRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<Body/>}/>
            <Route path='/details/:countryname'  element={<SingleCountry/>}/>
        </Routes>
    )
}

export default WebRoutes;