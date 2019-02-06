'use strict';

const greet = module.exports = {};

const secretValue = 'Kali is cute';
const superSecretValue = 'Kali is super cute';

const discountXbox = () => {
  return 'Your xbox is now 5 dollars';
};

greet.sayHi = (name) => {
  return `Hello ${name}. Have you met my dog Khaleesi?`;
};
