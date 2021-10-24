import { BrowserRouter, Route } from "react-router-dom";
import MyNavbar from "../../Components/MyNavbar/MyNavbar"
import MyContent from "../Content/MyContent"
import Profile from "../Profile/Profile";
import { SubmitAds } from "../SubmitAds/SubmitAds";


export const  Home =  () => {
    return(
        <BrowserRouter>
        <div>
            <div className='myn'><MyNavbar /></div>
            <Route path ='/mycontent' component = {MyContent}/>
            <Route path ='/submitads' component = {SubmitAds}/>
            <Route path ='/profile' component = {Profile}/>
        </div>
        </BrowserRouter>
    )
};