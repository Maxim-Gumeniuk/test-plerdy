import * as bootstrap from 'bootstrap';
import Swiper from './swiper';
import { formValidation } from './validation';

export const btn = document.getElementById('button-contact');
export const inputName = document.getElementById('input-name');
export const inputTel = document.getElementById('input-tel');
export const errorName = document.getElementById('error-name');
export const errorNumber = document.getElementById('error-number');

export const selects = document.getElementById('selectField');
export const text = document.getElementById('selectText');
export const options = document.getElementsByClassName('option');
export const list = document.getElementById('list');
export const arrow = document.getElementById('arrowIcon');

btn.addEventListener('click', formValidation);

for (const option of options) {
  option.onclick = function () {
    text.innerHTML = this.textContent;
    list.classList.toggle('hide');
  };
}

selects.onclick = function () {
  list.classList.toggle('hide');
};