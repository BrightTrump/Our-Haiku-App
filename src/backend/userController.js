"use server";

export const register = async function () {
  console.log("Hello, this is a server site");
  return {
    skyColor: "blue",
    grassColor: "greeen",
  };
};
