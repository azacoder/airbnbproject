import { useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ListCardView } from "../../Components/ListCardView/ListCardView";
import MyNavbar from "../../Components/MyNavbar/MyNavbar"
import MyContent from "../Content/MyContent"
import Profile from "../Profile/Profile";
import { SubmitAds } from "../SubmitAds/SubmitAds";


export const  Home =  () => {

    return(
        <BrowserRouter>
        <Switch>
        <div>
            <div className='myn'><MyNavbar /></div>
            <Route exact path ='/' component = {MyContent}/>
            <Route path ='/submitads' component = {SubmitAds}/>
            <Route path ='/profile' component = {Profile}/>
            <Route path ={`/product/:id`} component = {ListCardView}/>
        </div>
        </Switch>
        </BrowserRouter>
    )
};