import { TPhoneInputState } from "../types";

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
    inputValue.length > 2
  );
}

export function checkIfCityValid(inputValue: string) {
  // Check if city is in all-cities file
  return true;
}
export function checkIfPhoneNumberValid(inputValue: TPhoneInputState) {
  //check if phone number would be valid
  return true;
}
