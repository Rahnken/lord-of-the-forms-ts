import { useState } from "react";
import { ProfileInformation } from "../ProfileInformation";
import { FunctionalForm } from "./FunctionalForm";
import { TUserInformation } from "../types";

export const FunctionalApp = () => {
  const [
    userInformation,
    setUserInformation,
  ] = useState<TUserInformation | null>(null);

  return (
    <>
      <h2>Functional</h2>
      <ProfileInformation userData={userInformation} />
      <FunctionalForm setUserInformation={setUserInformation} />
    </>
  );
};
