import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Box, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import moment from 'moment';

const SingleItem = () => {

    const date = moment(new Date())
    const [startDate, setStartDate] = useState(date['_d'])

    const [value, setValue] = useState(dayjs(new Date()));
    const [startValue, setStartValue] = useState(dayjs(new Date()));
    const [endValue, setEndValue] = useState(dayjs(new Date()));

    let st = new Date(moment(startDate).format('MM/DD/YYYY')).getTime() / 1000

    useEffect(() => {
        st = new Date(moment(startDate).format('MM/DD/YYYY')).getTime() / 1000;
    }, [])

    console.log("st: ", st);

    const handleDateChange = (newValue) => {
        console.log("handleDateChange newValue: ", newValue);
        // Update the 'value' state when the date picker changes
        setValue(dayjs(newValue));
    };

    const handleStartTimeChange = (newValue) => {
        console.log("handleStartTimeChange newValue: ", newValue);
        // Update the 'startValue' state when the start time picker changes
        setStartValue(dayjs(newValue));
    };

    const handleEndTimeChange = (newValue) => {
        console.log("handleEndTimeChange newValue: ", newValue);
        // Update the 'endValue' state when the end time picker changes
        setEndValue(dayjs(newValue));
    };

    const formattedDate = moment(value).format("DD/MM/YYYY");
    console.log("formattedDate: ", formattedDate);

    const formattedStartTime = moment(startValue).format("HH:mm:ss");
    console.log("formattedStartTime: ", formattedStartTime);

    const formattedEndTime = moment(endValue).format("HH:mm:ss");
    console.log("formattedEndTime: ", formattedEndTime);

    return (
        <Box sx={{ display: 'grid', justifyContent: 'center', alignItems: 'center', mt: '50px' }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Box>
                    <DatePicker
                        label="Select Slot"
                        format="DD/MM/YYYY"
                        value={value}
                        onChange={(val) => { setStartDate(val) }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Box>
                <Box sx={{ marginTop: '50px' }}>
                    <TimePicker
                        label="Start Time"
                        value={startValue}
                        onChange={handleStartTimeChange}
                        sx={{ marginRight: '20px' }}
                    />
                    <TimePicker
                        label="End Time"
                        value={endValue}
                        onChange={handleEndTimeChange}
                    />
                </Box>
                <div>
                    <p>Date: {formattedDate}</p>
                    <p>Start Time: {formattedStartTime}</p>
                    <p>End Time: {formattedEndTime}</p>
                </div>
            </LocalizationProvider>
        </Box>
    );
};

export default SingleItem;



















// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';
// import { Box } from '@mui/material';
// import React, { useState } from 'react'
// import dayjs from 'dayjs';
// import moment from 'moment';

// const SingleItem = () => {

//     const [value, setValue] = useState(dayjs(new Date()));
//     const [startValue, setStartValue] = useState(dayjs(new Date()));
//     const [endValue, setEndValue] = useState(dayjs(new Date()));

//     const date = moment(value).format("DD/MM/YYYY");
//     console.log("date: ", date);
//     console.log("startValue: ", startValue);
//     const currentTimeIn = moment().format('HH:mm:ss');
//     console.log("start Time", currentTimeIn);

//     return (
//         <Box sx={{ display: "grid", justifyContent: "center", alignItems: "center", mt: "50px" }}>
//             <LocalizationProvider dateAdapter={AdapterDayjs}>

//                 <Box>
//                     <DatePicker
//                         label="Select Slot"
//                         format="DD/MM/YYYY"
//                         value={value}
//                         onChange={(newValue) => {
//                             console.log("newValue: ", newValue);
//                             setValue(newValue);
//                         }}
//                         renderInput={(params) => <TextField {...params} />
//                         }
//                     />
//                 </Box>

//                 <Box sx={{ marginTop: "50px" }}>

//                     <TimePicker
//                         label="Controlled picker"
//                         value={startValue}
//                         onChange={(newValue) => setStartValue(newValue)}
//                         sx={{ marginRight: "20px" }}
//                     />

//                     <TimePicker
//                         label="Controlled picker"
//                         value={endValue}
//                         onChange={(newValue) => setEndValue(newValue)}
//                     />

//                 </Box>

//             </LocalizationProvider>

//         </Box>
//     )
// }

// export default SingleItem;