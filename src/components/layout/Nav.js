import React from 'react';
import './layout.css';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Icon from '@material-ui/core/Icon';

export default function SideNav() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
            className='sideNav'
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <span className='sidenav-arrowBack'>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer('left', true)}>
                    <Icon>arrow_back</Icon>
                </IconButton>
            </span>
            <div className='sidenavInner'>
                <List component="nav" aria-label="main mailbox folders" className='listItems'>
                    <ListItem button>
                        <ListItemIcon>
                            <Icon>dashboard</Icon>
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <Icon>contacts</Icon>
                        </ListItemIcon>
                        <ListItemText primary="Contacts" />
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <Icon>money</Icon>
                        </ListItemIcon>
                        <ListItemText primary="Action Item" />
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <Icon>filter_none</Icon>
                        </ListItemIcon>
                        <ListItemText primary="Reports" />
                    </ListItem>
                </List>
            </div>
            <div className='footerText'>
                <span>2019 @ Alinea v 1.0.0</span>
                <p>Cazenovia Creek Investment Management, LLC</p>
            </div>
        </div>
    );

    return (
        <div>
            <span className='notifyIcon'>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer('left', true)}>
                    <MenuIcon />
                </IconButton>
            </span>
            <SwipeableDrawer
                open={state.left}
                onClose={toggleDrawer('left', false)}
                onOpen={toggleDrawer('left', true)}
            >
                {sideList('left')}
            </SwipeableDrawer>
        </div>
    );
}