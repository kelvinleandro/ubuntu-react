"use client"
import React, { useEffect, useState } from 'react'

const Clock = ({notificationState, setNotificationState}) => {
  const [dateTime, setDateTime] = useState("mon 0 00:00");

  function getDateTime(): string {
    const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    const now = new Date();
  
    const month = months[now.getMonth()];
    const dayOfMonth = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
  
    return `${month} ${dayOfMonth} ${hours}:${minutes}`;
  }

  useEffect(() => {
    setInterval(() => {setDateTime(getDateTime())}, 1000);
  }, []);
  
  return (
    <p onClick={() => setNotificationState(!notificationState)}>{dateTime}</p>
  )
}

export default Clock