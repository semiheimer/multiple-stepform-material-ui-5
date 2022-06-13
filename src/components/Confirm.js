import {
  AppBar,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { ArrowLeftSharp, ArrowRightSharp } from "@mui/icons-material";

function Confirm({ values, nextStep, prevStep }) {
  const continueForm = (e) => {
    e.preventDefault();

    //Control form inputs or fetch data
    nextStep();
  };
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
              Enter User Details
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem>
            <ListItemText
              primary={"Firstname"}
              secondary={`${values.firstName}`}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={"Lastname"}
              secondary={`${values.lastName}`}
            />
          </ListItem>
          <ListItem>
            <ListItemText primary={"Email"} secondary={`${values.email}`} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={"Occupation"}
              secondary={`${values.occupation}`}
            />
          </ListItem>
          <ListItem>
            <ListItemText primary={"City"} secondary={`${values.city}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={"Bio"} secondary={`${values.bio}`} />
          </ListItem>
        </List>
        <Stack textAlign="center" direction="row" gap={2}>
          <Button
            onClick={backForm}
            sx={{ width: "50%", align: "center" }}
            variant="contained"
          >
            <ArrowLeftSharp /> Back
          </Button>
          <Button
            onClick={continueForm}
            sx={{ width: "50%", align: "center" }}
            variant="contained"
          >
            Next
            <ArrowRightSharp />
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
}

export default Confirm;
