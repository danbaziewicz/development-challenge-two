import React, { useContext, useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export default function MaterialUIPickers() {
  const [value, setValue] = useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack sx={{ width: '250px', padding: '10px'}}>
        <DesktopDatePicker
          label="Nascimento"
          inputFormat="DD/MM/YYYY"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            console.log(newValue)
          }}
          
          renderInput={(params) => <TextField {...params} />}
          
        />
      </Stack>
    </LocalizationProvider>
  );
}
