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
import MenuItem from "@mui/material/MenuItem";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  //array for profession dropdown
  const professions = [
    { id: 1, title: "Lawyer" },
    { id: 2, title: "Engineer" },
    { id: 3, title: "Doctor" },
    { id: 4, title: "Education" },
    { id: 5, title: "Business" },
    { id: 6, title: "Home Maker" },
    { id: 7, title: "Other" },
  ];

  const navigate = useNavigate();

  const [profession, setProfession] = useState("");
  const [enteredName, setName] = useState("");
  const [enteredEmail, setEmail] = useState("");
  const [enteredPass, setPass] = useState("");
  const [enteredPhone, setPhone] = useState("");

  //managing profession
  const handleProfession = (event) => {
    setProfession(event.target.value);
  };

  //managing submission og sign up form
  const handleSubmit = async (event) => {
    event.preventDefault();

    //validating phone number
    if (matchIsValidTel(enteredPhone) === false) {
      toast("Enter a valid phone number", {
        type: "error",
        theme: "colored",
      });
      return;
    }

    //validating email id
    function validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
    if (validateEmail(enteredEmail) === false) {
      toast("Enter a valid email id", {
        type: "error",
        theme: "colored",
      });
      return;
    }

    //checking for password length
    if (enteredPass.length < 6) {
      toast("Password should of atleast 6 characters", {
        type: "error",
        theme: "colored",
      });
      return;
    }

    try {
      let user;
      let userData = {
        username: enteredName,
        email: enteredEmail,
        password: enteredPass,
        phone: enteredPhone,
        profession,
      };
      let users = JSON.parse(localStorage.getItem("users") || "[]");

      //checking if user already exists; if not creating account
      //and navigating to login page

      if (users.length > 0) {
        let indexOfUser = users.findIndex((i) => i.email === enteredEmail);
        user = users[indexOfUser];
      }
      if (user) {
        toast("Email address already registered.", {
          type: "error",
          theme: "colored",
        });
      } else {
        users.push(userData);
        localStorage.setItem("users", JSON.stringify(users));
        toast("User registered", {
          type: "success",
          theme: "colored",
        });
        setTimeout(() => {
          navigate("/login");
        }, 1000);
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
          <Avatar sx={{ m: 1, bgcolor: "#FFC436" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ mt: 1, height: 150 }}
          >
            <TextField
              margin="dense"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              value={enteredName}
              onChange={(e) => setName(e.target.value)}
              autoFocus
              size="small"
            />
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
            <MuiTelInput
              margin="dense"
              required
              fullWidth
              name="phone"
              label="Phone Number"
              type="phone"
              id="phone"
              size="small"
              value={enteredPhone}
              onChange={(newValue) => setPhone(newValue)}
            />
            <TextField
              required
              size="small"
              margin="dense"
              fullWidth
              variant="outlined"
              value={profession}
              select
              label="Profession"
              onChange={handleProfession}
              sx={{ textAlign: "left" }}
            >
              {professions.map((prof) => (
                <MenuItem value={prof.title} key={prof.id}>
                  {prof.title}
                </MenuItem>
              ))}
            </TextField>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              SignUp
            </Button>

            <Grid container>
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Already have an account? Sign In"}
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
