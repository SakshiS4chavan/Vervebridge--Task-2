import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    const navigate = useNavigate();
    
    const navigateToProfile = () => {
        navigate("/my-profile");
    }
    
    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    }
    
    const handleCloseMenu = () => {
        setAnchorEl(null);
    }
    
    const handleLogout = () => {
        console.log("handle logout");
        // Implement logout logic here
    }
    
    return (
        <nav className='px-5 z-50 py-[0.8rem] bg-[#e91e63] lg:px-20 flex justify-between'>
            <div className='flex items-center space-x-4'>
                {/* Add additional elements if needed */}
            </div>
            <div className='flex items-center space-x-2'>
                <IconButton>
                    <SearchIcon sx={{ fontSize: "1.5rem" }} />
                </IconButton>
                {true ? (
                    <>
                        <span
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleOpenMenu}
                            className='font-semibold cursor-pointer'
                        >
                            Code with zoha
                        </span>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleCloseMenu}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={() => navigate("/admin")}>Profile</MenuItem>
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    </>
                ) : (
                    <span onClick={navigateToProfile} className='font-semibold cursor-pointer'>
                        Profile
                    </span>
                )}
                <IconButton onClick={() => navigate("/cart")}>
                    <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
                </IconButton>
                <IconButton onClick={() => navigate("/profile")}>
                    <PersonIcon sx={{ fontSize: "1.5rem" }} />
                </IconButton>
            </div>
            <div className='lg:mr-10 cursor-pointer flex items-center space-x-4' onClick={() => navigate("/")}>
                <li className='logo font-semibold text-gray-300 text-2xl'>Zosh Food</li>
            </div>
        </nav>
    );
}

export default Navbar;
