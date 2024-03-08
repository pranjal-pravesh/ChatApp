import React, { useState } from "react";
import SettingsThreads from "./settings-threads";
import ProfileSection from "./profile-section";
import { useDispatch, useSelector } from "react-redux";
import ThemesSection from "./themes-section";
import PasswordSection from "./password-section";

const SettingsTab = () => {
  const current = useSelector((state) => state.settingsSection);
  const screenWidth = useSelector((state) => state.screenWidth.screenWidth);
  const [display, setDisplay] = useState(0); //when display=1, messages will show and when display=0  threads are visible

  return (
    <>
      <SettingsThreads
        display={screenWidth > 820 ? 0 : display}
        setDisplay={setDisplay}
        screenWidth={screenWidth}
      />

      {current == 1 ? (
        <ProfileSection
          display={screenWidth > 820 ? 1 : display}
          setDisplay={setDisplay}
          screenWidth={screenWidth}
        />
      ) : current == 3 ? (
        <PasswordSection
          display={screenWidth > 820 ? 1 : display}
          setDisplay={setDisplay}
          screenWidth={screenWidth}
        />
      ) : (
        <ThemesSection
          display={screenWidth > 820 ? 1 : display}
          setDisplay={setDisplay}
          screenWidth={screenWidth}
        />
      )}
    </>

  );
};

export default SettingsTab;
