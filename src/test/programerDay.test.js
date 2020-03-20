const dayOfProgrammer = require('../hacking/hacker-rank/programerDay');
const assert = require('assert');

describe('programerDay', function() {
  it('Should return 12.09.2016 item', () => {
    const result = dayOfProgrammer(2016);
    assert.deepEqual(result, "12.09.2016");
  });

  it('Should return 13.09.2015 items', () => {
    const result = dayOfProgrammer(2015);
    assert.deepEqual(result, "13.09.2015");
  });

  it('Should return 26.09.1918 items', () => {
    const result = dayOfProgrammer(1918);
    assert.deepEqual(result, "26.09.1918");
  });
});

