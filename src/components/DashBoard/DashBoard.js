import { Box, Stack } from '@mui/material';
import React from 'react';
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import Feed from '../Feed/Feed';
import RightBar from '../RightBar/RightBar'
import Add from '../Add/Add';

const DashBoard = () => {
    return (
        <Box>
            <NavBar />
            <Stack direction='row'spacing={1} justifyContent='space-between'p={4}>
                <SideBar />
                <Feed />
                <RightBar />
            </Stack>
            <Add />
        </Box>
    )
}

export default DashBoard