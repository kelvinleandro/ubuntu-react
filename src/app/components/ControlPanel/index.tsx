import React, { useState } from 'react'
import { VolumeUp, VolumeDown } from '@mui/icons-material'
import { Stack, Slider } from '@mui/material'
import {status} from '@public/data'
import Image from 'next/image'

const ControlPanel = () => {
  const [value, setValue] = useState(25);

  const handleChange = (event, value) => {
    setValue(value);
  };

  const statusOptions = status.map((icon, index) => (
    <div key={index} className='flex flex-row gap-3 p-1 rounded hover:bg-[#e6e6e6] cursor-default'>
      <Image src={icon.img} alt={icon.name} width={20} height={20} style={{ filter: 'brightness(0)' }} />
      <p>{icon.name}</p>
    </div>
  ))
  
  return (
    <div className='rounded-xl absolute z-20 top-0 right-0 bg-white w-[25%] px-4 py-1 flex flex-col gap-1'>
      <Stack spacing={2} direction="row" alignItems="center">
        {value > 50 ? <VolumeUp /> : <VolumeDown />}
        <Slider aria-label="Volume" defaultValue={25} value={value} onChange={handleChange} sx={{
          color: '#ea4f06',
          "& .MuiSlider-thumb": {
            backgroundColor: "#fff",
            border: "1px solid #aeaeae",
            "&:hover, &.Mui-focusVisible": {
              boxShadow: '0px 0px 0px 0px'
            },
          },
          "& .MuiSlider-rail": {
            color: "#aeaeae"
          }
        }} />
      </Stack>

      {statusOptions}
    </div>
  )
}

export default ControlPanel