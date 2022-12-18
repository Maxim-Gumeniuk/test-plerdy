export const resetError = (param1, param2, param3, param4) => {
  setTimeout(() => {
    param1.style.border = '1px solid #D5D5D6';
    param2.style.border = '1px solid #D5D5D6';
    param3.style.opacity = '0';
    param4.style.opacity = '0';
  }, 2000);
};