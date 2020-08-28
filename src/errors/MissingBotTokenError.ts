/**
 * MissingBotTokenError is returned the key "BOT_TOKEN" is missing from runtime
 * environment.
 */
export class MissingBotTokenError extends Error {
  constructor() {
    super(`missing key "BOT_TOKEN" inside runtime environment`);
  }
}
