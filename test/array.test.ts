import { arrayEqual } from '../src/index';

describe('array.arrayEqual', () => {
  test('arrayEqual([0, 2, 3, 4], [1, 2, 3]) should return false', () => {
    expect(arrayEqual([0, 2, 3, 4], [1, 2, 3])).toBe(false);
  });
  test('arrayEqual([0, 2, 3], [1, 2, 3]) should return false', () => {
    expect(arrayEqual([0, 2, 3], [1, 2, 3])).toBe(false);
  });
  test('arrayEqual([1, 2, 3], [1, 2, 3]) should return false', () => {
    expect(arrayEqual([1, 2, 3], [1, 2, 3])).toBe(true);
  });
  const arr = [1, 2, 3];
  test('arrayEqual([arr, arr]) should return false', () => {
    expect(arrayEqual(arr, arr)).toBe(true);
  });
});
