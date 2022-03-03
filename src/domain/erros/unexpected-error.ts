export class UnexpectedError extends Error {
  constructor() {
    super("OOPS! Unexpected error, try again later!");
    this.name = "UnexpectedError";
  }
}
