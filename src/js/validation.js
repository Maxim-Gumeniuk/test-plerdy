import {inputName, inputTel, errorName, errorNumber, select} from './check';
import { resetError } from './resetError';

export const formValidation = () => {

  if (inputName.value.trim().length === 0 && inputTel.value.trim().length === 0) {
    inputName.style.border = '1px solid #da1616';
    inputTel.style.border = '1px solid #da1616';
    errorName.style.opacity = '1';
    errorNumber.style.opacity = '1';

    resetError(inputName, inputTel, errorName, errorNumber);

    return;
  }

  if (inputName.value.trim().length === 0) {
    inputName.style.border = '1px solid #da1616';
    errorName.style.opacity = '1';

    resetError(inputName, inputTel, errorName, errorNumber);

    return;
  }

  if (inputTel.value.trim().length === 0) {
    inputTel.style.border = '1px solid #da1616';
    errorNumber.style.opacity = '1';

    resetError(inputName, inputTel, errorName, errorNumber);

    return;
  }

  inputName.value = '';
  inputTel.value = '';
};