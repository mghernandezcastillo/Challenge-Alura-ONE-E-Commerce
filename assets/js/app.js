import { validate } from "./validations.js";

const inputs = document.querySelectorAll("input , textarea");

inputs.forEach((input) => {
  input.addEventListener("blur", (e) => {
    validate(e.target);
  });
});
