import { test, expect } from '@jest/globals';
import { mergeSort } from './helpers/merge-sort';
import { Node } from './helpers/node';
import { Tree } from './tree';

test('should exist and be of type "function"', () => {
  expect(Tree).toBeDefined();
  expect(typeof Tree).toBe('function');
});

test('should be constructed only with "new" and accept array of numbers only, Otherwise, throw Error', () => {
  expect(() => Tree()).toThrowError();
  expect(() => new Tree()).not.toThrowError();
  expect(() => new Tree([1, 3, true, 5, 7])).toThrowError();
  expect(() => new Tree([5, 3, 7, 1, 4, 9])).not.toThrowError();
  expect(new Tree()).toBeInstanceOf(Tree);
});

test('should "root" property be exist with the value of null on instance without any inputted array', () => {
  expect(new Tree().root).toBe(null);
});

test('should "buildTree" be a "function" that accept numbers-only array', () => {
  const testTree = new Tree();
  expect(typeof testTree.buildTree).toBe('function');
  expect(() => testTree.buildTree()).toThrowError();
  expect(() => testTree.buildTree([1, 3, true, 5, 7])).toThrowError();
  expect(() => testTree.buildTree([5, 3, 7, 1, 4, 9])).not.toThrowError();
});

const NUMBERS = [5, 1, 9, 3, 2, 7, 4];
const TEST_TREE = new Tree();
const TEST_VALUES = [8, 6, 0, -3, 7, 4];

test('should "buildTree" build a balanced binary search tree', () => {
  expect(TEST_TREE.root).toBe(null);
  expect(TEST_TREE.buildTree(NUMBERS)).toBe(TEST_TREE.root);
  expect(TEST_TREE.root).toBeInstanceOf(Node);
  expect(TEST_TREE.root.right.right.value).toBe(9);
  expect(TEST_TREE.root.right.value).toBe(7);
  expect(TEST_TREE.root.right.left.value).toBe(5);
  expect(TEST_TREE.root.value).toBe(4);
  expect(TEST_TREE.root.left.right.value).toBe(3);
  expect(TEST_TREE.root.left.value).toBe(2);
  expect(TEST_TREE.root.left.left.value).toBe(1);
});

test('should "insert" method be defined and put the value at the right place', () => {
  expect(typeof TEST_TREE.insert).toBe('function');
  expect(() => TEST_TREE.insert()).toThrowError();
  expect(() => TEST_TREE.insert(true)).toThrowError();
  expect(() => TEST_TREE.insert('')).toThrowError();
  TEST_VALUES.forEach((n) => {
    expect(TEST_TREE.insert(n)).toBe(TEST_TREE.root);
  });
  expect(TEST_TREE.root.right.right.value).toBe(9);
  expect(TEST_TREE.root.right.right.left.value).toBe(8);
  expect(TEST_TREE.root.right.value).toBe(7);
  expect(TEST_TREE.root.right.left.right.value).toBe(6);
  expect(TEST_TREE.root.right.left.value).toBe(5);
  expect(TEST_TREE.root.value).toBe(4);
  expect(TEST_TREE.root.left.right.value).toBe(3);
  expect(TEST_TREE.root.left.value).toBe(2);
  expect(TEST_TREE.root.left.left.value).toBe(1);
  expect(TEST_TREE.root.left.left.left.value).toBe(0);
  expect(TEST_TREE.root.left.left.left.left.value).toBe(-3);
});

test('should "deleteItem" method be defined and delete the value from the right place', () => {
  expect(typeof TEST_TREE.deleteItem).toBe('function');
  expect(() => TEST_TREE.deleteItem()).toThrowError();
  expect(() => TEST_TREE.deleteItem(true)).toThrowError();
  expect(() => TEST_TREE.deleteItem('')).toThrowError();
  TEST_VALUES.forEach((n) => {
    expect(TEST_TREE.deleteItem(n)).toBe(true);
    expect(TEST_TREE.deleteItem(n)).toBe(false);
  });
  expect(TEST_TREE.root.right.value).toBe(9);
  expect(TEST_TREE.root.value).toBe(5);
  expect(TEST_TREE.root.left.right.value).toBe(3);
  expect(TEST_TREE.root.left.value).toBe(2);
  expect(TEST_TREE.root.left.left.value).toBe(1);
});

