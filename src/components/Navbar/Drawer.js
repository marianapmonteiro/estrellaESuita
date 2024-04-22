import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CloseIcon from '@mui/icons-material/Close';
import theme from '../../Theme';

const DrawerMobile =({open, setOpen})  =>{
const anchor = "right"

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"

    >
      <div style={{width:"100%", display:"flex", justifyContent:"flex-end", padding:"1em"}}>
        <CloseIcon style={{cursor:"pointer"}} onClick={()=>{setOpen(!open)}}/>
      </div>
      <List>
          <ListItem  disablePadding>
            <ListItemButton onClick={()=>{window.location.href = "/advogados"}}>
              <ListItemText primary={"Nossos advogados"} />
            </ListItemButton>
          </ListItem>
          <Divider sx={{backgroundColor: theme.palette.primary.main}}/>
            <ListItem  disablePadding >
            <ListItemButton onClick={()=>{window.location.href = "/servicos"}}>
              <ListItemText primary={"Serviços"} />
            </ListItemButton>
          </ListItem>
          <Divider  sx={{backgroundColor: theme.palette.primary.main}}/>
            <ListItem  disablePadding>
            <ListItemButton onClick={()=>{window.location.href = "/sobrenos"}}>
              <ListItemText primary={"Sobre nós"} />
            </ListItemButton>
          </ListItem>
          <Divider  sx={{backgroundColor: theme.palette.primary.main}}/>
            <ListItem  disablePadding>
            <ListItemButton onClick={()=>{window.location.href = "/contato"}}>
              <ListItemText primary={"Contato"} />
            </ListItemButton>
          </ListItem>
            <Divider  sx={{backgroundColor: theme.palette.primary.main}}/>
      </List>
      
    </Box>
  );

  return (
    <div>
          <Drawer
             PaperProps={{
             sx: {
                backgroundColor: "rgba(0, 0, 0, 0.80)",
                color: theme.palette.primary.main,
            }
  }}
            anchor={anchor}
            open={open}
              onClose={() => setOpen(!open)}

          >
            {list(anchor)}
          </Drawer>
    </div>
  );
}
export default DrawerMobile;