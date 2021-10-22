import { BtnPopular } from "../../Components/BtnPopular/BtnPopular"
import { Cities } from "../../Components/Cities/Cities"
import { CompTwoCities } from "../../Components/CompTwoCities/CompTwoCities"

export const MyContent = () => {
    return(
        <div>
            Content page
            <Cities/>
            <BtnPopular/>
            <CompTwoCities/>
        </div>
    )
}