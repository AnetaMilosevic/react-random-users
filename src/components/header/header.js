import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export const Header = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            onClick={props.changeView}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}>
            Reacts users
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
