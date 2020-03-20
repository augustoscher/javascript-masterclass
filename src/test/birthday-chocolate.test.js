const birthday = require('../hacking/hacker-rank/birthday-chocolate');
const assert = require('assert');

describe('birthday-chocolate', function() {
  it('Should return 1 item', () => {
    const result = birthday([4], 4, 1); //1
    assert.deepEqual(1, result);
  });

  it('Should return 2 items', () => {
    const result = birthday([2, 2, 1, 3, 2, 4, 4], 4, 2) //2
    assert.deepEqual(2, result);
  });
});

