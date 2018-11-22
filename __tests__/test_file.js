import React from 'react';
import * as Enzyme from 'enzyme';


describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    const val1 = 2;
    const val2 = 2;
    const result = val1 + val2;
    const expectedResult = 4;
    expect(result).toBe(expectedResult);
  });





});


// before test :
// need add '.babelrc' file,
// presets env as:
//{
// "presets": ["env", "react"]
//}
