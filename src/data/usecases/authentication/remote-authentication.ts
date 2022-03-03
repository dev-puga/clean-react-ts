import { HttpPostClient } from "@/data/protocols/http/http-post-client";
import { HttpsStatusCode } from "../../../data/protocols/http/http-response";
import { InvalidCredentialsError } from "../../..//domain/erros/invalid-credentials";
import { AuthenticationParams } from "../../../domain/usecases/authentication";
import { UnexpectedError } from "../../../domain/erros/unexpected-error";

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth(params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    });

    switch (httpResponse.statusCode) {
      case HttpsStatusCode.ok:
        break;
      case HttpsStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }
}
