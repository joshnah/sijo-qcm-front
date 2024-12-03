import { HttpInterceptorFn } from '@angular/common/http';

const BACKEND = 'https://sijo-qcm-backend.purpleground-9e91f953.francecentral.azurecontainerapps.io'
export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const apiReq = req.clone({ url: `${BACKEND}${req.url}` });
  return next(apiReq);
};