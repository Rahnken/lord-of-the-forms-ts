import { useState } from "react";
import { ProfileInformation } from "../ProfileInformation";
import { FunctionalForm } from "./FunctionalForm";
import { TUserInformation } from "../types";

export const FunctionalApp = () => {
  const [userInformation, setUserInformation] = useState<TUserInformation>({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    phone: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      <h2>Functional</h2>
      <ProfileInformation
        userData={userInformation}
        isSubmitted={isSubmitted}
      />
      <FunctionalForm
        setUserInformation={setUserInformation}
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
      />
    </>
  );
};
