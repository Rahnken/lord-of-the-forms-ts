import { useState } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { TextInput } from "../utils/TextInputComponent";
import { PhoneInput } from "../utils/PhoneInputComponent";
import { TPhoneInputState } from "../types";

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "City is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

export const FunctionalForm = () => {
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

  const validateInputs = () => {
    //do the things
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        validateInputs();
      }}
    >
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
      <ErrorMessage message={firstNameErrorMessage} show={true} />

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
      <ErrorMessage message={lastNameErrorMessage} show={true} />

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
      <ErrorMessage message={emailErrorMessage} show={true} />
      <TextInput
        labelText={"City"}
        inputAttr={{
          placeholder: "Hobbiton",
          value: city,
          onChange: (e) => {
            setCity(e.target.value);
          },
        }}
      />
      <ErrorMessage message={cityErrorMessage} show={true} />

      <PhoneInput
        phoneInputState={phoneNumber}
        setPhoneInputState={setPhoneNumber}
      />

      <ErrorMessage message={phoneNumberErrorMessage} show={true} />

      <input type="submit" value="Submit" />
    </form>
  );
};
