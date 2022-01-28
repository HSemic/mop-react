import * as React from 'react';
import { makeStyles } from '@mui/styles';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Logo from '../atoms/Logo';
import Button from '../atoms/Button';
import ButtonGroup from '../molecules/ButtonGroup';

const useStyles = makeStyles({
  appBar: {
    backgroundColor: 'white !important'
  }
});

const config = {
  logoText: 'AskIt',
  buttonSignInText: 'Log In',
  buttonSignUpText: 'Sign Up'
};

const Navbar = (): React.ReactElement => {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <Logo text={config.logoText} />
          <ButtonGroup>
            <>
              <Button text={config.buttonSignInText} color="primary" />
              <Button text={config.buttonSignUpText} color="secondary" />
            </>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
