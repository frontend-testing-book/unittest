import type { HttpError, Result } from "./type";

export const httpError: HttpError = {
  err: { message: "internal server error" },
};

export const postMyAddressMock: Result = {
  result: "ok",
};
