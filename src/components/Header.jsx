import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import CompanyDetails from "./CompanyDetails";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  //logout function
  const handleLogOut = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login", { replace: true });
  };

  const LoggedIn = localStorage.getItem("loggedIn");

  return (
    <>
      <Box sx={{ flexGrow: 1, marginBottom: 8 }}>
        <AppBar
          sx={{
            bgcolor: "#0C356A",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Toolbar>
            <Typography variant="h6" component="div">
              Geeksynergy Technologies Pvt Ltd
            </Typography>
          </Toolbar>
          <Toolbar>
            <Button
              sx={{ marginRight: 5, padding: 1, color: "white" }}
              onClick={handleOpen}
            >
              Company Info
            </Button>
            {LoggedIn && (
              <Button
                sx={{ marginRight: 5, padding: 1, color: "white" }}
                onClick={handleLogOut}
              >
                Log Out
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <CompanyDetails open={open} handleClose={handleClose} />
    </>
  );
}
