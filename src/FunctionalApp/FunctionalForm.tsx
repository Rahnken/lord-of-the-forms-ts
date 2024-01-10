import { Dispatch, SetStateAction, useState } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { TextInput } from "../utils/TextInputComponent";
import { PhoneInput } from "../utils/PhoneInputComponent";
import { TPhoneInputState, TUserInformation } from "../types";
import {
  checkIfCityValid,
  checkIfNameValid,
  checkIfPhoneNumberValid,
  checkIsEmailValid,
} from "../utils/validations";
import { capitalize, formatPhoneNumber } from "../utils/transformations";
import { allCities } from "../utils/all-cities";

const firstNameErrorMessage =
  "First name must be at least 2 characters long and can only contain letters";
const lastNameErrorMessage =
  "Last name must be at least 2 characters long and can only contain letters";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "City is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

export const FunctionalForm = ({
  setUserInformation,
  isSubmitted,
  setIsSubmitted,
}: {
  setUserInformation: Dispatch<SetStateAction<TUserInformation>>;
  isSubmitted: boolean;
  setIsSubmitted: Dispatch<SetStateAction<boolean>>;
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState<TPhoneInputState>([
    "",
    "",
    "",
    "",
  ]);

  const isFirstNameValid = checkIfNameValid(firstName);
  const isLastNameValid = checkIfNameValid(lastName);
  const isEmailValid = checkIsEmailValid(email);
  const isCityValid = checkIfCityValid(city);
  const isPhoneNumberValid = checkIfPhoneNumberValid(phoneNumber);

  const ValidStates = [
    isCityValid,
    isEmailValid,
    isFirstNameValid,
    isLastNameValid,
    isPhoneNumberValid,
  ];

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsSubmitted(true);

        if (ValidStates.every((state) => state)) {
          const inputUserInfo: TUserInformation = {
            firstName: capitalize(firstName),
            lastName: capitalize(lastName),
            email: email,
            city: city,
            phone: formatPhoneNumber(phoneNumber),
          };
          setUserInformation(inputUserInfo);
        }
      }}
    >
      <datalist id="cityList">
        {allCities.map(
          (value, index) =>
            ((<option value={value} key={index}></option>) as unknown) as string
        )}
      </datalist>
      <u>
        <h3>User Information Form</h3>
      </u>

      <TextInput
        labelText={"First Name"}
        inputAttr={{
          name: "firstName",
          placeholder: "Bilbo",
          value: firstName,
          onChange: (e) => {
            setFirstName(e.target.value);
          },
        }}
      />

      <ErrorMessage
        message={firstNameErrorMessage}
        show={isSubmitted && !isFirstNameValid}
      />

      <TextInput
        labelText={"Last Name"}
        inputAttr={{
          placeholder: "Baggins",
          value: lastName,
          onChange: (e) => {
            setLastName(e.target.value);
          },
        }}
      />
      <ErrorMessage
        message={lastNameErrorMessage}
        show={isSubmitted && !isLastNameValid}
      />

      <TextInput
        labelText={"Email"}
        inputAttr={{
          placeholder: "bilbo-baggins@adventurehobbits.net",
          value: email,
          onChange: (e) => {
            setEmail(e.target.value);
          },
        }}
      />
      <ErrorMessage
        message={emailErrorMessage}
        show={isSubmitted && !isEmailValid}
      />
      <TextInput
        labelText={"City"}
        inputAttr={{
          placeholder: "Hobbiton",
          value: city,
          onChange: (e) => {
            setCity(e.target.value);
          },
          list: "cityList",
        }}
      />
      <ErrorMessage
        message={cityErrorMessage}
        show={isSubmitted && !isCityValid}
      />

      <PhoneInput
        phoneInputState={phoneNumber}
        setPhoneInputState={setPhoneNumber}
      />

      <ErrorMessage
        message={phoneNumberErrorMessage}
        show={isSubmitted && !isPhoneNumberValid}
      />

      <input type="submit" value="Submit" />
    </form>
  );
};
