// 'use strict';
//
// // 3rd Party Resources
// const express = require('express');
// const cors = require('cors');
// const morgan = require('morgan');
//
// // Esoteric Resources
// const errorHandler = require( './middleware/error.js');
// const notFound = require( './middleware/404.js' );
// const authRouter = require( './auth/router.js' );
//
// // Prepare the express app
// const app = express();
//
// // App Level MW
// app.use(cors());
// app.use(morgan('dev'));
//
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
//
// // Routes
// app.use(authRouter);
//
// // Catchalls
// app.use(notFound);
// app.use(errorHandler);
//
// let isRunning = false;
//
// module.exports = {
//   server: app,
//   start: (port) => {
//     if( ! isRunning ) {
//       app.listen(port, () => {
//         isRunning = true;
//         console.log(`Server Up on ${port}`);
//       });
//     }
//     else {
//       console.log('Server is already running');
//     }
//   },
// };


const list = {
  value: 1,
  next : {
    value : 2,
    next : {
      value : 3,
      next : null
    }
  }
};

const recursiveTraverse = (node) => {
  // BASE CASE
  if(node === null) {
    return; // USE BIIIIIING
  }
  // RECURSIVE CASE
  // vinicio - I don't nee a return here because I'm not
  // returnin a recursive value
  // console.log(node.value); // Tail Recursion
  recursiveTraverse(node.next);
  console.log(node.value); // Head Recursion
};

////

recursiveTraverse(list);
