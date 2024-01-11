import { Component } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { TextInput } from "../utils/TextInputComponent";
import { PhoneInput } from "../utils/PhoneInputComponent";
import { TPhoneInputState, TUserInformation } from "../types";
import {
  checkIfNameValid,
  checkIfCityValid,
  checkIfPhoneNumberValid,
  checkIsEmailValid,
} from "../utils/validations";
import { capitalize, formatPhoneNumber } from "../utils/transformations";

const firstNameErrorMessage =
  "First name must be at least 2 characters long and can only contain letters";
const lastNameErrorMessage =
  "Last name must be at least 2 characters long and can only contain letters";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "City is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";
interface TState {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  phoneNumber: TPhoneInputState;
  isSubmitted: boolean;
}
interface ClassFormProps {
  setUserInformation: (userInfo: TUserInformation) => void;
}
export class ClassForm extends Component<ClassFormProps, TState> {
  state: TState = {
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    phoneNumber: ["", "", "", ""],
    isSubmitted: false,
  };

  getValidityStates = () => ({
    isValidFirstName: checkIfNameValid(this.state.firstName),
    isValidLastName: checkIfNameValid(this.state.lastName),
    isValidEmail: checkIsEmailValid(this.state.email),
    isValidCity: checkIfCityValid(this.state.city),
    isValidPhoneNumber: checkIfPhoneNumberValid(this.state.phoneNumber),
  });

  render() {
    const {
      firstName,
      lastName,
      email,
      city,
      phoneNumber,
      isSubmitted,
    } = this.state;

    const validStates = this.getValidityStates();

    const {
      isValidFirstName,
      isValidLastName,
      isValidCity,
      isValidEmail,
      isValidPhoneNumber,
    } = validStates;

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.setState({ isSubmitted: true });

          const validStates = this.getValidityStates();
          const allValid = Object.values(validStates).every((state) => state);

          if (allValid) {
            const inputUserInfo: TUserInformation = {
              firstName: capitalize(firstName),
              lastName: capitalize(lastName),
              email: email,
              city: city,
              phone: formatPhoneNumber(phoneNumber),
            };
            this.props.setUserInformation(inputUserInfo);
          }
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
              this.setState({ firstName: e.target.value });
            },
          }}
        />
        <ErrorMessage
          message={firstNameErrorMessage}
          show={isSubmitted && !isValidFirstName}
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
          show={isSubmitted && !isValidLastName}
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
          show={isSubmitted && !isValidEmail}
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
          show={isSubmitted && !isValidCity}
        />

        <PhoneInput
          phoneInputState={phoneNumber}
          setPhoneInputState={(phoneInputState) => {
            this.setState({ phoneNumber: phoneInputState });
          }}
        />

        <ErrorMessage
          message={phoneNumberErrorMessage}
          show={isSubmitted && !isValidPhoneNumber}
        />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
