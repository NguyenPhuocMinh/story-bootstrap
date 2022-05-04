import classnames from 'classnames';
// core
import { useTranslate } from 'sb-core';
// material ui
import History from '@mui/icons-material/History';
import HotTub from '@mui/icons-material/HotTub';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import TitleHelper from './TitleBootStrap';
import { defaultTheme, sanitizeRestProps } from '../utils';
import { NotFoundProps } from '../types';

const useStyles = makeStyles(
  theme => ({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      [theme.breakpoints.up('md')]: {
        height: '100%'
      },
      [theme.breakpoints.down('sm')]: {
        height: '100vh',
        marginTop: '-3em'
      }
    },
    icon: {
      width: '9em !important',
      height: '9em !important'
    },
    message: {
      textAlign: 'center',
      fontFamily: 'Roboto, sans-serif',
      opacity: 0.5,
      margin: '0 1em'
    },
    toolbar: {
      textAlign: 'center',
      marginTop: '2em'
    }
  }),
  {
    name: 'SbNotFound',
    defaultTheme
  }
);

const NotFoundBootStrap = (props: NotFoundProps) => {
  const { className, title, navigate, ...rest } = props;

  // hooks
  const classes = useStyles(props);
  const { translate } = useTranslate();

  return (
    <div
      className={classnames(classes.container, className)}
      {...sanitizeRestProps(rest)}
    >
      <TitleHelper defaultTitle={title} />
      <div className={classes.message}>
        <HotTub className={classes.icon} />
        <h1>{translate('page.not_found.name')}</h1>
        <div>{translate('page.not_found.message')}.</div>
      </div>
      <div className={classes.toolbar}>
        <Button
          variant="contained"
          startIcon={<History />}
          onClick={() => navigate('/')}
        >
          {translate('actions.button.back')}
        </Button>
      </div>
    </div>
  );
};

export default NotFoundBootStrap;
