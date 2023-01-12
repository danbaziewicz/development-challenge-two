import React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export default function MaterialUIPickers(props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack sx={{ width: '250px', padding: '10px'}}>
        <DesktopDatePicker
          label="Nascimento"
          inputFormat="DD/MM/YYYY"
          value={props.value}
          disableFuture={true}
          onChange={props.onChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}