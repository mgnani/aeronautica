import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";

// eslint-disable-next-line react/prop-types
const NavListDrawer = ({ navLinks }) => {
  return (
    <Box sx={{ width: 250 /* , bgcolor: "lightsalmon" */ }}>
      <nav>
        <List>
          {
            // eslint-disable-next-line react/prop-types
            navLinks.map((item) => (
              <ListItem key={item.title}>
                <ListItemButton component="a" href={item.path}>
                <ListItemIcon style={{margin:"0px", minWidth:"30px"}}>{item.icon}</ListItemIcon>
                  <ListItemText>{item.title}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </nav>
    </Box>
  );
};

export default NavListDrawer;
