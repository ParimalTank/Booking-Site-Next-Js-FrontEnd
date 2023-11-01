import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import React from 'react'

const All = () => {

    const router = useRouter()

    const handleBooking = () => {
        router.push("/all/1");
    }

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="https://img.freepik.com/free-photo/elegant-skin-care-banner-design_23-2149480187.jpg?w=1060&t=st=1698828506~exp=1698829106~hmac=9a7455e73973a04023467dd6b2371486bbee161e8c38f01e393c424c471e5b96"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Organization
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small" onClick={handleBooking}>book</Button>
                </CardActions>
            </Card>
        </Box>
    )
}

export default All;