import { useState } from 'react';
import { signupFields } from '../constants/formFields';
import FormAction from './FormAction';
import Input from './Input';
import AuthService from '../services/auth.service';

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ''));

export default function Signup() {
  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState);
    createAccount();
  };

  //handle Signup API Integration here
  const createAccount = async () => {
    const resp = await AuthService.register(
      signupState.username,
      signupState.email,
      signupState.password
    );
    console.log('file: Signup.jsx:31 ~ createAccount ~ resp:', resp);
  };

  return (
    <div className="w-full flex items-center justify-center max-auto">
      <form
        className="mt-2 space-y-6 bg-white shadow-md rounded px-8 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="">
          {fields.map((field) => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={signupState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          ))}
          <FormAction handleSubmit={handleSubmit} text="Signup" />
        </div>
      </form>
    </div>
  );
}
