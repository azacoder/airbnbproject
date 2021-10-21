import './SubmitAds.css'; 

export const SubmitAds = () => {
    return(
        <>
            <div className="Submit--Ads">
                <div className="Container--Form">
                <h2>Hi! Let's get started listing your place.</h2>
                <p>In this form, we'll collect some basic and additional information about your listing.</p>
                <p><span>*</span>Home Type</p>
                <div className="buttons--choose">
                    <div>Apartment</div>
                    <div>House</div>
                </div>
                <p><span>*</span>Max # of Guests</p>
                <input type="text" placeholder="4" />
                <p><span>*</span>Title</p>
                <input type="text" placeholder="" />
                <p>Max character count of 45</p>
                <p><span>*</span>Description of listing</p>
                <textarea></textarea>
                <p><span>*</span>Adress</p>
                <input type="text" />
                <p><span>*</span>Image</p>
                <input type="file" />
                <p><span>*</span>Price</p>
                <input type="text" />
                </div>
            </div>
        </>
    )
}