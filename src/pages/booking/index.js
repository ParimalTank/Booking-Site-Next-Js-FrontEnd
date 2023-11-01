import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React, { useState } from 'react';
import { Box, Button, createTheme, Grid, Paper, Tab, Tabs, ThemeProvider, Typography } from '@mui/material';
import moment from 'moment';
import dayjs from 'dayjs';
import styled from 'styled-components';
import toast from 'react-hot-toast';

const Item = styled(Paper)(({ theme }) => ({
    ...theme?.typography?.body2,
    textAlign: 'center',
    color: theme.palette?.text?.secondary,
    // height: 60,
    lineHeight: '60px',
}));

const TimeSlotAM = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const TimeSlotPM = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

export default function Booking() {

    const [value, setValue] = useState(dayjs(new Date()));
    const [tab, setTab] = React.useState(0);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState([]);
    console.log("selectedTimeSlot: ", selectedTimeSlot);

    // console.log("value: ", value);

    // const date = moment(value).format("DD/MM/YYYY");
    // console.log("date: ", date);
    const epoch = moment(value, "DD/MM/YYYY").unix();
    console.log("This is epoch", epoch);

    function handleChange(event, newValue) {
        setTab(newValue);
    }

    function a11yProps(index) {
        return {
            id: `scrollable-auto-tab-${index}`,
            "aria-controls": `scrollable-auto-tabpanel-${index}`
        };
    }


    const lightTheme = createTheme({ palette: { mode: 'light' } });

    const toggleTimeSlot = (index) => {

        if (isTimeSlotSelected(index)) {
            // If the time slot is already selected, remove it from the selection
            setSelectedTimeSlot(selectedTimeSlot.filter((selected) => selected !== index));
        } else {
            // If the time slot is not selected, add it to the selection
            setSelectedTimeSlot([...selectedTimeSlot, index]);
        }
    };

    const isTimeSlotSelected = (index) => {
        return selectedTimeSlot.includes(index);
    };

    const getSlots = () => {
        selectedTimeSlot.map((res) => {

        })
    }

    const handleSubmit = () => {
        console.log("handle submit called");

        if (selectedTimeSlot.length === 0) {
            toast.error("Select minimum 1 Slot")
        } else {
            console.log("This is Selected Date", date);
            console.log("selectedTimeSlot", selectedTimeSlot);


            getSlots()

            // Find Out start and End time base on indexes

            // const bookingDetails = {
            //     dateOfBook: date,
            //     // startTime :
            // }

        }
    }

    return (
        <Box>
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

            <Box sx={{ mt: "50px" }}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Tabs value={tab} onChange={handleChange} aria-label="customized tabs"  >
                        <Tab label="AM" />
                        <Tab label="PM" />
                    </Tabs>
                </Box>
                <div>
                    {tab === 0 &&

                        <Box>


                            <Grid container spacing={2} sx={{ display: 'flex', justifyContent: "center", mt: "100px" }}>
                                {[lightTheme].map((theme, index) => (
                                    <Grid item xs={6} key={index}>
                                        <ThemeProvider theme={theme}>
                                            {/* <Typography sx={{ textAlign: 'center', fontSize: "18px", fontWeight: "600" }}>Night Slots</Typography> */}
                                            <Box
                                                sx={{
                                                    p: 2,
                                                    borderRadius: 2,
                                                    display: 'grid',
                                                    gridTemplateColumns: { md: '1fr 1fr 1fr 1fr' },
                                                    gap: 2,
                                                }}
                                            >
                                                {TimeSlotAM.map((elevation, index) => {
                                                    return (
                                                        <Box component={Button} sx={{ width: "100%" }} key={index} >
                                                            <Item key={index} elevation={6} sx={{ px: "10px", py: "20px", textAlign: "center", width: "100%", backgroundColor: isTimeSlotSelected(index) ? 'green' : 'background.default' }} onClick={() => toggleTimeSlot(index)}>
                                                                <Typography>{elevation} AM  To {elevation + 1 === 13 ? elevation - 12 + 1 : elevation + 1} AM </Typography>
                                                            </Item>
                                                        </Box>
                                                    )
                                                })}
                                            </Box>

                                            <Box sx={{ display: "flex", justifyContent: "center", mt: "10px" }}>
                                                <Button variant='contained' sx={{ px: "20px", py: "10px" }} onClick={handleSubmit} >Submit</Button>
                                            </Box>
                                        </ThemeProvider>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    }
                    {tab === 1 &&
                        <Grid container spacing={2} sx={{ display: 'flex', justifyContent: "center", mt: "100px" }}>
                            {[lightTheme].map((theme, index) => (
                                <Grid item xs={6} key={index}>
                                    <ThemeProvider theme={theme}>
                                        {/* <Typography sx={{ textAlign: 'center', fontSize: "18px", fontWeight: "600" }}>Morning Slots</Typography> */}
                                        <Box
                                            sx={{
                                                p: 2,
                                                borderRadius: 2,
                                                display: 'grid',
                                                gridTemplateColumns: { md: '1fr 1fr 1fr 1fr' },
                                                gap: 2,
                                            }}
                                        >
                                            {TimeSlotPM.map((elevation, index) => {
                                                return (
                                                    <Box component={Button} sx={{ width: "100%" }} key={index} >
                                                        <Item key={index} elevation={6} sx={{ px: "10px", py: "20px", textAlign: "center", width: "100%", backgroundColor: isTimeSlotSelected(index) ? 'green' : 'background.default' }} onClick={() => toggleTimeSlot(index)}>
                                                            <Typography>{elevation} PM  To {elevation + 1 === 13 ? elevation - 12 + 1 : elevation + 1} PM </Typography>
                                                        </Item>
                                                    </Box>
                                                )
                                            })}
                                        </Box>

                                        <Box sx={{ display: "flex", justifyContent: "center", mt: "10px" }}>
                                            <Button variant='contained' sx={{ px: "20px", py: "10px" }} onClick={handleSubmit} >Submit</Button>
                                        </Box>
                                    </ThemeProvider>
                                </Grid>
                            ))}
                        </Grid>
                    }
                </div>
            </Box>
        </Box >
    );
}
