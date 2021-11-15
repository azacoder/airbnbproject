import React from "react";
import { Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Profile.css";
import profileIcon from '../../assets/image/profile.png'
import logout from '../../assets/image/log.jpg'
import { getAuth, signOut } from "@firebase/auth";
import { useDispatch } from "react-redux";
import { userAction } from "../../store/action/action";

const Profile = () => {
  const dataUser = useSelector((state) => state.userData);
  const dispatch = useDispatch()
  const auth = getAuth();
  const logOutFunc = () => {
    signOut(auth).then(() => {
      localStorage.removeItem("IdTokenGoogle");
      dispatch(userAction(null))

    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div class="right-menu">
      <Image className="avaImg" src={dataUser.avatar} roundedCircle />
      <div class="dropdown-menu">
        <NavLink to='/profile_user'>
          <img className='icons' src={profileIcon} />
          Profile
        </NavLink>
        <NavLink to='/' onClick={logOutFunc} >
          <img className='icons' src={logout} />
          Log out
        </NavLink>
      </div>
    </div>
  )
};

export default Profile;
