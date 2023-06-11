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
// import * as path from "path";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRoutes, routes } from "../routes/routes";
// import { routes, getRoutes } from "../routes/routes";

interface Props {
  window?: () => Window;
  title: string;
  // navigateTo: (path: string, ...params: any[]) => void;
}

const drawerWidth = 240;
const navItems = ['CV','Realisations professionnelles', 'Stages', 'Veille technologique'];

export function NavBar(props: Props) {
  const { window, title } = props;
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const routes = getRoutes();

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
      {navItems.map((item) => {
        let path: string;
        if(item === 'CV') {
          path = '/';
        } else {
          path = `/${item.toLowerCase().replace(' ', '-')}`;
        }
        return (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => navigate(path)}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        );
      })}
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
            <MenuIcon/>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ 
              flexGrow: 1, 
              display: { 
                xs: 'none', 
                sm: 'block'
              }
            }}
          >
            Portfolio
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block'} }}>
            {routes.map((route) => (
              <Button key={route.key} sx={{ color: '#fff'}} onClick={() => navigate(route.path)}>
                {route.label}
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
        <Typography 
          variant="h1"
          sx={{ 
            flexGrow: 1, 
            display: { 
              xs: 'none', 
              sm: 'block'}, 
            backgroundColor: '#1976D2', 
            color: '#fff', 
            borderRadius: 2, 
            p: 1,
            position: "fixed",
            top: '20%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            whiteSpace: 'nowrap',
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  )
}

/* Inutile */

{/* {navItems.map((item) => {
              let path: string;
              if (item === 'CV'){
                path = '/';
              } else {
                path = `/${item.toLowerCase().replace(' ', '-')}`;
              }
              return (
                <Button key={item} sx={{ color: '#fff'}} onClick={() => navigate(path)}>
                  {item}
                </Button>
              );
            })} */}