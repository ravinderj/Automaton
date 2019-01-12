const assert = require('assert');
const DFA = require('../dfa.js');

const test = {};
exports.test = test;

test['should return true for test string with odd number of zeroes'] = function() {
  let tuple = {
    states: ['q1', 'q2'],
    alphabets: ['1', '0'],
    delta: { q1: { '0': 'q2', '1': 'q1' }, q2: { '0': 'q1', '1': 'q2' } },
    'start-state': 'q1',
    'final-states': ['q2']
  };
  let dfa = new DFA(tuple);
  assert.ok(dfa.doesAccept('0'));
  assert.ok(!dfa.doesAccept('00'));
  assert.ok(dfa.doesAccept('000'));
  assert.ok(!dfa.doesAccept('0000'));
  assert.ok(dfa.doesAccept('00000'));
}
