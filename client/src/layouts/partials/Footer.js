import { Typography, Container, Link as MuiLink } from '@mui/material';
import { makeStyles } from '@mui/styles'
import { FormattedMessage } from 'react-intl';

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: 'auto',
    borderTop: '1px solid #e0e0e0',
    backgroundColor: '#FFF',
    padding: '16px',
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth='sm'>
        <Typography variant='body2' color='textSecondary' align='center'>
          <FormattedMessage id='copyright' />
          {' '}
          <MuiLink color='inherit' href='/'>
            <FormattedMessage id='app.name' />
          </MuiLink>
        </Typography>
      </Container>
    </footer>
  );
}