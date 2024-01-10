import { Component } from "react";
import { ClassForm } from "./ClassForm";
import { TUserInformation } from "../types";
import { ProfileInformation } from "../ProfileInformation";
type State = { userInformation: TUserInformation | null };

const defaultUser: TUserInformation = {
  email: "default@default.com",
  firstName: "Default",
  lastName: "Default",
  phone: "1234567",
  city: "Hobbiton",
};

export class ClassApp extends Component<Record<string, never>, State> {
  render() {
    return (
      <>
        <h2>Class</h2>
        <ProfileInformation
          userData={
            // toggle the following lines to change
            // null
            defaultUser
          }
        />
        <ClassForm />
      </>
    );
  }
}
