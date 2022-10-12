import React, { useContext, useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { UserContext } from '../../context/UserProvider';

export default function MaterialUIPickers() {
  const [value, setValue] = useState(null);
  const { dataForm } = useContext(UserContext);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack sx={{ width: '250px', padding: '10px'}}>
        <DesktopDatePicker
          label="Nascimento"
          inputFormat="DD/MM/YYYY"
          value={value}
          disableFuture={true}
          onChange={(newValue) => {
            setValue(newValue);
            dataForm.birth_date = `${newValue.$D}/${newValue.$M+1}/${newValue.$y}`
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}
