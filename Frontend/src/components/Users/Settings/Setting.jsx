import React, { useState } from 'react';
import SettingHeader from './SettingsHeader'
import ProfileInformation from './ProfileInformation';
import NotificationSettings from './ContactSupport';
// import AppearanceSettings from './AppearanceSettings';

function Setting() {
  return (
    <div className="p-6 bg-[#f5f6fa] min-h-screen">
        <SettingHeader />
       <div className="min-h-screen bg-[#FDF2F8] py-6">
      <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row gap-8 items-start">
        <div className="flex-1 flex flex-col gap-8 w-full">
          <ProfileInformation />
        </div>
        <div className="w-full lg:w-[400px] flex flex-col gap-8">
          <NotificationSettings />
          {/* <AppearanceSettings /> */}
        </div>

      </div>
    </div>
    </div>
  )
}

export default Setting