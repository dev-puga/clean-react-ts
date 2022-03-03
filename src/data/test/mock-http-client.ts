import {
  HttpPostClient,
  HttpPostParams,
} from "../protocols/http/http-post-client";
import { HttpResponse, HttpsStatusCode } from "../protocols/http/http-response";

export class HttpPostClientSpy implements HttpPostClient {
  url?: string;
  body?: object;
  response: HttpResponse = {
    statusCode: HttpsStatusCode.ok,
  };

  async post(params: HttpPostParams): Promise<HttpResponse> {
    this.url = params.url;
    this.body = params.body;
    return Promise.resolve(this.response);
  }
}
