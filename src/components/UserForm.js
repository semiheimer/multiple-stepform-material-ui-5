import React, { useState } from "react";
import Success from "./Success";
import Confirm from "./Confirm";
import PersonalDetails from "./PersonalDetails";
import UserDetailsForm from "./UserDetailsForm";

function UserForm() {
  const [inputState, setInputState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  });
  const [step, setStep] = useState(1);

  //proceed to next step
  const nextStep = () => {
    setStep(step + 1);
  };
  //go back to prev step
  const prevStep = () => {
    setStep(step - 1);
  };
  //input changes

  const handleChange = (input) => (event) => {
    setInputState({ ...inputState, [input]: event.target.value });
  };

  switch (step) {
    case 1:
      return (
        <UserDetailsForm
          nextStep={nextStep}
          handleChange={handleChange}
          values={inputState}
        ></UserDetailsForm>
      );
    case 2:
      return (
        <PersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={inputState}
        />
      );
    case 3:
      return (
        <Confirm nextStep={nextStep} prevStep={prevStep} values={inputState} />
      );

    case 4:
      return <Success prevStep={prevStep} />;
    default:
      return (
        <UserDetailsForm
          nextStep={nextStep}
          handleChange={handleChange}
          values={inputState}
        ></UserDetailsForm>
      );
  }

  //next step
}
export default UserForm;
