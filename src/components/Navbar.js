import React from 'react';
import { Link } from 'react-router-dom'
// import { useTheme } from '@mui/styles';
import { Box, AppBar, Toolbar, Tooltip, IconButton } from '@mui/material';

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

        <Box sx={{ flexGrow: 1 }}>

            <AppBar position ='static' sx={{ height: 150, backgroundColor: bgColors }}>

                <Toolbar sx={{ height: 150, display: 'flex', justifyContent: 'space-between' }}>

                    <div className={darkModeOn ? 'logo-nav' : 'logo-nav2'} >
                    Swole
                    </div>

                    {/* once user logs in, user data is available for use */}

                    {user && <h6>Welcome {user.name} to Swole</h6>}

                    {/* nav links / icons on far right of header */}

                    <div id='icon-div'>

                        <Tooltip title={darkModeOn ? 'Light Mode' : 'Dark Mode'} arrow placement='bottom'>
                            <IconButton 
                                onClick={toggleDarkMode}
                                color={darkModeOn ? 'inherit' :''} 
                                size='large' sx={{ '&:hover': { backgroundColor: hoverColors } }}
                            >
                                {darkModeOn ? <LightModeIcon></LightModeIcon> : <ModeNightIcon></ModeNightIcon>}
                            </IconButton>
                        </Tooltip>

                    {/* the following icon/nav links are only shown when a user is logged in */}
                         
                    {user && 
                        
                            <Link to="/main">
                        <Tooltip title='Main' arrow placement='bottom'>
                            <IconButton 
                                color={darkModeOn ? 'inherit' :'white !important'} 
                                size='large' 
                                sx={{ '&:hover': { backgroundColor: hoverColors } }}>
                                <FitnessCenterTwoToneIcon></FitnessCenterTwoToneIcon>
                            </IconButton>
                        </Tooltip>
                        </Link>
                        
                    }
                     
                    {user && 

                        <Link to="/history">
                        <Tooltip title='Workout History' arrow placement='bottom'>
                            <IconButton 
                                color={darkModeOn ? 'inherit' :'white !important'} 
                                size='large' 
                                sx={{ '&:hover': { backgroundColor: hoverColors } }}>
                                <DatasetTwoToneIcon></DatasetTwoToneIcon>
                            </IconButton>
                        </Tooltip>
                        </Link>

                     }

                    {user &&
                      
                        <Link to={`${user ? '/' : ''}`}>
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

                    }

                    </div>

                </Toolbar>

            </AppBar>

        </Box>

    )
};

export default Navbar;


