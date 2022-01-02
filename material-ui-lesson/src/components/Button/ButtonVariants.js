import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function ButtonVariants() {
  // The Button comes with three variants:
  // text (default), contained, and outlined.
  return (
    <Stack spacing={2} direction='row'>
      <Button variant='text'>Text</Button>
      <Button variant='contained'>Contained</Button>
      <Button variant='outlined'>Outlined</Button>
    </Stack>
  );
}

export default ButtonVariants;
