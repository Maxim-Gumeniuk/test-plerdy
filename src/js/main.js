import * as bootstrap from 'bootstrap';
import Swiper from './swiper';
import { formValidation } from './validation';
import { text, list, btn, options, selects,inputName, inputTel, modal, validation } from './check';

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
