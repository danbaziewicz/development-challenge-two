import React, { useContext, useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { UserContext } from '../../context/UserProvider';
import moment from 'moment';

export default function MaterialUIPickers(data) {
  const { dataForm } = useContext(UserContext);
  const datanasc = moment(data.birth_date).utc().format("YYYY/MM/DD")
  const [value, setValue] = useState(datanasc);

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
            dataForm.birth_date = `${newValue.$y}/${newValue.$M+1}/${newValue.$D}`
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}
