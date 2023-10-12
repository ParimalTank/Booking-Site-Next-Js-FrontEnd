import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React from 'react';
import { Box } from '@mui/material';
import moment from 'moment';

export default function Booking() {

    const [value, setValue] = React.useState(null);
    var epoch = moment(value, "DD/MM/YYYY").unix();
    console.log("value: ", value);
    console.log("This is epoch", epoch);

    const date = moment(value).format("DD/MM/YYYY");
    console.log("date: ", date);

    return (
        <Box sx={{ display: "flex", justifyContent: "center", mt: "50px" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Select Slot"
                    format="DD/MM/YYYY"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />
                    }
                />
            </LocalizationProvider>
        </Box>
    );
}