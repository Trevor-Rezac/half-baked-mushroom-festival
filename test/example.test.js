// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderMushroom } from '../render-utils.js';

const test = QUnit.test;

test('renderMushroom() should return a DOM element with class name "mushroom"', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class="mushroom"></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderMushroom();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected, 'renderMushroom() returns a DIV with class name "mushroom"');
});
