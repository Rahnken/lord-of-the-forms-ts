import { Component } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { TextInput } from "../utils/TextInputComponent";
import { PhoneInput } from "../utils/PhoneInputComponent";
import { TPhoneInputState } from "../types";
import {
  checkIfNameValid,
  checkIfCityValid,
  checkIfPhoneNumberValid,
  checkIsEmailValid,
} from "../utils/validations";

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "State is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

interface TState {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  phoneNumber: TPhoneInputState;
  isSubmitted: boolean;
}

export class ClassForm extends Component<Record<string, never>, TState> {
  state: TState = {
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    phoneNumber: ["", "", "", ""],
    isSubmitted: false,
  };

  isValidFirstName = checkIfNameValid(this.state.firstName);
  isValidLastName = checkIfNameValid(this.state.lastName);
  isValidEmail = checkIsEmailValid(this.state.email);
  isValidCity = checkIfCityValid(this.state.city);
  isValidPhoneNumber = checkIfPhoneNumberValid(this.state.phoneNumber);

  render() {
    const {
      firstName,
      lastName,
      email,
      city,
      phoneNumber,
      isSubmitted,
    } = this.state;
    return (
      <form>
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
              this.setState({ firstName: e.target.value });
            },
          }}
        />
        <ErrorMessage
          message={firstNameErrorMessage}
          show={isSubmitted && !this.isValidFirstName}
        />

        <TextInput
          labelText={"Last Name"}
          inputAttr={{
            placeholder: "Baggins",
            value: lastName,
            onChange: (e) => {
              this.setState({ lastName: e.target.value });
            },
          }}
        />
        <ErrorMessage
          message={lastNameErrorMessage}
          show={isSubmitted && !this.isValidLastName}
        />

        <TextInput
          labelText={"Email"}
          inputAttr={{
            placeholder: "bilbo-baggins@adventurehobbits.net",
            value: email,
            onChange: (e) => {
              this.setState({ email: e.target.value });
            },
          }}
        />
        <ErrorMessage
          message={emailErrorMessage}
          show={isSubmitted && !this.isValidEmail}
        />

        <TextInput
          labelText={"City"}
          inputAttr={{
            placeholder: "Hobbiton",
            value: city,
            onChange: (e) => {
              this.setState({ city: e.target.value });
            },
            list: "cityList",
          }}
        />
        <ErrorMessage
          message={cityErrorMessage}
          show={isSubmitted && !this.isValidCity}
        />

        <PhoneInput
          phoneInputState={phoneNumber}
          setPhoneInputState={(phoneInputState) => {
            this.setState({ phoneNumber: phoneInputState });
          }}
        />

        <ErrorMessage
          message={phoneNumberErrorMessage}
          show={isSubmitted && !this.isValidPhoneNumber}
        />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
