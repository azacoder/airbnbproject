import { MyNavbar } from "../../Components/MyNavbar/MyNavbar"
import { Profile } from "../../Components/Profile/Profile"
import { SubmitAds } from "../../Components/SubmitAds/SubmitAds"
import { MyContent } from "../Content/MyContent"

export const  Home =  () => {
    return(
        <div>Home page
            <MyNavbar/>
            <MyContent/>
            <Profile/>
            <SubmitAds/>
        </div>
    )
}