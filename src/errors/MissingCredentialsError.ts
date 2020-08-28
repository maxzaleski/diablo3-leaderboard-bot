/**
 * MissingCredentialsError is returned the key "BLIZZARD_CLIENT_ID" or
 * "BLIZZARD_CLIENT_SECRET" is missing from runtime environment.
 */
export class MissingCredentialsError extends Error {
  constructor() {
    super(
      `missing keys "BLIZZARD_CLIENT_ID" and/or "BLIZZARD_CLIENT_SECRET" ` +
        "inside runtime environment"
    );
  }
}
