// https://redux-toolkit.js.org/rtk-query/usage-with-typescript#error-result-example
import { Alert, Stack } from '@mui/material';

interface Props {
  error: unknown;
}

export const AppError = ({ error }: Props) => {
  const errMsg = typeof error === 'string' ? error : JSON.stringify(error);

  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">{errMsg}</Alert>
    </Stack>
  );
};
