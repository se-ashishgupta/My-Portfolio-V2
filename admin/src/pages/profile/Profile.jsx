import React, { useEffect, useState } from "react";
import ProfileTabSidebar from "./ProfileTabSidebar";
import General from "./General";
import { useDispatch, useSelector } from "react-redux";
import { getGeneralInfoThunkMiddleware } from "../../redux/features/profile";
import ScaleLoading from "../../components/layouts/loader/ScaleLoading";

const Profile = () => {
  const dispatch = useDispatch();
  const [profileTab, setProfileTab] = useState("General Info");
  const { profileLoader } = useSelector((state) => state.loader);

  useEffect(() => {
    if (profileTab === "General Info")
      dispatch(getGeneralInfoThunkMiddleware());
  }, [dispatch, profileTab]);
  return (
    <div className=" space-y-4 h-full flex-col">
      <div className="p-2">
        <ProfileTabSidebar
          profileTab={profileTab}
          setProfileTab={setProfileTab}
        />
      </div>

      {profileLoader ? (
        <div className="grid place-items-center h-full">
          <ScaleLoading />
        </div>
      ) : (
        <>{profileTab === "General Info" && <General />}</>
      )}
    </div>
  );
};

export default Profile;
