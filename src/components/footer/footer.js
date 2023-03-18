import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Container maxWidth="lg">
            <Typography
              variant="body1"
              component="div"
              sx={{ flexGrow: 1, pt: 3 }}>
              @ 2023 Copyright Bit
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
