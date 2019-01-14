const assert = require('assert');
const NFA = require('../nfa.js');
const testData = require('./testData.json');

const test = {};
exports.test = test;

test['should return true for test string 0'] = function() {
  const nfaTuple = {
    states: ['q1', 'q3', 'q7', 'q2', 'q5', 'q6', 'q4'],
    alphabets: ['1', '0'],
    delta: {
      q1: { e: ['q2', 'q5'] },
      q2: { '0': ['q3'] },
      q3: { '1': ['q4'] },
      q4: { '0': ['q3'] },
      q5: { '1': ['q6'] },
      q6: { '0': ['q7'] },
      q7: { '1': ['q6'] }
    },
    'start-state': 'q1',
    'final-states': ['q3', 'q6']
  };
  let nfa = new NFA(nfaTuple);
  assert.ok(nfa.doesAccept('0'));
  assert.ok(!nfa.doesAccept('10'));
  assert.ok(nfa.doesAccept('1'));
  assert.ok(nfa.doesAccept('101'));
}

test['run regression test'] = function() {
  for(let testCase of testData) {
    if (testCase['type'] == 'nfa') {

      console.log('---',testCase['name'])
      let nfa = new NFA(testCase['tuple']);
      for(let testString of testCase['pass-cases']) {
        console.log(testString);
        assert.ok(nfa.doesAccept(testString));
      }
      for(let testString of testCase['fail-cases']) {
        assert.ok(!nfa.doesAccept(testString));
      }
    }
  }
}
