const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList(l, k) {
  let HEAD = l;
  let current = HEAD;
  //start case
  if (current.value == k) {
    while (current.next == k) {
      current = current.next;
    }
    HEAD = current.next;
  }
  //other case
  current = HEAD;
  while (current.next) {
    //start checking
    if (current.next.value == k) {
      let newCurrentNext = current.next;
      while (newCurrentNext.value == k) {
        newCurrentNext = newCurrentNext.next;
        if (newCurrentNext == null) {
          break;
        } 
      }
      current.next = newCurrentNext;
    }
    //go next
    current = current.next
    if (current == undefined) {
      break;
    } 
  }

  return HEAD;
  /*let current = l;
  while (true) {
    console.log(current.value);
    /// start case
    if (current.value === k) {
      current.next = 
    }
    if (current.next == null) {
      break;
    } else {
      current = current.next;
    }
  }*/

  //delete first
  /*
  if (l.value === k && position === 0) {
    l = current.next;
  } else if (l.value === k) {
    let prev = null;
    let index = 0;

    while (index < )
  }

  console.log(current);
  console.log(l);
  return l;
  */
}

module.exports = {
  removeKFromList
};