test('should "find" method be defined and return the node with the given value or null otherwise', () => {
  expect(typeof TEST_TREE.find).toBe('function');
  expect(() => TEST_TREE.find()).toThrowError();
  expect(() => TEST_TREE.find(true)).toThrowError();
  expect(() => TEST_TREE.find('')).toThrowError();
  NUMBERS.forEach((n) => {
    // Exclude any values that deleted in the previous tests
    if (!TEST_VALUES.includes(n)) {
      const foundNode = TEST_TREE.find(n);
      expect(foundNode).toBeInstanceOf(Node);
      expect(foundNode.value).toBe(n);
    }
  });
  TEST_VALUES.forEach((n) => {
    expect(TEST_TREE.find(n)).toBe(null);
  });
  expect(TEST_TREE.find(9)).toBe(TEST_TREE.root.right);
  expect(TEST_TREE.find(5)).toBe(TEST_TREE.root);
  expect(TEST_TREE.find(3)).toBe(TEST_TREE.root.left.right);
  expect(TEST_TREE.find(2)).toBe(TEST_TREE.root.left);
  expect(TEST_TREE.find(1)).toBe(TEST_TREE.root.left.left);
});

test('should "levelOrder" method be defined and accept optional callback to use it on each node, Otherwise, return array of values', () => {
  const expectedValues = [5, 2, 9, 1, 3];
  let callbackResult = '';
  let actualCallbackResult = expectedValues.join('');
  const callback = (node) => {
    callbackResult += node.value;
  };
  expect(typeof TEST_TREE.levelOrder).toBe('function');
  expect(() => TEST_TREE.levelOrder(true)).toThrowError();
  expect(() => TEST_TREE.levelOrder('')).toThrowError();
  expect(TEST_TREE.levelOrder(() => undefined)).toBe(undefined);
  expect(Array.isArray(TEST_TREE.levelOrder())).toBe(true);
  const actualValues = TEST_TREE.levelOrder();
  expect(actualValues.length).toBe(expectedValues.length);
  expect(actualValues.every((n, i) => n === expectedValues[i])).toBe(true);
  expect(TEST_TREE.levelOrder(callback)).toBe(undefined);
  expect(callbackResult).toBe(actualCallbackResult);
  const newTestTree = new Tree([5, 7, 1, 4, 2, 6, 3]);
  const newExpectedValues = [4, 2, 6, 1, 3, 5, 7];
  const newActualValues = newTestTree.levelOrder();
  expect(newExpectedValues.length).toBe(newActualValues.length);
  expect(newExpectedValues.every((n, i) => n === newActualValues[i])).toBe(
    true,
  );
  callbackResult = '';
  actualCallbackResult = newActualValues.join('');
  expect(newTestTree.levelOrder(callback)).toBe(undefined);
  expect(actualCallbackResult).toBe(callbackResult);
});

