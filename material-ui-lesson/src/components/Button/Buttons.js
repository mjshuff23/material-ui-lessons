import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonVariants from './ButtonVariants';
import TextButtons from './TextButtons';
import ContainedButtons from './ContainedButton';
import OutlinedButtons from './OutlinedButtons';
import ColoredButtons from './ColoredButtons';

function Buttons() {
  return (
    <Stack>
      <h2>Button Variants</h2>
      <p>
        The Button comes with three variants: text (default), contained, and
        outlined.
      </p>
      <ButtonVariants />
      <h2>Text Buttons</h2>
      <p>
        Text buttons are typically used for less-pronounced actions, including
        those located: in dialogs, in cards. In cards, text buttons help
        maintain an emphasis on card content.
      </p>
      <TextButtons />
      <h2>Contained Buttons</h2>
      <p>
        Contained buttons are high-emphasis, distinguished by their use of
        elevation and fill. They contain actions that are primary to your app.
      </p>
      <ContainedButtons />
      <h2>Outlined Buttons</h2>
      <p>
        Outlined buttons are medium-emphasis buttons. They contain actions that
        are important but aren't the primary action in an app. Outlined buttons
        are import ColorButtons from './ColoredButtons'; also a lower emphasis
        alternative to contained buttons, or a higher emphasis alternative to
        text buttons.
      </p>
      <OutlinedButtons />
      <h2>Colored Buttons</h2>
      <ColoredButtons />
    </Stack>
  );
}

export default Buttons;
