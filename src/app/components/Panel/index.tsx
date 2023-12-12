"use client"
import React, { useState } from 'react'
import Clock from '../Clock'
import { PanelWrapper } from './index.style'
import PanelIcons from '../PanelIcons'
import { useRouter } from 'next/navigation'

const Panel = ({controlState, setControlState, notificationState, setNotificationState}) => {
  const router = useRouter();
  const [onActivities, setOnActivities] = useState(false);

  const handleActivities = () => {
    const path = !onActivities ? '/activities' : '/';
    router.push(path);
    setOnActivities(!onActivities);
  }

  return (
    <PanelWrapper>
      <p onClick={handleActivities}>Activities</p>
      <Clock notificationState={notificationState} setNotificationState={setNotificationState} />
      <PanelIcons controlState={controlState} setControlState={setControlState} />
    </PanelWrapper>
  )
}

export default Panel