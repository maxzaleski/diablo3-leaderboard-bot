/** BedCredentialsError is returned when Blizzard API returns 403. */
export class BadCredentialsError extends Error {
  constructor() {
    super("blizzard credentials are invalid");
  }
}
