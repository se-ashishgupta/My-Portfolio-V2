import React, { useEffect } from "react";
import { useMyContext } from "../../context/Context";

const Profile = () => {
  const { setopenMenu } = useMyContext();

  useEffect(() => {
    setopenMenu("Profile");
  }, []);
  return <div>Profile</div>;
};

export default Profile;
