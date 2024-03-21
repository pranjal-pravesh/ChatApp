import * as React from 'react';
import {styled } from '@mui/material/styles';



import TextField from '@mui/material/TextField';


const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#A0AAB4',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E0E3E7',
    },
    '&:hover fieldset': {
      borderColor: '#B2BAC2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#B2BAC2',
      borderWidth: '1px',
    },
  },
  '& label': {
    fontSize: '14px',
  },
  '& input': {
    fontSize: '15px',
    '&:-webkit-autofill': {
      WebkitBoxShadow: '0 0 0 1000px white inset !important',
    },

  },
});



export default function Input(props) {
  return (
      <CssTextField fullWidth 
                    label={props.label} 
                    size='small'
                    type={props.type} 
                    value={props.value}
                    onChange={e=> props.setValue(e.target.value)}/>
  );
}