import React, { Component } from 'react';
import Nav from './Nav';
import './layout.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
//import Menu from '@material-ui/core/Menu';
//import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import ImgLogo from '../../assets/Group7261.svg';
import NotifyIcon from '../../assets/Group75.svg';

class Header extends Component {
  render() {
    return (
      <div className='headerBar'>
        <AppBar position="fixed">
          <Toolbar variant="dense">
            <Nav></Nav>
            <Typography variant="h6" color="inherit" className='logoBox'>
              <img src={ImgLogo} alt="Alinea" />
              <span className='pro-text'>Processing</span>
            </Typography>
            <span className='notifyIcon'>
              <IconButton aria-label="show 12 new notifications" color="inherit">
                <Badge badgeContent={12} color="secondary">
                  <img src={NotifyIcon} alt="notifications" />
                </Badge>
              </IconButton>
            </span>

            <span className='userBadge'>
              <Button aria-controls="simple-menu" aria-haspopup="true">
                AD
              </Button>
            </span>
            {/* <Menu
                            id="simple-menu"
                            keepMounted
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu> */}

          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;