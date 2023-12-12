'use client'
import React from 'react'
import { Notifications } from '@mui/icons-material'
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

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

const getFormattedDate = () => {
  const currentDate = new Date();
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const month = months[currentDate.getMonth()];
  const dayOfMonth = currentDate.getDate();
  const year = currentDate.getFullYear();

  return {
    dayOfWeek,
    formattedDate: `${month} ${dayOfMonth} ${year}`,
  };
};

const NotificationCenter = () => {

  const { dayOfWeek, formattedDate } = getFormattedDate();
  
  return (
    <div className='w-[50%] rounded-xl absolute z-20 top-0 left-1/2 transform -translate-x-1/2 bg-white grid grid-cols-2 grid-rows-1'>
      <div className='flex flex-col justify-end py-3 px-2'>
        <div className='flex flex-col items-center justify-center'>
          <Notifications sx={{height:60, width:'auto', color:'#aeaeae'}} />
          <p className='font-bold text-2xl text-[#aeaeae]'>No Notifications</p>
        </div>
        <div className='flex gap-3 items-center mt-28'>
          <p>Do Not Disturb</p>
          <UbuntuSwitch />
        </div>
      </div>

      <div className='flex flex-col items-start justify-center py-3 px-2'>
        <p className='font-bold text-lg text-[#9d9f8c]'>{dayOfWeek}</p>
        <p className='font-bold text-xl text-[#9d9f8c]'>{formattedDate}</p>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar views={['day']} />
        </LocalizationProvider>
        <div className='bg-[#ededed] w-full flex flex-col flex-start p-1 rounded-md'>
          <p className='text-[#9d9f8c]'>Tomorrow</p>
          <p>No Events</p>
        </div>
      </div>
    </div>
  )
}

export default NotificationCenter