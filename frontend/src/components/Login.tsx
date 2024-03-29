import React, { useState } from 'react';
import { loginFields } from '../constants/formFields';
import FormAction from './FormAction';
import FormExtra from './FormExtra';
import Input from './Input';
import { fieldI } from './Signup';

const fields = loginFields;
let fieldsState: fieldI = {};
fields.forEach((field) => (fieldsState[field.id] = ''));

export default function Login() {
  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e: any) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    authenticateUser();
  };

  //Handle Login API Integration here
  const authenticateUser = () => {
    // let loginFields={
    //         email:loginState['email-address'],
    //         password:loginState['password']
    // };
    // const endpoint=`https://api.loginradius.com/identity/v2/auth/login?apikey=${apiKey}&apisecret=${apiSecret}`;
    //  fetch(endpoint,
    //      {
    //      method:'POST',
    //      headers: {
    //      'Content-Type': 'application/json'
    //      },
    //      body:JSON.stringify(loginFields)
    //      }).then(response=>response.json())
    //      .then(data=>{
    //         //API Success from LoginRadius Login API
    //      })
    //      .catch(error=>console.log(error))
  };

  return (
    <div className="w-full flex items-center justify-center">
      <form
        className="mt-2 space-y-6 bg-white shadow-md rounded px-8 pb-8"
        onSubmit={handleSubmit}
      >
        <div className="-space-y-px">
          {fields.map((field) => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={loginState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
              customClass=""
            />
          ))}
        </div>

        <FormExtra />
        <FormAction handleSubmit={handleSubmit} text="Login" />
      </form>
    </div>
  );
}
