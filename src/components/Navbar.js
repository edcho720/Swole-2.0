import React from 'react';
import { Box, AppBar, Toolbar, Tooltip, Typography, button, IconButton } from '@mui/material';
// import { useTheme } from '@mui/styles';
import { Link, useNavigate } from 'react-router-dom'

import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';
import FitnessCenterTwoToneIcon from '@mui/icons-material/FitnessCenterTwoTone';
import DatasetTwoToneIcon from '@mui/icons-material/DatasetTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';

function Navbar({darkModeOn, toggleDarkMode, user}) {

    // const theme = useTheme();
    const bgColors = darkModeOn ? '#161414 !important' : 'rgb(116, 153, 190) !important';
    const hoverColors = darkModeOn ? '#22A39F !important' : '#22A39F !important';

    return (

     
            <Box sx={{ flexGrow: 1}}>
            <AppBar position ='fixed' sx={{ height: 150, backgroundColor: bgColors }}>

                <Toolbar id='app-bar' sx={{ height: 150 }}>

               
                

                    <div className='navbar-logo'>
                        <Typography 
                            id='logo-nav' 
                            component='div' 
                            sx={{ flexGrow: 1, marginLeft: 3 }}
                            color={darkModeOn ? 'rgb(83, 83, 100) !important' : 'floralwhite !important'}
                        >
                        Swole
                        </Typography>
                    </div>


                    <div className='icons-div'>
                            <Tooltip title={darkModeOn ? 'Light Mode' : 'Dark Mode'} arrow placement='bottom'>
                                <IconButton 
                                    onClick={toggleDarkMode}
                                    color={darkModeOn ? 'inherit' :''} 
                                    size='large' sx={{ '&:hover': { backgroundColor: hoverColors } }}
                                
                                >
                                    {darkModeOn ? <LightModeIcon></LightModeIcon> : <ModeNightIcon></ModeNightIcon>}
                                </IconButton>
                            </Tooltip>
                        
                        

                        <Link to="/main">
                            <Tooltip title={darkModeOn ? 'Light Mode' : 'Dark Mode'} arrow placement='bottom'>
                                <IconButton 
                                    color={darkModeOn ? 'inherit' :'white !important'} 
                                    size='large' 
                                    sx={{ '&:hover': { backgroundColor: hoverColors } }}>
                                    <FitnessCenterTwoToneIcon></FitnessCenterTwoToneIcon>
                                </IconButton>
                            </Tooltip>
                        </Link>

                        <Link to="/history">
                            <Tooltip title={darkModeOn ? 'Light Mode' : 'Dark Mode'} arrow placement='bottom'>
                                <IconButton 
                                    color={darkModeOn ? 'inherit' :'white !important'} 
                                    size='large' 
                                    sx={{ '&:hover': { backgroundColor: hoverColors } }}>
                                    <DatasetTwoToneIcon></DatasetTwoToneIcon>
                                </IconButton>
                            </Tooltip>
                        </Link>

                        <Link to={`${user ? '/' : ''}`}>
						{/* may remove path later if ok */}
                            <Tooltip title='Logout' arrow placement='bottom'>
                                <IconButton
                                    onClick={() => setUser(null)}
                                    color={darkModeOn ? 'inherit' :'white !important'} 
                                    size='large' 
                                    sx={{ '&:hover': { backgroundColor: hoverColors } }}
                                >
                                    <LogoutTwoToneIcon></LogoutTwoToneIcon>
                                </IconButton>
                            </Tooltip>
					    </Link>

                    </div>

         

                </Toolbar>
            </AppBar>
            </Box>


    
    )
};

export default Navbar;


