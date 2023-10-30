export class ValidationError extends Error {}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function checkPhoneNumber(value: any) {
  if (!value.match(/^[0-9\-]+$/)) {
    throw new ValidationError()
  }
}
