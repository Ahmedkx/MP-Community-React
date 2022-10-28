import React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import LogoutIcon from '@mui/icons-material/Logout';
import { Stack } from '@mui/system';
import { UserAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import PeopleIcon from '@mui/icons-material/People';
import Badge from '@mui/material/Badge';
import ListItemWrapper from './ListItemWrapper';
import MailIcon from '@mui/icons-material/Mail';
import useGetDocs from '../../Hooks/useGetDocs';
import useGetCount from '../../Hooks/useGetCount';

const drawerWidth = 240;

export default function Sidebar(props) {
  // const [openTickets] = useGetDocs("Tickets","status","==","open")
  const [count] = useGetCount("Tickets", "open")
  const navigate = useNavigate()
  const { logout } = UserAuth()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  function handleLogout(){
    logout()
    navigate("/")
}

  const drawer = (
    <div>
      <Toolbar>
        <img src={require("../../media/dashboard.png")} alt="dashboard" width={"100%"} onClick={()=>navigate("/")} style={{cursor: "pointer"}}/>
      </Toolbar>
      <Divider />
      <Stack 
          justifyContent="space-between"
          height="calc( 100vh - 100px )"
      >
          <div>
            <ListItemWrapper text={"Staff List"} icon={<PeopleIcon />} onClick={()=>navigate("/staff-list")}/>
            {/* <ListItemWrapper text={"Tickets"} icon={<Badge badgeContent={openTickets.length} color="error"><MailIcon /></Badge>} onClick={()=>navigate("/tickets")}/> */}
            <ListItemWrapper text={"Tickets"} icon={<Badge badgeContent={count} color="error"><MailIcon /></Badge>} onClick={()=>navigate("/tickets")}/>

          </div>
          <div>
            <ListItemWrapper text="Logout" icon={<LogoutIcon />} onClick={handleLogout}/>
          </div>
      </Stack>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, marginLeft: "5px", top:"5px",position: "fixed"}}
          >
            <MenuIcon />
          </IconButton>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor:"#172B4D", color:"white"},
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor:"#172B4D", color:"white"},
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}