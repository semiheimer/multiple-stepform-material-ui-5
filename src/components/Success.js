import React from "react";
import { Stack, AppBar, Toolbar, Box, Button, Typography } from "@mui/material";
import { ArrowLeftSharp } from "@mui/icons-material";

function Success({ prevStep }) {
  const backForm = (e) => {
    e.preventDefault();
    prevStep();
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
              Success
            </Typography>
          </Toolbar>
        </AppBar>
        <Typography
          mt={4}
          mb={4}
          align="justify"
          variant="h6"
          color="inherit"
          component="p"
          width="100%"
        >
          Thank you for your submission. You will get an email with further
          instrucions.
        </Typography>

        <Stack textAlign="center" direction="row" gap={2}>
          <Button
            onClick={backForm}
            sx={{ width: "50%", align: "center" }}
            variant="contained"
          >
            <ArrowLeftSharp /> Back
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
}

export default Success;