test('should "inOrder" method be defined and accept optional callback to use it on each node, Otherwise, return array of values', () => {
  const expectedValues = [1, 2, 3, 5, 9];
  let callbackResult = '';
  let actualCallbackResult = expectedValues.join('');
  const callback = (node) => {
    callbackResult += node.value;
  };
  expect(typeof TEST_TREE.inOrder).toBe('function');
  expect(() => TEST_TREE.inOrder(true)).toThrowError();
  expect(() => TEST_TREE.inOrder('')).toThrowError();
  expect(TEST_TREE.inOrder(() => undefined)).toBe(undefined);
  expect(Array.isArray(TEST_TREE.inOrder())).toBe(true);
  const actualValues = TEST_TREE.inOrder();
  expect(actualValues.length).toBe(expectedValues.length);
  expect(actualValues.every((n, i) => n === expectedValues[i])).toBe(true);
  expect(TEST_TREE.inOrder(callback)).toBe(undefined);
  expect(callbackResult).toBe(actualCallbackResult);
  callbackResult = '';
  const newTestTree = new Tree([5, 7, 1, 4, 2, 6, 3]);
  const newExpectedValues = [1, 2, 3, 4, 5, 6, 7];
  let newActualValues = newTestTree.inOrder();
  expect(newExpectedValues.length).toBe(newActualValues.length);
  expect(newExpectedValues.every((n, i) => n === newActualValues[i])).toBe(
    true,
  );
  actualCallbackResult = newActualValues.join('');
  expect(newTestTree.inOrder(callback)).toBe(undefined);
  expect(actualCallbackResult).toBe(callbackResult);
  callbackResult = '';
  const numberToBeInserted = [13, 15, 9, 10, 11, 12];
  const allNumbers = [...newExpectedValues, 9, 10, 11, 12, 13, 15];
  numberToBeInserted.forEach((n) => newTestTree.insert(n));
  newActualValues = newTestTree.inOrder();
  expect(newActualValues.length).toBe(allNumbers.length);
  expect(newActualValues.every((n, i) => n === allNumbers[i])).toBe(true);
  actualCallbackResult = newActualValues.join('');
  expect(newTestTree.inOrder(callback)).toBe(undefined);
  expect(actualCallbackResult).toBe(callbackResult);
  callbackResult = '';
});

test('should "preOrder" method be defined and accept optional callback to use it on each node, Otherwise, return array of values', () => {
  const expectedValues = [5, 2, 1, 3, 9];
  let callbackResult = '';
  let actualCallbackResult = expectedValues.join('');
  const callback = (node) => {
    callbackResult += node.value;
  };
  expect(typeof TEST_TREE.preOrder).toBe('function');
  expect(() => TEST_TREE.preOrder(true)).toThrowError();
  expect(() => TEST_TREE.preOrder('')).toThrowError();
  expect(TEST_TREE.preOrder(() => undefined)).toBe(undefined);
  expect(Array.isArray(TEST_TREE.preOrder())).toBe(true);
  const actualValues = TEST_TREE.preOrder();
  expect(actualValues.length).toBe(expectedValues.length);
  expect(actualValues.every((n, i) => n === expectedValues[i])).toBe(true);
  expect(TEST_TREE.preOrder(callback)).toBe(undefined);
  expect(callbackResult).toBe(actualCallbackResult);
  callbackResult = '';
  const newTestTree = new Tree([5, 7, 1, 4, 2, 6, 3]);
  const newExpectedValues = [4, 2, 1, 3, 6, 5, 7];
  let newActualValues = newTestTree.preOrder();
  expect(newExpectedValues.length).toBe(newActualValues.length);
  expect(newExpectedValues.every((n, i) => n === newActualValues[i])).toBe(
    true,
  );
  actualCallbackResult = newActualValues.join('');
  expect(newTestTree.preOrder(callback)).toBe(undefined);
  expect(actualCallbackResult).toBe(callbackResult);
  callbackResult = '';
  const numberToBeInserted = [13, 15, 9, 10, 11, 12];
  const allNumbers = [...newExpectedValues, 13, 9, 10, 11, 12, 15];
  numberToBeInserted.forEach((n) => newTestTree.insert(n));
  newActualValues = newTestTree.preOrder();
  expect(newActualValues.length).toBe(allNumbers.length);
  expect(newActualValues.every((n, i) => n === allNumbers[i])).toBe(true);
  actualCallbackResult = newActualValues.join('');
  expect(newTestTree.preOrder(callback)).toBe(undefined);
  expect(actualCallbackResult).toBe(callbackResult);
  callbackResult = '';
});

