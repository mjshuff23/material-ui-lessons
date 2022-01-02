import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function ContainedButtons() {
  // Contained buttons are high-emphasis, distinguished by their use of elevation and fill. They contain actions that are primary to your app.
  return (
    <Stack direction='row' spacing={2}>
      <Button variant='contained'>Contained</Button>
      <Button variant='contained' disabled>
        Disabled
      </Button>
      <Button variant='contained' href='#contained-buttons'>
        Link
      </Button>
    </Stack>
  );
}

export default ContainedButtons;
