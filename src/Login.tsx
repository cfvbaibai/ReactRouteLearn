import { FormGroup, Input, useTheme } from '@material-ui/core';
import React from 'react';

interface LoginProps {

}

export default function Login(props: LoginProps): JSX.Element {
  const theme = useTheme();
  return (
    <FormGroup style={{width: "30vw", margin: theme.spacing(2)}}>
      <Input type="text" placeholder="Input login name" />
      <Input type="password" placeholder="Input password" />
    </FormGroup>
  );
}
