import React, { useEffect, useState } from "react";
import ProfileTabSidebar from "./ProfileTabBar";
import General from "./General";
import { useDispatch, useSelector } from "react-redux";
import {
  getAddressThunkMiddleware,
  getGeneralInfoThunkMiddleware,
} from "../../redux/features/profile";
import ScaleLoading from "../../components/layouts/loader/ScaleLoading";
import Address from "./Address";

const Profile = () => {
  const dispatch = useDispatch();
  const [profileTab, setProfileTab] = useState("General Info");
  const { profileLoader } = useSelector((state) => state.loader);

  useEffect(() => {
    if (profileTab === "General Info")
      dispatch(getGeneralInfoThunkMiddleware());
    else if (profileTab === "Address") dispatch(getAddressThunkMiddleware());
  }, [dispatch, profileTab]);

  return (
    <div className="h-full flex flex-col gap-4">
      <ProfileTabSidebar
        profileTab={profileTab}
        setProfileTab={setProfileTab}
      />

      {profileLoader ? (
        <div className="grid place-items-center h-full">
          <ScaleLoading />
        </div>
      ) : (
        <>
          {profileTab === "General Info" && <General />}
          {profileTab === "Address" && <Address />}
        </>
      )}
    </div>
  );
};

export default Profile;
