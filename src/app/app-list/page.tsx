import React from 'react'
import Image from 'next/image'
import background from '@public/22_04.jpg'
import {appGridIcons} from '@public/data'

const AppList = () => {
  return (
    <div className='bg-[#222] w-full h-full flex flex-col items-center justify-start absolute -z-20 top-0 left-0 gap-5'>
      <input type="search" name="search-app" id="search-app" className='rounded-2xl p-[0.30rem] w-[20%] mt-5 mb-3 outline-red-600' placeholder='Type to search'/>
      <div className='w-[30%] h-[20%] flex gap-3'>
        <Image src={background} alt='Ubuntu wallpaper' className='object-fit w-[50%]'/>
        <Image src={background} alt='Ubuntu wallpaper' className='object-fit w-[50%]'/>
      </div>
      <div className='grid grid-cols-8 grid-rows-3'>
        {appGridIcons.map((icon, index) => (
          <div key={index} className='flex flex-col items-center justify-center hover:bg-[#363636] text-white'>
            <Image src={icon.img} alt={icon.name} width={70} height={70} />
            <p>{icon.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AppList