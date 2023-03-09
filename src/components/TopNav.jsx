import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

//originally in the Navbar component
import { Link } from "react-router-dom";
import { useContext } from "react";           
import { SessionContext } from "../contexts/SessionContext";
import ButtonLogout from "./ButtonLogout";

const drawerWidth = '100vw';

const navItems = [
    { text: 'Home', href: '/' },
    { text: 'Creative Profiles', href: '/projects' },
    { text: 'Proofing Room', href: '/ext' },
    { text: 'Signup', href: '/signup' },
    { text: 'Login', href: '/login' }
];

const navItems2 = [
  { text: 'Home', href: '/' },
  { text: 'Creative Profiles', href: '/projects' },
  { text: 'Proofing Room', href: '/ext' },
  { text: 'Logout', href: '/' },

];


function TopNav(props) {
  const { isAuthenticate } = useContext(SessionContext);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'}}>
      <Typography variant="h6" sx={{ my: 2 }}>
        CreactiveApp
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} component="a" href={item.href}>
              <ListItemText primary={item.text}  />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const drawer2 = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'}}>
      <Typography variant="h6" sx={{ my: 2 }}>
        CreactiveApp
      </Typography>
      <Divider />
      <List>
        {navItems2.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} component="a" href={item.href}>
              <ListItemText primary={item.text}  />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor:'#222222'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            CreactiveApp
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.text} sx={{ color: '#fff' }} component="a" href={item.href}>
                {item.text}
              </Button>

            ))}
       <ButtonLogout/>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
 
      </Box>
    </Box>

  )
};

export default TopNav;