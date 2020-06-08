import React, { useState, useEffect } from 'react';

function Profile({ profile, profileId }) {
  const [picture, setPicture] = useState(undefined);

  useEffect(
    () => {
      const fetchData = async () => {
        const resPic = await fetch(`/api/img/${profileId}`);
        const picBlob = await resPic.blob();
        const pic = await URL.createObjectURL(picBlob);
        setPicture(pic);
      };

      fetchData();
    },
    [],
  );

  return (
    <div className="profile_page">
      <div>
        <img src={picture} alt="Profile" />
      </div>
      <div>
        <h1>dadad</h1>
      </div>


    </div>
  );
}

export default Profile;
