'use strict';

// When mocking out embedded modules like fs or buffer, you have to tell jest to mock it
// For 3rd party modules, you can "auto" mock them by simply putting them in the correct __mocks__ folder
jest.mock('fs');

const reader = require('../../lib/reader.js');

// Notice the use of done as a param to the it() block, and calling done() within the async functions

describe('File Reader Module', () => {

  it('when given a bad file, returns an error', (done) => {
    // Note that the actual path here doesn't really matter.
    // If we weren't mocking, it would.  The "fs" module would need
    // to find the actual file.
    //
    // Also note that this file is named "bad.txt".  Our mock fs module
    // will always return an error if a file has the word "bad" in its name
    let file = `${__dirname}/../../data/bad.txt`;
    reader(file, (err,data) => {
      expect(err).toBeDefined();
      done();
    });
  });

  it('when given a real file, returns the contents', (done) => {
    let file = `${__dirname}/../../data/file1.txt`;
    reader(file, (err,data) => {
      expect(err).toBeUndefined();
      // We don't need to care what the text is, only that we got back a string
      // That's the interface of our reader module: Give a file+cb, get back stringified  contents
      expect(typeof data).toBe('string');
      done();
    });
  });

});