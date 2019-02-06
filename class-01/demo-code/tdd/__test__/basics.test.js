'use strict';

const greet = require('./../greet');
const faker = require('faker');


describe('#demo.test.js', () => {
  // Vinicio - here, we'll write all our tests
  test('These are the basics of TDD', () =>{
    // ARRANGE
    const aNumber = 5;
    const aNullValue = null;
    const fifty = 50;

    // ACT
    // Vinicio - no act, because we are just showing basics

    // ASSERT
    expect(aNumber).toEqual(5);
    expect(fifty).toBeLessThan(100);
    expect(fifty).toBeGreaterThan(10);
    expect(aNullValue).toBeNull();
    const firstArgument = faker.random.number();
    const secondArgument = faker.random.number();
    expect(myModule.myFunction(firstArgument, secondArgument).toEqual(firstArgument + secondArgument));
  });

  test('Showcasing how to add another test ', () => {
    //ARRANGE
    const aTruthyValue = 'hi';
    const aFalsyValue = 0;

    //ACT :(

    //ASSERT
    expect(aTruthyValue).toBeTruthy();
    expect(aFalsyValue).toBeFalsy();
    expect(aTruthyValue).not.toBeFalsy();
  });

  test('greet.sayHi should say hi and ask about Khaleesi', () => {
    // ARRANGE :(
    // ACT
    const returnValue = greet.sayHi('Banana');

    // ASSERT

    expect(returnValue).toEqual('Hello Banana. Have you met my dog Khaleesi?');
  });
});

