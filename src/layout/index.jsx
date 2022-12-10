import React, { useState } from 'react';
import { Box, useTheme } from '@mui/material';
import SideBar from './SideBar';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
    const [sideBarWidth, setSideBarWidth] = useState(false);
    const theme = useTheme();

    return (
        <Box display="flex">
            <Box width={`${sideBarWidth ? 70 : 90}%`}>
                <Box
                    component="header"
                    height="5rem"
                    sx={{
                        background: theme.palette.grey[300],
                    }}>
                    header
                </Box>
                {children}
            </Box>
            <SideBar
                sideBarWidth={sideBarWidth}
                setSideBarWidth={setSideBarWidth}
            />
        </Box>
    );
}

export default Layout;
