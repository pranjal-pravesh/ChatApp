import { Stack } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';

const PasswordSection = () => {
  const theme = useSelector(state=>state.theme);
  return (
    <Stack sx={{flex:'1', background:theme==='dark'?'#232323':'white', transition:'background-color 200ms',}}>
      PasswordSection
    </Stack>
      
  )
}

export default PasswordSection