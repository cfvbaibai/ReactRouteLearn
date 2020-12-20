import { Container, Typography, useTheme } from '@material-ui/core';
import React from 'react';

interface HomeProps {

}

export default function Home(props: HomeProps) {
  const theme = useTheme();
  return (
    <Container style={{ marginTop: theme.spacing(2) }}>
      <Typography variant="h4">Home</Typography>
      <Typography>This is a home page.</Typography>
    </Container>
  );
}