test('should "postOrder" method be defined and accept optional callback to use it on each node, Otherwise, return array of values', () => {
  const expectedValues = [1, 3, 2, 9, 5];
  let callbackResult = '';
  let actualCallbackResult = expectedValues.join('');
  const callback = (node) => {
    callbackResult += node.value;
  };
  expect(typeof TEST_TREE.postOrder).toBe('function');
  expect(() => TEST_TREE.postOrder(true)).toThrowError();
  expect(() => TEST_TREE.postOrder('')).toThrowError();
  expect(TEST_TREE.postOrder(() => undefined)).toBe(undefined);
  expect(Array.isArray(TEST_TREE.postOrder())).toBe(true);
  const actualValues = TEST_TREE.postOrder();
  expect(actualValues.length).toBe(expectedValues.length);
  expect(actualValues.every((n, i) => n === expectedValues[i])).toBe(true);
  expect(TEST_TREE.postOrder(callback)).toBe(undefined);
  expect(callbackResult).toBe(actualCallbackResult);
  callbackResult = '';
  const newTestTree = new Tree([5, 7, 1, 4, 2, 6, 3]);
  const newExpectedValues = [1, 3, 2, 5, 7, 6, 4];
  let newActualValues = newTestTree.postOrder();
  expect(newExpectedValues.length).toBe(newActualValues.length);
  expect(newExpectedValues.every((n, i) => n === newActualValues[i])).toBe(
    true,
  );
  actualCallbackResult = newActualValues.join('');
  expect(newTestTree.postOrder(callback)).toBe(undefined);
  expect(actualCallbackResult).toBe(callbackResult);
  callbackResult = '';
  const numberToBeInserted = [13, 15, 9, 10, 11, 12];
  const allNumbers = [1, 3, 2, 5, 12, 11, 10, 9, 15, 13, 7, 6, 4];
  numberToBeInserted.forEach((n) => newTestTree.insert(n));
  newActualValues = newTestTree.postOrder();
  expect(newActualValues.length).toBe(allNumbers.length);
  expect(newActualValues.every((n, i) => n === allNumbers[i])).toBe(true);
  actualCallbackResult = newActualValues.join('');
  expect(newTestTree.postOrder(callback)).toBe(undefined);
  expect(actualCallbackResult).toBe(callbackResult);
  callbackResult = '';
});

test('should "height" be a method that only accepts a node & returns the height of it (from it to the most far leaf)', () => {
  const newTree = new Tree([5, 7, 1, 4, 2, 6, 3]);
  const numberToBeInserted = [13, 15, 10, 11, 12];
  expect(typeof newTree.height).toBe('function');
  expect(() => newTree.height()).toThrowError();
  expect(() => newTree.height(undefined)).toThrowError();
  expect(() => newTree.height(true)).toThrowError();
  expect(() => newTree.height(7)).toThrowError();
  expect(() => newTree.height('')).toThrowError();
  expect(() => newTree.height(null)).toThrowError();
  expect(() => newTree.height(newTree.find(6))).not.toThrowError();
  expect(newTree.height(newTree.find(6))).toBe(1);
  expect(newTree.height(newTree.find(2))).toBe(1);
  expect(newTree.height(newTree.find(7))).toBe(0);
  expect(newTree.height(newTree.find(5))).toBe(0);
  expect(newTree.height(newTree.find(1))).toBe(0);
  expect(newTree.height(newTree.find(4))).toBe(2);
  numberToBeInserted.forEach((n) => newTree.insert(n));
  expect(newTree.height(newTree.find(6))).toBe(5);
  expect(newTree.height(newTree.find(2))).toBe(1);
  expect(newTree.height(newTree.find(7))).toBe(4);
  expect(newTree.height(newTree.find(5))).toBe(0);
  expect(newTree.height(newTree.find(4))).toBe(6);
  expect(newTree.height(newTree.find(1))).toBe(0);
  expect(newTree.height(newTree.find(3))).toBe(0);
  expect(newTree.height(newTree.find(13))).toBe(3);
  expect(newTree.height(newTree.find(15))).toBe(0);
  expect(newTree.height(newTree.find(11))).toBe(1);
  expect(newTree.height(newTree.find(10))).toBe(2);
  expect(newTree.height(newTree.find(12))).toBe(0);
});

