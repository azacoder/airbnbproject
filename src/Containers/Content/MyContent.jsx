import { BtnPopular } from "../../Components/BtnPopular/BtnPopular"
import { Cities } from "../../Components/Cities/Cities"
import { CompTwoCities } from "../../Components/CompTwoCities/CompTwoCities"
import { ListingCards } from "../../Components/ListingCards/ListingCards"

export const MyContent = () => {
    return(
        <div>
            Content page
            <Cities/>
            <BtnPopular/>
            <ListingCards/>
            <CompTwoCities/>
        </div>
    )
}