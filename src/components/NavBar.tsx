import 
{ 
  AppBar, 
  Box, 
  Button, 
  CssBaseline, 
  Divider, 
  Drawer, 
  IconButton, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText, 
  Toolbar, 
  Typography 
} from "@mui/material";
import { useState } from "react";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['CV','Réalisations profesionnelles', 'Stages', 'Veilles technologique'];

export default function NavBar(props: Props) {
  const { window } = props;
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2}}>
        Portfolio
      </Typography>
      <Divider/>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center'}}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline/>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open frawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none'}}}
          >
            
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block'} }}

          >
            Portfolio
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block'} }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff'}}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={open}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none'},
            '& .MuiDrawerPaper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>        
      </Box>
      <Box component="main" sx={{p: 3}}>
        <Toolbar />
        <Typography variant="h1">Mon CV</Typography>
      </Box>
    </Box>
  )
}