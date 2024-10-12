import sum from './index.js';
import {test, describe} from 'node:test';
import assert from 'node:assert';

describe('sum', () =>  {
    /* test if sum can add correctly
       with negative number and float
    */

    test("can add correctly if two operands are positive", () =>{
        const operand1 = 5;
        const operand2 = 3; 

        const value =  sum(operand1, operand2);

        const expected_value = 8;
        assert.equal(value, expected_value);
    });

    test("return 0 if operand1 is negative", () =>{
        const operand1 = -2;
        const operand2 = 2;

        const value =  sum(operand1, operand2);

        const expected_value = 0;
        assert.equal(value, expected_value);
    });

    test("return 0 operand2 is negative", () =>{
        const operand1 = 2;
        const operand2 = -7;

        const value =  sum(operand1, operand2);

        const expected_value = 0;
        assert.equal(value, expected_value);
    });

    test("return 0 if operand1 is strings", () =>{
        const operand1 = "5";
        const operand2 = 2;

        const value =  sum(operand1, operand2);

        const expected_value = 0;
        assert.equal(value, expected_value);
    });

    test("return 0 if operand2 is string", () =>{
        const operand1 = 2;
        const operand2 = "2";

        const value =  sum(operand1, operand2);

        const expected_value = 0;
        assert.equal(value, expected_value);
    });
});




