import React, { useState } from 'react';

function App() {
  const DEFAULT_PROFILE = 'ogbu_olu';

  const [profileId, setProfileId] = useState(DEFAULT_PROFILE);
  const [profileActive, setProfileActive] = useState(false);
  const [picture, setPicture] = useState(undefined);
  const [profile, setProfile] = useState(undefined);

  const handleChange = ({ target: { value } }) => {
    setProfileId(value);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const res = await fetch(`/api/${profileId}`);

      if (res.ok && res.status === 200) {
        const json = await res.json();
        setProfile(json);

        const resPic = await fetch(`/api/img/${profileId}`);
        const picBlob = await resPic.blob();
        const pic = await URL.createObjectURL(picBlob);
        setPicture(pic);
        setProfileActive(true);
      } else {
        setProfileActive(false);
      }
    } catch (err) {
      setProfileActive(false);
    }
  };

  return (
    <div className="App">

      <form onSubmit={handleSubmit}>
        <span>Find karate champion: </span>
        <select className="search-column" value={profileId} onChange={handleChange}>
          <option value="ogbu_olu"> Ogbu Olu </option>
          <option value="chuck_norris"> Chuck Norris </option>
        </select>
        <button type="submit" className="click"> GET PROFILE </button>
      </form>

      <br />
      { profileActive && <img src={picture} alt="Profile" /> }
    </div>
  );
}

export default App;
