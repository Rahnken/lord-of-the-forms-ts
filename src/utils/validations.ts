import { TPhoneInputState } from "../types";
import { allCities } from "./all-cities";

export function checkIsEmailValid(emailAddress: string) {
  // eslint-disable-next-line no-useless-escape
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return !!emailAddress.match(regex);
}

//NOTE: Because the logic of these are identical I'm abstracting it
// export function checkIfFirstNameValid(inputValue: string) {
//   return (
//     inputValue
//       .split("")
//       .every((char) => char.toLowerCase() !== char.toUpperCase()) &&
//     inputValue.length > 2
//   );
// }
// export function checkIfLastNameValid(inputValue: string) {
//   return (
//     inputValue
//       .split("")
//       .every((char) => char.toLowerCase() !== char.toUpperCase()) &&
//     inputValue.length > 2
//   );
// }
export function checkIfNameValid(inputValue: string) {
  return (
    inputValue
      .split("")
      .every((char) => char.toLowerCase() !== char.toUpperCase()) &&
    inputValue.length >= 2
  );
}

export function checkIfCityValid(inputValue: string) {
  return allCities.includes(inputValue);
}
export function checkIfPhoneNumberValid(inputValue: TPhoneInputState) {
  const reqLengths = [2, 2, 2, 1];

  return (
    inputValue[0].length === reqLengths[0] &&
    inputValue[1].length === reqLengths[1] &&
    inputValue[2].length === reqLengths[2] &&
    inputValue[3].length === reqLengths[3]
  );
}
