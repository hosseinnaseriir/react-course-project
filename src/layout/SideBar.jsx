import React from 'react';
import PropTypes from 'prop-types';
import { Box, useTheme } from '@mui/material';
import { Button, TextField } from 'components';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function SideBar({ sideBarWidth, setSideBarWidth }) {
    const theme = useTheme();
    return (
        <Box
            width={`${sideBarWidth ? 30 : 10}%`}
            sx={{
                background: theme.palette.primary.main,
                height: '100vh',
            }}>
            <Box>
                <Button
                    sx={{
                        color: theme.palette.secondary.main,
                    }}
                    onClick={() => {
                        setSideBarWidth((prevState) => !prevState);
                    }}>
                    X
                </Button>
                <Box display="flex" flexDirection="column">
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                </Box>
                <Box className="filterSection">
                    <TextField type="search" />
                </Box>
            </Box>
        </Box>
    );
}

SideBar.prototype = {
    sideBarWidth: PropTypes.bool,
    setSideBarWidth: PropTypes.func,
};

export default SideBar;
