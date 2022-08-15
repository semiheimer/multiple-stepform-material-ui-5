import {
  AppBar,
  Box,
  Button,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import { ArrowLeftSharp, ArrowRightSharp } from '@mui/icons-material';

function PersonalDetails({ prevStep, nextStep, values, handleChange }) {
  const continueForm = (e) => {
    e.preventDefault();
    nextStep();
  };
  const backForm = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <Stack alignItems='center' sx={{ marginTop: '100px' }}>
      <Box sx={{ width: '50%' }}>
        <AppBar position='static'>
          <Toolbar variant='dense'>
            <Typography
              align='center'
              variant='h6'
              color='inherit'
              component='div'
              width='100%'
            >
              Enter User Details
            </Typography>
          </Toolbar>
        </AppBar>

        <TextField
          sx={{ width: '100%', margin: '10px 0' }}
          id='occupation'
          label='Occupation'
          onChange={handleChange('occupation')}
          value={values.occupation}
        />

        <TextField
          sx={{ width: '100%', marginBottom: '10px' }}
          id='city'
          label='City'
          onChange={handleChange('city')}
          value={values.city}
        />

        <TextField
          sx={{ width: '100%', marginBottom: '10px' }}
          id='bio'
          label='Bio'
          onChange={handleChange('bio')}
          value={values.bio}
        />

        <Stack textAlign='center' direction='row' gap={2}>
          <Button
            onClick={backForm}
            sx={{ width: '50%', align: 'center' }}
            variant='contained'
          >
            <ArrowLeftSharp /> Back
          </Button>
          <Button
            onClick={continueForm}
            sx={{ width: '50%', align: 'center' }}
            variant='contained'
          >
            Next
            <ArrowRightSharp />
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
}

export default PersonalDetails;
