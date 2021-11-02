import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ListCardView } from "../../Components/ListCardView/ListCardView";
import { NavbarF } from "../../Components/NavbarF/NavbarF";
import Content from "../Content/Content";
import Profile from "../Profile/Profile";
import { SubmitAds } from "../SubmitAds/SubmitAds";

export const Home = () => {
  return (
    <BrowserRouter>
      <Switch>
        <div>
          <div className="Navbar">
            <NavbarF />
          </div>
          <Route exact path="/" component={Content} />
          <Route path="/submitads" component={SubmitAds} />
          <Route path="/profile" component={Profile} />
          <Route path={`/product/:id`} component={ListCardView} />
        </div>
      </Switch>
    </BrowserRouter>
  );
};
