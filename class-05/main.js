const Node = require('./lib/node');
const LinkedList = require('./lib/linked-list');












const linkedList = new LinkedList();
linkedList.insertAtHead(1);
linkedList.insertAtHead(2);
linkedList.insertAtHead(3);


console.log('Let us stay away from console.log');


// Vinicio - I'm assuming we are using fs, to crate a buffer of the picture
const parseBitmap = buffer => {
  const WIDTH_OFFSET = 18;
  // Vinicio - if I just use naked numbers in my code, these are called
  // "magic numbers", because you neede to be a wizard to understand the code

  const bitmapWidth = buffer.readInt32LE(WIDTH_OFFSET);



};
