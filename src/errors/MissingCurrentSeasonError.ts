/**
 * MissingCurrentSeasonError is returned when key "CURRENT_SEASON" is missing
 * from runtime environment.
 */
export class MissingCurrentSeasonError extends Error {
  constructor() {
    super(`missing key "CURRENT_SEASON" inside runtime environment`);
  }
}
