import { test, expect } from '@jest/globals';
import { HashMap } from './hashmap.js';

test('should exist', () => {
  expect(HashMap).toBeDefined();
});

test('should be a function', () => {
  expect(typeof HashMap).toBe('function');
});

test('should be a constructor', () => {
  expect(() => HashMap()).toThrowError();
  expect(() => new HashMap()).not.toThrowError();
});

test('should the constructor throw Error on call with arguments', () => {
  expect(() => new HashMap(['blah', 3], ['cool', 7])).toThrowError();
  expect(() => new HashMap()).not.toThrowError();
});

test('should be the constructor of all instances of it', () => {
  const hashMap1 = new HashMap();
  const hashMap2 = new HashMap();
  expect(hashMap1).toBeInstanceOf(HashMap);
  expect(hashMap2).toBeInstanceOf(HashMap);
});

test('should class/instance member cannot be added & class prototype cannot be changed', () => {
  expect(() => {
    HashMap.foo = 'blah';
  }).toThrowError();
  expect(() => {
    new HashMap().foo = 'blah';
  }).toThrowError();
  expect(() => {
    Object.setPrototypeOf(HashMap, {});
  }).toThrowError();
  expect(() => {
    Object.setPrototypeOf(HashMap.prototype, {});
  }).toThrowError();
});

test('should "set" be a function exist on an instance and throw an error if the given number of arguments < 2', () => {
  const hashMap = new HashMap();
  expect(hashMap.set).toBeDefined();
  expect(typeof hashMap.set).toBe('function');
  expect(() => hashMap.set()).toThrowError();
  expect(() => hashMap.set('foo')).toThrowError();
  expect(() => hashMap.set('foo', 7)).not.toThrowError();
  expect(() => hashMap.set('foo', 7, 'blah')).not.toThrowError();
});

test('should "get" be a function exist on an instance and throw an Error if "key" argument is not given', () => {
  const hashMap = new HashMap();
  expect(hashMap.get).toBeDefined();
  expect(typeof hashMap.get).toBe('function');
  expect(() => hashMap.get()).toThrowError();
});

test('should "set"/"get" throw an error if the key is of type "object" or the key is empty string', () => {
  const invalidKeys = [{}, [], null, ''];
  const validKeys = [
    undefined,
    false,
    0,
    -0,
    +0,
    0n,
    0.777,
    NaN,
    Infinity,
    'x',
  ];
  const value = 7;
  const hashMap = new HashMap();
  invalidKeys.forEach((key) => {
    expect(() => hashMap.set(key, value)).toThrowError();
    expect(() => hashMap.get(key)).toThrowError();
  });
  validKeys.forEach((key) => {
    expect(() => hashMap.set(key, value)).not.toThrowError();
    expect(() => hashMap.get(key)).not.toThrowError();
  });
});

test('should "set" return same instance it is called on', () => {
  const hashMap = new HashMap();
  expect(hashMap.set('key', 'value')).toBeInstanceOf(HashMap);
  expect(hashMap.set('key', 'value')).toBe(hashMap);
  expect(hashMap.set('key', 'value').set('value', 'key')).toBe(hashMap);
});

test('should "get" & "length" return correct result after "setting" some keys', () => {
  const testValues = [
    ['foo', 7],
    [true, false],
    [0n, 'BigInt'],
    ['foo', 'Again'],
    ['oof', 'collision'],
  ];
  const hashMap = new HashMap();
  testValues.forEach(([key, value]) => {
    expect(() => hashMap.set(key, value)).not.toThrowError();
    expect(hashMap.get(key)).toBe(value);
  });
  expect(hashMap.length).toBe(testValues.length);
  expect(hashMap.get('Unknown key!')).toBe(null);
});

test('should length be immutable', () => {
  const hashMap = new HashMap();
  expect(hashMap.length).toBe(0);
  expect(() => {
    hashMap.length = 1;
  }).toThrowError();
  expect(() => {
    hashMap.length++;
  }).toThrowError();
  expect(() => {
    hashMap.length += 1;
  }).toThrowError();
});

test('should "has" to be a function that throw Error if not given the "key" argument and return correct answer', () => {
  const testValues = [
    ['key', 'value'],
    [false, 'ok'],
    [undefined, 0],
  ];
  const hashMap = new HashMap();
  expect(typeof hashMap.has).toBe('function');
  expect(() => hashMap.has()).toThrowError();
  testValues.forEach(([key, value]) => {
    expect(() => hashMap.set(key, value)).not.toThrowError();
    expect(hashMap.has(key)).toBe(true);
    expect(hashMap.has(value)).toBe(false);
  });
});

test('should "remove" to be a function that throw Error if the "key" argument is missing and return "true" if found & removed, Otherwise false', () => {
  const testValues = [
    ['key', 'value'],
    [false, 'ok'],
    [undefined, 0],
  ];
  const hashMap = new HashMap();
  expect(typeof hashMap.remove).toBe('function');
  expect(() => hashMap.remove()).toThrowError();
  testValues.forEach(([key, value]) => {
    expect(() => hashMap.set(key, value)).not.toThrowError();
  });
  expect(hashMap.length).toBe(testValues.length);
  testValues.forEach(([key, value]) => {
    expect(hashMap.remove(key)).toBe(true);
    expect(hashMap.remove(key)).toBe(false);
    expect(hashMap.remove(value)).toBe(false);
  });
  expect(hashMap.length).toBe(0);
});
