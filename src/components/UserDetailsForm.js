import React from "react";
import {
  AppBar,
  Box,
  Button,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { ArrowRightSharp } from "@mui/icons-material";

function UserDetailsForm({ values, handleChange, nextStep }) {
  const continueForm = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <Stack alignItems="center">
      <Box sx={{ width: "50%" }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography
              align="center"
              variant="h6"
              color="inherit"
              component="div"
              width="100%"
            >
              Enter User Details
            </Typography>
          </Toolbar>
        </AppBar>

        <TextField
          sx={{ width: "100%", margin: "10px 0" }}
          id="firstName"
          label="Firstname"
          onChange={handleChange("firstName")}
          value={values.firstName}
        />

        <TextField
          sx={{ width: "100%", marginBottom: "10px" }}
          id="lastname"
          label="Lastname"
          onChange={handleChange("lastName")}
          value={values.lastName}
        />

        <TextField
          sx={{ width: "100%", marginBottom: "10px" }}
          id="email"
          label="Email"
          onChange={handleChange("email")}
          value={values.email}
        />

        <Box textAlign="left">
          <Button
            onClick={continueForm}
            sx={{ width: "50%", align: "center" }}
            variant="contained"
          >
            Continue
            <ArrowRightSharp />
          </Button>
        </Box>
      </Box>
    </Stack>
  );
}

export default UserDetailsForm;
