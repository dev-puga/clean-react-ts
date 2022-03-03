export enum HttpsStatusCode {
  ok = 200,
  noContent = 204,

  unauthorized = 401,
  badRequest = 400,
  notFound = 404,
  internalError = 500,
}

export type HttpResponse = {
  statusCode: HttpsStatusCode;
  body?: any;
};
