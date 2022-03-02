export enum HttpsStatusCode {
  unauthorized = 401,
  noContent = 204,
}

export type HttpResponse = {
  statusCode: HttpsStatusCode;
  body?: any;
};
