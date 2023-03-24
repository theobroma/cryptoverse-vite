// ! for Schema debug
import { fromZodError } from 'zod-validation-error';
import { CoinsResponseSchema } from '../../../types';

export const ZodSchemasValidation = (url: string, res: any) => {
  const splittedUrl = url.split('?')[0];
  const asPathNestedRoutes = splittedUrl
    .split('/')
    .filter((v: string) => v.length > 0);

  // console.log('url :>> ', url);
  // console.log('splittedUrl :>> ', splittedUrl);
  // console.log('asPathNestedRoutes :>> ', asPathNestedRoutes);

  try {
    if (asPathNestedRoutes[0] === 'coins') {
      console.log('CoinsResponseSchema:>> ');
      CoinsResponseSchema.parse(res.data);
    }
    // ============================================
    // console.log('res.data :>> ', res.data);
  } catch (error: any) {
    // console.log(error);
    const validationError = fromZodError(error);
    // the error now is readable by the user
    // you may print it to console
    // or return it via an API
    console.log(validationError);
  }
};
