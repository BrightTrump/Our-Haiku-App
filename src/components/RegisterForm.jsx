"use client";

import { useFormState, useFormStatus } from "react-dom";
import { register } from "../backend/userController";

export default function RegisterForm() {
  const [formState, formAction] = useFormState(register, {});
  console.log(formState);

  return (
    <form action={formAction} className="max-w-xs mx-auto">
      <input
        name="username"
        type="text"
        placeholder="Username"
        autoComplete="off"
        className="input input-bordered w-full max-w-xs mb-5"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        autoComplete="off"
        className="input input-bordered w-full max-w-xs mb-5"
      />
      <input
        name="password"
        type="password"
        placeholder="Confirm Password"
        autoComplete="off"
        className="input input-bordered w-full max-w-xs mb-5"
      />

      <button type="button" className="btn btn-primary text-white">
        Create Account
      </button>
    </form>
  );
}
