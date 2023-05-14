import { Box, CircularProgress } from '@mui/material';
import { type FC } from 'react';
import { AppContext } from 'util/context';
import { usePouch } from 'util/pouch';

const Loading: FC = () => {
  const [loading] = usePouch(AppContext, 'showLoader');
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: (theme) => theme.palette.grey[200],
        display: loading ? 'grid' : 'none',
        alignItems: 'center',
        justifyItems: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  );
};
export default Loading;
