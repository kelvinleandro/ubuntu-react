"use client"
import React from 'react'
import Image from 'next/image'
import background from '@public/22_04.jpg'
import {appGridIcons} from '@public/data'
import {AppListWrapper, ImageWrapper, AppItem} from './page.style'

const AppList = () => {
  return (
    <AppListWrapper>
      <input type="search" name="search-app" id="search-app" placeholder='Type to search'/>
      <ImageWrapper>
        <Image src={background} alt='Ubuntu wallpaper' />
        <Image src={background} alt='Ubuntu wallpaper' />
      </ImageWrapper>
      <div className='grid grid-cols-8 grid-rows-3 gap-3'>
        {appGridIcons.map((icon, index) => (
          <AppItem key={index}>
            <Image src={icon.img} alt={icon.name} width={60} height={60} />
            <p>{icon.name}</p>
          </AppItem>
        ))}
      </div>
    </AppListWrapper>
  )
}

export default AppList