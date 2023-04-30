import {
  enqueueSnackbar,
  type BaseVariant,
  type SnackbarMessage,
  type OptionsObject,
} from 'notistack';

const snackFactory =
  (variant: BaseVariant) =>
  (message: SnackbarMessage, opts?: OptionsObject<BaseVariant>) =>
    enqueueSnackbar(message, { variant, ...opts });

const snack = Object.freeze({
  default: snackFactory('default'),
  error: snackFactory('error'),
  success: snackFactory('success'),
  warning: snackFactory('warning'),
  info: snackFactory('info'),
  catch: (error: Error) =>
    enqueueSnackbar(error.toString(), { variant: 'error' }),
});

export default snack;
