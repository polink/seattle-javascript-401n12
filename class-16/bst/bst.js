'use strict';

class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  // O(lg n) in the average and best case
  // O(n) in the worst case
  insert(nodeToInsert) {
    // Vinicio - we start by checking if the value is present
    if(!nodeToInsert) {
      throw new Error('Can not insert a null value');
    }

    if(!this.root) {
      this.root = nodeToInsert;
      return;
    }
    //-------------------------------------------------------
    // FINDING THE APPROPIATE PLACE TO INSERT THE TREE
    //-------------------------------------------------------
    let current = this.root;
    while(true) {
      if(nodeToInsert.value > current.value) {
        // Vinicio - here we want to continue to the right
        if(!current.right) {
          current.right = nodeToInsert;
          // Vinicio - here we have completed the process
          return;
        }
        current = current.right; // Vinicio - this line is moving down
      } else {
        // Vinicio -here we want to go on the left
        if(!current.left) {
          current.left = nodeToInsert;
          return;
        }
        current = current.left;
      }
    }
  }
  // find(valueToFind) {
  // }
}


const BST = new BinarySearchTree();
BST.insert(new Node(10));
BST.insert(new Node(15));
BST.insert(new Node(5));
BST.insert(new Node(7));
console.log(BST);
