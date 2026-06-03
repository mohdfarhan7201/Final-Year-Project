import React from 'react'
import SettingHeader from './SettingsHeader'
import ProfileCard from './ProfileCard'
import PreferencesCard from '../../Users/Settings/ContactSupport'

function Setting() {
  return (
    <div className="p-6 bg-[#f5f6fa] min-h-screen">
        <SettingHeader />
        <div className="flex py-6 flex-col lg:flex-row gap-6 max-w-10xl w-full">
        <ProfileCard />
        <PreferencesCard />
      </div>
    </div>
  )
}

export default Setting