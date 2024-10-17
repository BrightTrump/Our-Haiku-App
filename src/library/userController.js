"use server";

export const register = async function (previousState, formData) {
  const errors = {};

  function isAlphaNumeric() {
    const regex = /^[a-zA-Z0-9]*$/;
    return regex.test();
  }
  const userSignUp = {
    username: formData.get("username"),
    password: formData.get("password"),
    cpassword: formData.get("cpassword"),
  };
  // Type Checking
  if (typeof userSignUp.username != "string") userSignUp.username = "";
  if (typeof userSignUp.password != "string") userSignUp.password = "";
  if (typeof userSignUp.cpassword != "string") userSignUp.cpassword = "";

  // Trimming White Spaces
  userSignUp.username = userSignUp.username.trim();
  userSignUp.password = userSignUp.password.trim();
  userSignUp.cpassword = userSignUp.cpassword.trim();

  // Username Validation
  if (userSignUp.username.length <= 3 || userSignUp.username.length > 30)
    errors.username = "Username must be between 4 and 30 letters";
  if (!isAlphaNumeric(userSignUp.username))
    errors.username = "You can only us a-z and 0-9";
  if (userSignUp.username == "")
    errors.username = "You must provide a Username";

  // Password Validation
  if (userSignUp.password.length <= 6 || userSignUp.password.length > 25)
    errors.password = "Password must be between 6 & 25 characters";
  if (!isAlphaNumeric(userSignUp.password))
    errors.password = "Password must contain an extra symbol";
  if (userSignUp.password == "")
    errors.password = "You must provide a password";

  if (errors.username || errors.password) {
    return {
      errors: errors,
      success: false,
    };
  }
  if (userSignUp.cpassword !== userSignUp.password)
    errors.password = "Password doesn't match";

  // if (userSignUp.username.length < 3 || userSignUp.username.length > 30) {
  //   errors.username = "Username must be higher than 3 and less than 30";
  // } else if (errors.username || errors.password) {
  //   return {
  //     errors: errors,
  //     success: false,
  //   };
  // } else if (errors.cpassword !== errors.password) {
  //   errors.cpassword = "Password missmatched. enter both password correctly";
  // } else {
  //   errors;
  // }

  //Store a new user in the database

  //Log the user in by giving them a cookie
  return { success: true };
};
