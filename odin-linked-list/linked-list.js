/* 
  ❎ ✅

  You will need two classes or factories:

  LinkedList class / factory, which will represent the full list. ✅
  Node class / factory, containing a value property and a link to the nextNode, set both as null by default. ✅

  Build the following functions in your linked list class / factory:

  append(value) adds a new node containing value to the end of the list ✅
  prepend(value) adds a new node containing value to the start of the list ✅
  size returns the total number of nodes in the list ✅
  head returns the first node in the list ✅
  tail returns the last node in the list ✅
  at(index) returns the node at the given index ✅
  pop removes the last element from the list ✅
  contains(value) returns true if the passed in value is in the list and otherwise returns false. ✅
  find(value) returns the index of the node containing value, or null if not found. ✅
  toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. ✅
  The format should be: ( value ) -> ( value ) -> ( value ) -> null ✅

  Extra credit:
  
  insertAt(value, index) that inserts a new node with the provided value at the given index. ✅
  removeAt(index) that removes the node at the given index. ✅
  Extra Credit Tip: When you insert or remove a node, consider how it will affect the existing nodes. ✅
  Some of the nodes will need their nextNode link updated. ✅
 */

function Node(value = null, nextNode = null, previousNode = null) {
  return Object.seal({ value, nextNode, previousNode });
}

// export default function LinkedList(...values) {
function LinkedList(...values) {
  let head = null;
  let tail = null;
  let size = 0;

  // TODO: Prevent the user from modifying the next/previous nodes!

  const append = (value) => {
    // Adds a new node containing value to the end of the list
    if (size === 0) {
      head = Node(value);
      tail = head;
    } else if (size === 1) {
      tail = Node(value, null, head);
      head.nextNode = tail;
    } else {
      const node = Node(value, null, tail);
      tail.nextNode = node;
      tail = node;
    }
    size++;
    return this;
  };

  const prepend = (value) => {
    // Adds a new node containing value to the start of the list
    if (size === 0) {
      head = Node(value);
      tail = head;
    } else {
      const newHead = Node(value);
      newHead.nextNode = Node(head.value, head.nextNode, newHead);
      head = Node(value, newHead.nextNode);
      console.log(head);
    }
    size++;
    return this;
  };

  const at = (index) => {
    // Returns the node at the given index
    let i = Number(index);
    if (
      Number.isInteger(i) &&
      ((i >= 0 && i < size) || (i < 0 && Math.abs(i) <= size))
    ) {
      if (size < 0) {
        let node = tail;
        while (i < -1) {
          node = node.previousNode;
          i++;
        }
        return node;
      }
      let node = head;
      while (i > 0) {
        node = head.nextNode;
        i--;
      }
      return node;
    }
    return null;
  };

  const pop = () => {
    // Removes the last element from the list
    if (size === 0) return null;
    const removedNode = Node(tail.value);
    if (size === 1) {
      head = null;
      tail = head;
    } else {
      tail = Node(
        tail.previousNode.value,
        tail.nextNode,
        tail.previousNode.previousNode,
      );
    }
    size--;
    return removedNode;
  };

  const shift = () => {
    // Removes the first element from the list
    if (size === 0) return null;
    const removedNode = Node(head.value);
    if (size === 1) {
      head = null;
      tail = head;
    } else {
      head = Node(
        head.nextNode.value,
        head.nextNode.nextNode,
        head.previousNode,
      );
    }
    size--;
    return removedNode;
  };

  const contains = (value) => {
    // Returns true if the passed in value is in the list and otherwise returns false.
    let node = head;
    while (node !== null) {
      // TODO: Handle corner equality cases Array & Object!
      if (node.value === value) {
        return true;
      }
      node = node.nextNode;
    }
    return false;
  };

  const find = (value) => {
    // Returns the index of the node containing value, or null if not found.
    let i = 0;
    let node = head;
    while (node !== null) {
      // TODO: Handle corner equality cases Array & Object!
      if (node.value === value) {
        return i;
      }
      i++;
      node = node.nextNode;
    }
    return null;
  };

  const toString = () => {
    // Represents your LinkedList objects as strings, so you can print them out and preview them in the console.
    // The format should be: ( value ) -> ( value ) -> ( value ) -> null
    let result = 'null';
    let node = tail;
    while (node !== null) {
      result = `( ${node.value} ) -> ${result}`;
      node = node.previousNode;
    }
    return result;
  };

  const insertAt = (value, index) => {
    // Inserts a new node with the provided value at the given index.
    if (!Number.isInteger(index) && index >= size) {
      throw TypeError(
        `Node index must be an integer less than NodeList.size (${size})!`,
      );
    }
    if (index < 0) {
      let previousNode = tail;
      for (let i = index; i < -1; i++) {
        previousNode = previousNode.previousNode;
      }
      previousNode.nextNode = Node(value, previousNode.nextNode, previousNode);
    } else {
      let nextNode = head;
      for (let i = 0; i < index; i++) {
        nextNode = nextNode.nextNode;
      }
      nextNode.previousNode = Node(value, nextNode, nextNode.previousNode);
    }
    return ++size;
  };

  const removeAt = (index) => {
    // Removes the node at the given index.
    if (Number.isInteger(index) && index < size) {
      let node = null;
      if (index < 0) {
        node = tail;
        for (let i = index; i < -1; i++) {
          node = node.previousNode;
        }
      } else {
        node = head;
        for (let i = 0; i < index; i++) {
          node = node.nextNode;
        }
      }
      node.previousNode.nextNode = node.nextNode;
      size--;
      return node;
    }
    return null;
  };

  // If there is any given values, fill the list with them
  if (values.length > 0) {
    values.forEach((v) => append(v));
  }

  return Object.freeze({
    head: Object.freeze(head),
    tail: Object.freeze(tail),
    get length() {
      return size;
    },
    append,
    prepend,
    at,
    pop,
    shift,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  });
}

// export { LinkedList };

// TESTS
const list = LinkedList('blah', 3, true);

console.log(list);

console.log(`\n${list.toString()}`);

console.log(`\nhead.nextNode: ${list.head.nextNode.value}`);
list.head.nextNode = { value: 'foo', nextNode: null, previousNode: null };
console.log(`head.nextNode: ${list.head.nextNode.value}`);

console.log(`\ntail.previousNode: ${list.tail.previousNode.value}`);
list.tail.previousNode = { value: 7, nextNode: null, previousNode: null };
console.log(`tail.previousNode: ${list.tail.previousNode.value}`);

console.log(`\nlength: ${list.length}`);
list.length = 7;
console.log(`length: ${list.length}`);

list.append('last');
console.log(`\n${list.toString()}`);
console.log(`length: ${list.length}`);

list.prepend('first');
console.log(`\n${list.toString()}`);
console.log(`length: ${list.length}`);

console.log(`\n${list.pop().value}`);
console.log(`${list.toString()}`);
console.log(`length: ${list.length}`);

console.log(`\n${list.shift().value}`);
console.log(`${list.toString()}`);
console.log(`length: ${list.length}`);
