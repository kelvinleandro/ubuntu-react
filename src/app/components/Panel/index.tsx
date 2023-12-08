"use client"
import React from 'react'
import Clock from '../Clock'
import { PanelWrapper } from './index.style'
const Panel = () => {
  return (
    <PanelWrapper>
      <p>Activities</p>
      <Clock/>
      <p>Other text</p>
    </PanelWrapper>
  )
}

export default Panel