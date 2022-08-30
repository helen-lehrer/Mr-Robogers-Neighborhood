import countUp from '../src/scripts.js';

describe('countUp', () => {
  test('should return an empty array', () => {
  let countUpValue = countUp();
    expect(countUpValue).toEqual([]);
  });
  test('should replace specified numbers with corresponding strings', () => {
  let userInput = 1;
  let countUpResult = countUp(userInput);
    expect(countUpResult).toEqual([0, "Beep!"]);
  });
});