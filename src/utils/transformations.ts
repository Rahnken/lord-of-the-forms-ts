import { TPhoneInputState } from "../types";

export const capitalize = (str: string) => {
  const capital = str[0].toUpperCase();
  const rest = str.slice(1).toLowerCase();
  return capital.concat(rest);
};

export const formatPhoneNumber = (str: TPhoneInputState) => {
  return str.join("-");
};