test('should "depth" be a method that only accepts a node & returns the depth of it (from the root to it)', () => {
  const newTree = new Tree([5, 7, 1, 4, 2, 6, 3]);
  const numberToBeInserted = [13, 15, 10, 11, 12];
  expect(typeof newTree.depth).toBe('function');
  expect(() => newTree.depth()).toThrowError();
  expect(() => newTree.depth(undefined)).toThrowError();
  expect(() => newTree.depth(true)).toThrowError();
  expect(() => newTree.depth(7)).toThrowError();
  expect(() => newTree.depth('')).toThrowError();
  expect(() => newTree.depth(null)).toThrowError();
  expect(() => newTree.depth(newTree.find(6))).not.toThrowError();
  expect(newTree.depth(newTree.find(4))).toBe(0);
  expect(newTree.depth(newTree.find(6))).toBe(1);
  expect(newTree.depth(newTree.find(2))).toBe(1);
  expect(newTree.depth(newTree.find(7))).toBe(2);
  numberToBeInserted.forEach((n) => newTree.insert(n));
  expect(newTree.depth(newTree.find(4))).toBe(0);
  expect(newTree.depth(newTree.find(6))).toBe(1);
  expect(newTree.depth(newTree.find(2))).toBe(1);
  expect(newTree.depth(newTree.find(7))).toBe(2);
  expect(newTree.depth(newTree.find(13))).toBe(3);
  expect(newTree.depth(newTree.find(15))).toBe(4);
  expect(newTree.depth(newTree.find(10))).toBe(4);
  expect(newTree.depth(newTree.find(11))).toBe(5);
  expect(newTree.depth(newTree.find(12))).toBe(6);
});

test('should "isBalanced" be a method does not accept any argument & if the tree is balanced return "true" or "false" otherwise', () => {
  const newTree = new Tree([5, 7, 1, 4, 2, 6, 3]);
  const numberToBeInserted = [13, 15, 10, 11, 12];
  expect(typeof newTree.isBalanced).toBe('function');
  expect(() => newTree.isBalanced(undefined)).toThrowError();
  expect(() => newTree.isBalanced(true)).toThrowError();
  expect(() => newTree.isBalanced(7)).toThrowError();
  expect(() => newTree.isBalanced('')).toThrowError();
  expect(() => newTree.isBalanced(null)).toThrowError();
  expect(() => newTree.isBalanced(newTree.find(4))).toThrowError();
  expect(() => newTree.isBalanced()).not.toThrowError();
  expect(newTree.isBalanced()).toBe(true);
  // Unbalance
  newTree.insert(numberToBeInserted[0]);
  expect(newTree.isBalanced()).toBe(true);
  newTree.insert(numberToBeInserted[1]);
  expect(newTree.isBalanced()).toBe(false);
  numberToBeInserted.slice(2).forEach((n) => newTree.insert(n));
  expect(newTree.isBalanced()).toBe(false);
  // Reset
  numberToBeInserted.forEach((n) => newTree.deleteItem(n));
  expect(newTree.isBalanced()).toBe(true);
  // Unbalance any node other than root
  const moreValues = [0, -1, 8, 9];
  moreValues.forEach((n) => newTree.insert(n));
  expect(newTree.isBalanced()).toBe(false);
});

