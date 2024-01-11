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
  state: State = {
    userInformation: null,
  };
  setUserInformation = (userInfo: TUserInformation) => {
    this.setState({ userInformation: userInfo });
  };

  render() {
    const { userInformation } = this.state;
    return (
      <>
        <h2>Class</h2>
        <ProfileInformation userData={userInformation} />
        <ClassForm setUserInformation={this.setUserInformation} />
      </>
    );
  }
}
