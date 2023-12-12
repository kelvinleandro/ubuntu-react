import React from 'react'
import { Notifications } from '@mui/icons-material'
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';

const UbuntuSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#ea4f06',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#ea4f06',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: '#fff'
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: '#aeaeae',
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#aeaeae',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const NotificationCenter = () => {
  return (
    <div className='w-[50%] rounded-xl absolute z-20 top-0 left-1/2 transform -translate-x-1/2 bg-white grid grid-cols-2 grid-rows-1'>
      <div className='flex flex-col'>
        <div className='flex flex-col items-center'>
          <Notifications />
          <p className='font-bold text-2xl text-[#aeaeae]'>No Notifications</p>
        </div>
        <div className='flex gap-3 items-center'>
          <p>Do Not Disturb</p>
          <UbuntuSwitch />
        </div>
      </div>
    </div>
  )
}

export default NotificationCenter