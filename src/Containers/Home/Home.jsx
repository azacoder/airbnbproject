import MyNavbar from "../../Components/MyNavbar/MyNavbar"
import MyContent from "../Content/MyContent"

export const  Home =  () => {
    return(
        <div>
            <div className='myn'><MyNavbar /></div>
            <MyContent />
        </div>
    )
};