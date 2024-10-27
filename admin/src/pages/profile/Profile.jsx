import React, { useEffect, useState } from "react";
import ProfileTabSidebar from "./ProfileTabBar";
import General from "./General";
import { useDispatch, useSelector } from "react-redux";
import {
  getAddressThunkMiddleware,
  getGeneralInfoThunkMiddleware,
  getSocialLinksThunkMiddleware,
} from "../../redux/features/profile";
import ScaleLoading from "../../components/layouts/loader/ScaleLoading";
import Address from "./Address";
import SocialMedia from "./SocialMedia";
import Titles from "./Titles";

const Profile = () => {
  const dispatch = useDispatch();
  const [profileTab, setProfileTab] = useState("General Info");
  const { profileLoader } = useSelector((state) => state.loader);

  useEffect(() => {
    if (profileTab === "General Info") {
      dispatch(getGeneralInfoThunkMiddleware());
    } else if (profileTab === "Address") {
      dispatch(getAddressThunkMiddleware());
    } else if (profileTab === "Social Media") {
      dispatch(getSocialLinksThunkMiddleware());
    }
  }, [dispatch, profileTab]);

  return (
    <div className="h-full flex flex-col gap-4">
      {profileLoader ? (
        <div className="grid place-items-center h-full">
          <ScaleLoading />
        </div>
      ) : (
        <>
          <ProfileTabSidebar
            profileTab={profileTab}
            setProfileTab={setProfileTab}
          />

          {profileTab === "General Info" && <General />}
          {profileTab === "Address" && <Address />}
          {profileTab === "Social Media" && <SocialMedia />}
          {profileTab === "Titles" && <Titles />}
        </>
      )}
    </div>
  );
};

export default Profile;
