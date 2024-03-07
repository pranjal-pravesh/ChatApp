import React, { useState } from 'react'
import SettingsThreads from './settings-threads'
import ProfileSection from './profile-section'
import { useDispatch, useSelector } from 'react-redux'
import PrivacySection from './privacy-section'
import ThemesSection from './themes-section'
import PasswordSection from './password-section'

const SettingsTab = () => {
  
    const dispatch = useDispatch();
    const current = useSelector(state=>state.settingsSection)

  return (
    <>
        <SettingsThreads/>

        {
          current==1?
          <ProfileSection/>
          :
          // current==2?
          // <PrivacySection/>
          // :
          current==3?
          <PasswordSection/>
          :
          <ThemesSection/>

        }
        
    </>
  )
}

export default SettingsTab