test('should "rebalance" be a method does not accept any argument & balance the tree and return the root', () => {
  const newTree = new Tree([5, 7, 1, 4, 2, 6, 3]);
  const levelOrderBalancedBefore = [4, 2, 6, 1, 3, 5, 7];
  const numberToBeInserted = [13, 15, 9, 10, 11, 12];
  const levelOrderBalancedAfter = [7, 3, 11, 1, 5, 9, 13, 2, 4, 6, 10, 12, 15];
  expect(typeof newTree.rebalance).toBe('function');
  expect(() => newTree.rebalance(undefined)).toThrowError();
  expect(() => newTree.rebalance(true)).toThrowError();
  expect(() => newTree.rebalance(7)).toThrowError();
  expect(() => newTree.rebalance('')).toThrowError();
  expect(() => newTree.rebalance(null)).toThrowError();
  expect(() => newTree.rebalance(newTree.find(4))).toThrowError();
  expect(newTree.isBalanced()).toBe(true);
  expect(newTree.rebalance()).toBeInstanceOf(Node);
  const actualLevelOrderBefore = newTree.levelOrder();
  expect(actualLevelOrderBefore.length).toBe(levelOrderBalancedBefore.length);
  expect(
    actualLevelOrderBefore.every((n, i) => n === levelOrderBalancedBefore[i]),
  ).toBe(true);
  numberToBeInserted.forEach((n) => newTree.insert(n));
  expect(newTree.isBalanced()).toBe(false);
  expect(newTree.rebalance()).toBeInstanceOf(Node);
  expect(newTree.isBalanced()).toBe(true);
  const actualLevelOrderAfter = newTree.levelOrder();
  expect(actualLevelOrderAfter.length).toBe(levelOrderBalancedAfter.length);
  expect(
    actualLevelOrderAfter.every((n, i) => n === levelOrderBalancedAfter[i]),
  ).toBe(true);
  // Reset
  numberToBeInserted.forEach((n) => newTree.deleteItem(n));
  expect(newTree.isBalanced()).toBe(false);
  expect(newTree.rebalance()).toBeInstanceOf(Node);
  expect(newTree.isBalanced()).toBe(true);
  // Unbalance any node other than root
  const moreValues = [0, -1, 8, 9]; // [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const levelOrderUnbalanced = [...levelOrderBalancedBefore, 0, 8, -1, 9];
  const levelOrderBalanced = [4, 1, 7, -1, 2, 5, 8, 0, 3, 6, 9];
  moreValues.forEach((n) => newTree.insert(n));
  expect(
    newTree.levelOrder().every((n, i) => n === levelOrderUnbalanced[i]),
  ).toBe(true);
  expect(newTree.isBalanced()).toBe(false);
  expect(newTree.rebalance()).toBeInstanceOf(Node);
  expect(newTree.isBalanced()).toBe(true);
  expect(
    newTree.levelOrder().every((n, i) => n === levelOrderBalanced[i]),
  ).toBe(true);
});

test('Tie it all together', () => {
  const randNumbersLessThan100 = [];
  for (let i = 0; i < 25; i++) {
    let randNum;
    do {
      randNum = Math.floor(Math.random() * 100);
    } while (randNumbersLessThan100.includes(randNum));
    randNumbersLessThan100.push(randNum);
  }
  let valuesInOrder = mergeSort(randNumbersLessThan100);
  let tree;
  expect(() => {
    tree = new Tree(randNumbersLessThan100);
  }).not.toThrowError();
  expect(tree.root.value).toBe(
    valuesInOrder[Math.floor(valuesInOrder.length / 2)],
  );
  expect(tree.isBalanced()).toBe(true);
  let actualValuesInOrder;
  expect(() => {
    actualValuesInOrder = tree.inOrder();
  }).not.toThrowError();
  expect(actualValuesInOrder.length).toBe(valuesInOrder.length);
  expect(actualValuesInOrder.every((n, i) => n === valuesInOrder[i])).toBe(
    true,
  );
  for (let i = 0; i < 10; i++) {
    let randNum;
    do {
      randNum = Math.floor(Math.random() * 100) + 100;
    } while (randNumbersLessThan100.includes(randNum));
    randNumbersLessThan100.push(randNum);
    expect(() => tree.insert(randNum)).not.toThrowError();
  }
  valuesInOrder = mergeSort(randNumbersLessThan100);
  expect(tree.isBalanced()).toBe(false);
  expect(() => tree.rebalance()).not.toThrowError();
  expect(tree.isBalanced()).toBe(true);
  expect(tree.root.value).toBe(
    valuesInOrder[Math.floor(valuesInOrder.length / 2)],
  );
  expect(() => {
    actualValuesInOrder = tree.inOrder();
  }).not.toThrowError();
  expect(actualValuesInOrder.length).toBe(valuesInOrder.length);
  expect(actualValuesInOrder.every((n, i) => n === valuesInOrder[i])).toBe(
    true,
  );
});
