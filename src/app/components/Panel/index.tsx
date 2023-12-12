"use client"
import React, { useState } from 'react'
import Clock from '../Clock'
import { PanelWrapper } from './index.style'
import PanelIcons from '../PanelIcons'
import { useRouter } from 'next/navigation'
import { PanelProps } from '@public/types'

const Panel = ({ handleNotificationVisibility, handleControlVisibility }: PanelProps) => {
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
      <Clock handleNotificationVisibility={handleNotificationVisibility} />
      <PanelIcons handleControlVisibility={handleControlVisibility} />
    </PanelWrapper>
  )
}

export default Panel