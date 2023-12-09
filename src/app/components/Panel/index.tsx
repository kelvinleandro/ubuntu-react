"use client"
import React from 'react'
import Clock from '../Clock'
import { PanelWrapper } from './index.style'
import PanelIcons from '../PanelIcons'

const Panel = () => {
  return (
    <PanelWrapper>
      <p>Activities</p>
      <Clock />
      <PanelIcons />
    </PanelWrapper>
  )
}

export default Panel