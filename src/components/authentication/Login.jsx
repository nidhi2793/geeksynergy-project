import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";

export default function Login() {
  const navigate = useNavigate();

  const [enteredEmail, setEmail] = useState("");
  const [enteredPass, setPass] = useState("");

  //submitting login form
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let users = JSON.parse(localStorage.getItem("users"));
      let user;

      //checking if email id is registered
      if (users.length > 0) {
        let indexOfUser = users.findIndex((i) => i.email === enteredEmail);
        user = users[indexOfUser];
      }
      if (users.length === 0 || !user) {
        toast("Email id is not registered", {
          type: "error",
          theme: "colored",
        });
      } else {
        //matching entered passwors with registered user's password
        let correctPassword = user.password;
        if (enteredPass !== correctPassword) {
          toast("Invalid Credentials", {
            type: "error",
            theme: "colored",
          });
        } else {
          //storing user as logged in
          localStorage.setItem("loggedIn", JSON.stringify(enteredEmail));
          navigate("/home");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 3,
            borderRadius: 10,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#ef79d9" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ mt: 1, height: 150 }}
          >
            <TextField
              type={"email"}
              slotProps={{ input: { type: "email" } }}
              margin="dense"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              size="small"
              value={enteredEmail}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="dense"
              required
              fullWidth
              name="password"
              label="Password (min 6 characters)"
              type="password"
              id="password"
              size="small"
              value={enteredPass}
              onChange={(e) => setPass(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>

            <Grid container>
              <Grid item>
                <Link href="/" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <ToastContainer />
    </>
  );
}
