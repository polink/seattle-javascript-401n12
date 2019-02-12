const os = require('os');
const fs = require('fs'); // File System
// - At first, people tried to design computers that used 0-9
//   - We actually have to store/generate/distinguish between 10 different voltage signals
// - What if we had only two signals?
// 	1 - voltage is present
// 	0 - no voltage is present
//
// 	In decimal 0 - 9
// 	00
// 	01
// 	02
// 	03
// 	04
// 	05
// 	06
// 	07
// 	08
// 	09
// To create the next number, I'm going to restart the rigth-most number. And I'm going to increase its left number.
// 9 becomes 0
// 0 becomes 1
// 10
// 19
// 9 becomes 0
// 1 becomes 2
// 20
// ------------------------------------------------------------------------------------
// Binay
// ------------------------------------------------------------------------------------
// Counting using 0 and 1
// 0000
// Increase the right-most value
// 0 -> 1
// 0001 -> one in binary
// to increase the number I'm going to reset the right-most digit and increase its left
// 0010 -> two in binary
// 0011 -> three in binary
// Restart the count in the right most 1, and increase its left
// Restart the count in the current digit and increase its left
// -100  -> four in binary
// -101  -> five in binary
// Increase the right-most 1, we can't so we need to restart it and increase its left
// 0110 -> six in binary
//
// Bit -> Binary digit -> 0 or 1 (In quantum computer, things can be 0 and 1 at the same time)
// Nibble -> 4 bits
// Byte -> 8 bits
// 0000 0110 -> Byte
// ------------------------------------------------------------------------------------
// HEX
// ------------------------------------------------------------------------------------
// 00
// 01
// 02
// 03
// 04
// 05
// 06
// 07
// 08
// 09
// 0A -> 10
// 0B -> 11
// 0C -> 12
// 0D -> 13
// 0E -> 14
// 0F -> 15
// Restart the right-most digit and increase its left
// F becomes 0
// 0 becomes 1
// 10 -> 16 in decimal
//
// Transforming from Hex ty binary is very easy if you have a conversion table
// FA66
// 1111 1010 0110 0110
//
// Transforming from binary to decimal usually requires a little bit more math
// 128 64 32 16 8 4 2 1
//              0 1 1 0
// 2 + 4 = 6
//
//
// Big Endian vs Little Endian
// 128
// 100
//  20
//  	8
//
// 01 23 45 67
//
// Big Endian -> CELLPHONES
// --->
// (01) (23) (45) (67) () represtents a byte
//  1     2    3    4
//
// Little Endian -> COMPUTERS
// <---
// (67) (45) (23) (01)
//  1     2    3    4


// const sampleBuffer = Buffer.from('The Hound');
//
// console.log(sampleBuffer);
// // Vinicio - Every of these blocks is a byte (HEX)
// // Vinicio - we can understand these numbers by using ASCII
//
// console.log(sampleBuffer.toString());
//
// console.log(sampleBuffer[1]); // Vinicio - this will be decimal
//
// console.log(sampleBuffer.readUInt8(1));
// // Vinicio - Stored as binary, default view is hex, but some functions
// // will give you decimal to try to help you
//
//
// // Vinicio - EVERYTHING IN PC will be stored in Little Endian
// console.log(os.endianness()); // Little Endian
//
//
// console.log(sampleBuffer);
// console.log(sampleBuffer.readUInt16LE(0)); // Vinicio - 16 bits (2 bytes) using LE
// console.log(sampleBuffer.readUInt32LE(0)); // Vinicio - 36 bits (4 bytes) using LE
//
// console.log(sampleBuffer);
// //sampleBuffer.writeUInt8(97,8); // Write a byte. The second argument to the function is the buffer
//
// sampleBuffer[8] = 97; // Vinicio - this array notation is only useful to write bytes
// // 97 is the information I want to use
// // 8 is the offset I want to start at
// console.log(sampleBuffer);
// console.log(sampleBuffer.toString());
//
// // Vinicio - I need to know 2 things
// // 1 -> The ASCII value I'm looking for.
// // 2 -> The offset

// fs.readFile(`${__dirname}/sample.txt`, (error, buffer) => {
//   if (error) {
//     console.error(error);
//   }
//   console.log(buffer.toString());
//   buffer[74] = 63;
//   console.log(buffer.toString());
//
//   // Vinicio - how to we achieve 'sit ? in'
//   // Vinicio - you can't easily re-size the buffer
//   // One way to solve this problem is to create a new buffer
//   // Copy everything from the old buffer
//   //newBuffer[i] = oldBuffer[i];
//   for(let i = 0; i < buffer.length; i++) {
//     buffer[i] = i + 49;
//   }
//   console.log(buffer.toString());
// });


const testBuffer = Buffer.from('The Hound');
// testBuffer.write('a',9); // This wont't work :(. We have to create a new buffer
// console.log(testBuffer.toString());

// Let's build our own to-string

const customToString = buffer => {
  let output = '';
  for(let i = 0; i < buffer.length; i++) {
    output += String.fromCharCode(buffer[i]);
  }
  return output;
};

console.log(testBuffer);
console.log(testBuffer.toString());
console.log(customToString(testBuffer));
