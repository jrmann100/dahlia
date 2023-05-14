import { type Theme } from '@mui/material';

// eslint-disable-next-line import/prefer-default-export
const spreads = {
  resetLink: { textDecoration: 'none', color: 'initial' },
  centering: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  full: { width: '100%', height: '100%' },
  bordered: {
    border: '0.1rem solid',
    borderColor: (theme: Theme) => theme.palette.primary.dark,
  },
};

export default spreads;
