import { isEmptyObject } from '../src/index';

describe('object.isEmptyObject', () => {
  test('isEmptyObject({}) should return true', () => {
    expect(isEmptyObject({})).toBe(true);
  });

  test('isEmptyObject({ a: 1 }) should return false', () => {
    expect(isEmptyObject({ a: 1 })).toBe(false);
  });

  test('isEmptyObject([]) should return false', () => {
    expect(isEmptyObject([])).toBe(false);
  });
});
