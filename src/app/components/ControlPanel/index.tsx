import React, { useState } from 'react'
import { VolumeUp, VolumeDown } from '@mui/icons-material'
import { Stack, Slider } from '@mui/material'
import {status} from '@public/data'
import Image from 'next/image'
import { ControlOption, ControlWrapper } from './index.style'

const ControlPanel = () => {
  const [value, setValue] = useState<number>(25);

  const handleChange = (event: Event, value: number | number[]) => {
    setValue(value as number);
  };

  const statusOptions = status.map((icon, index) => (
    <ControlOption key={index}>
      <Image src={icon.img} alt={icon.name} width={20} height={20} style={{ filter: 'brightness(0)' }} />
      <p>{icon.name}</p>
    </ControlOption>
  ))
  
  return (
    <ControlWrapper>
      <Stack spacing={2} direction="row" alignItems="center">
        {value > 50 ? <VolumeUp /> : <VolumeDown />}
        <Slider aria-label="Volume" defaultValue={25} value={value} onChange={handleChange} sx={{
          color: '#ea4f06',
          "& .MuiSlider-thumb": {
            backgroundColor: "#fff",
            border: "1px solid #aeaeae",
            "&:hover, &.Mui-focusVisible": {
              boxShadow: 'none'
            },
          },
          "& .MuiSlider-rail": {
            color: "#aeaeae"
          }
        }} />
      </Stack>

      {statusOptions}
    </ControlWrapper>
  )
}

export default ControlPanel