import { BaseQueryFn } from '@reduxjs/toolkit/query/react';
import { AxiosError } from 'axios';

import { waitForMe } from '@/shared/utils/waitforme';

import { axiosInstance } from './connection';
import { ZodSchemasValidation } from './utils/zod-schemas.validation';

export const baseQuery =
  ({ baseUrl }: { baseUrl: string } = { baseUrl: '' }): BaseQueryFn<any> =>
  async ({ url, method, data }) => {
    try {
      await waitForMe(1000);
      const res = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
      });

      ZodSchemasValidation(url, res);

      return { data: res.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;

      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  };
