'use client'
import React from 'react'
import Image from 'next/image'
import background from '@public/22_04.jpg'
import {ActivitiesWrapper} from './page.style'

const Activities = () => {
  return (
    <ActivitiesWrapper>
      <input type="search" name="search" id="search" placeholder='Type to search' />
      <Image src={background} alt='Ubuntu wallpaper' />
    </ActivitiesWrapper>
  )
}

export default Activities