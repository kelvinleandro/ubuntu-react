import React from 'react'
import {panelIcons} from '../../../../public/data'
import Image from 'next/image'

const PanelIcons = () => {
  return (
    <div className='flex gap-1'>
      {panelIcons.map((icon, index) => {
        return <Image 
          src={icon.img} 
          alt={icon.name} 
          width={20} 
          height={20} 
          key={index}
          style={{ filter: 'brightness(0) invert(1)' }} 
        />
      })}
    </div>
  )
}

export default PanelIcons