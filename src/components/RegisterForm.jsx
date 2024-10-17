"use client";

import { useFormState, useFormStatus } from "react-dom";
import { register } from "../library/userController";

export default function RegisterForm() {
  const [formState, formAction] = useFormState(register, {});
  console.log(formState);

  return (
    <>
    <form action={formAction} className="max-w-xs mx-auto">
      <div className="mb-4">
        <input
          name="username"
          type="text"
          placeholder="Username"
          autoComplete="off"
          className="input input-bordered w-full max-w-xs"
        />
        {formState.errors?.username && (
          <div role="alert" className="alert alert-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 shrink-0 stroke-current">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>{formState.errors?.username}</span>
          </div>
        )}
      </div>
      <div className="mb-4">
        <input
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="off"
          className="input input-bordered w-full max-w-xs"
        />
        {formState.errors?.password && (
          <div role="alert" className="alert alert-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 shrink-0 stroke-current">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>{formState.errors?.password}</span>
          </div>
        )}
      </div>
     <div className="mb-4">
      <input
        name="cpassword"
        type="password"
        placeholder="Confirm Password"
        autoComplete="off"
        className="input input-bordered w-full max-w-xs mb-5"
      />{formState.errors?.password && (
          <div role="alert" className="alert alert-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 shrink-0 stroke-current">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>{formState.errors?.cpassword}</span>
          </div>)}
     </div>

      <button className="btn btn-primary text-white">Create Account</button>
    </form>
    </>
  );
}
