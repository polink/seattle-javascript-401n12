'use strict';

let pol = require('../pol.js');

describe('proof of life', () => {

  test('lives by default', () => {
    expect(pol.isAlive()).toBeTruthy();
  });

  test('dies with a param', () => {
    expect(pol.isAlive('x')).toBeFalsy();
  });

});
