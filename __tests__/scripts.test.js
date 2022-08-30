import countUp from '../src/scripts.js';

describe('countUp', () => {
  test('should return an empty array', () => {
  let countUpValue = countUp();
    expect(countUpValue).toEqual([]);
  });
});