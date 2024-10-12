import {sum} from './index.js';
import {test, describe} from 'node:test';
import assert from 'node:assert';

describe('sum', () =>  {
             /* test if sum can add correctly*/

    test("sum can add correctly ", () =>{
        const operand1 = 5
        const operand2 = 3 

        const value =  sum(operand1, operand2)

        const expected_value = 8
        assert.equal(value, expected_value)
    })


})
